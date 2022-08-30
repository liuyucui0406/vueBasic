<template>
    <div class="dropdown" ref="dropdownRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" aria-expanded="false" @click.prevent="onToggleSelect">
            hi,你好{{loginName}}
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"  :style="{display: 'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref ,watch} from 'vue'
import useClickOutside from './../hooks/useClickOutside'

export default defineComponent({
    props:{
       loginName:{
            type:String,
            required:true
       }
    },
    setup() {
        const isOpen=ref(false);
        const onToggleSelect=()=>{
            isOpen.value=!isOpen.value
        }
        /*********************************/
        const dropdownRef=ref<null|HTMLElement>(null)
        const isClickOut=useClickOutside(dropdownRef);
        watch(isClickOut,()=>{
            if(isOpen.value&&isClickOut.value){
                isOpen.value=false
            }
        })
        return{
            isOpen,
            onToggleSelect,
            dropdownRef
        }
    },
})
</script>
