<template>
    <div class="box" v-if="isOpen">
        <h2>
            <slot></slot>
            在我前面添加
        </h2>
        <button @click="closeModel">关闭</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props:{
        isOpen:Boolean
    },
    emits:{
        'close-model':null
    },
    setup(props,context){
        const closeModel=()=>{
            context.emit('close-model');
        }
        return{
            closeModel
        }
    }
})
</script>
<style scoped>
.box{
    width:200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%);
    border:1px solid #666;
    z-index:999;
}
</style>
