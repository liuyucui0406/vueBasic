
import{ref,onMounted,onUnmounted, Ref} from 'vue'
const isClickOutside=(elementRef:Ref<null|HTMLElement>)=>{
    const isClick=ref(false);
    const handler=(e:MouseEvent)=>{
        if(elementRef.value){
            if(elementRef.value.contains(e.target as HTMLElement)){
                isClick.value=false
            }else{
                isClick.value=true
            }
        }
    }
    onMounted(()=>{
        document.addEventListener('click',handler)
    })
    onUnmounted(()=>{
        document.removeEventListener('click',handler)
    })
    return isClick
}
 export default isClickOutside
