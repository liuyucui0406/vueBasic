import {onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
interface DataProps{
    x:number,
    y:number
}
function useMouseTracker(){
    const data:DataProps=reactive({
        x:0,
        y:0,
    })
    // const x=ref(0)
    // const y=ref(0)
    const updatePosition=(e:MouseEvent)=>{
        data.x=e.pageX
        data.y=e.pageY
    }
    onMounted(()=>{
        document.addEventListener('click',updatePosition)
    })
    onUnmounted(()=>{
        document.removeEventListener('click',updatePosition)
    })
    const refsData=toRefs(data)
    return {...refsData}
}
export default useMouseTracker