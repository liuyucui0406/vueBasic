<template>
    <li class="dropdown-item" :class="{'is-disabled':disabled}">
       <slot></slot>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        disabled:{
            type:Boolean,
            default:false
        }
    },
    setup() {
        return{}
    },
})
</script>
<style >
.dropdown-item.is-disabled {
    color: #6e37; ;
    pointer-events: none ;
    background-color: transparent;
}
</style>
