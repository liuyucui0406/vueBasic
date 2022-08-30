<template>
    <div class="validate-input-container pb-3">
        <input type="text"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        :value="inputRef.val"
        @input="updateInputValue"
        @blur="validateInput"
        v-bind="$attrs"
       
        >
        <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
   </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import {RulesProp} from '@/types/index'
import {emitter} from '@/types'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
    inheritAttrs:false,
    props:{
        rules:{
            type:Array as PropType<RulesProp>,
            required:false
        },
        modelValue:String
    },
    setup(props,context) {
        const inputRef=reactive({
            val:props.modelValue||'',
            error:false,
            message:''
        })
        const validateInput=()=>{
            if(props.rules){
                const allPassed=props.rules.every((rule)=>{
                    inputRef.message=rule.message
                    let passed=true;
                    switch (rule.type) {
                        case 'required':
                            passed=(inputRef.val.trim()!='')
                            break;
                        case 'email':
                            passed=emailReg.test(inputRef.val)
                            break
                        default:
                            break;
                    }
                    return passed
                })
                inputRef.error=!allPassed
                return allPassed
            }else{
                return true
            }
        }
        const updateInputValue=(e:KeyboardEvent)=>{
            const targetValue=(e.target as HTMLInputElement).value;
            inputRef.val=targetValue
            context.emit('update:modelValue',targetValue)
        }
        onMounted(()=>{
            emitter.emit('form-item-created',validateInput)
        })
        return{
            inputRef,
            validateInput,
            updateInputValue
        }
    },
})
</script>
