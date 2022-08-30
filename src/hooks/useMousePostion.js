import { __assign } from "tslib";
import { onMounted, onUnmounted, reactive, toRefs } from "vue";
function useMouseTracker() {
    var data = reactive({
        x: 0,
        y: 0,
    });
    // const x=ref(0)
    // const y=ref(0)
    var updatePosition = function (e) {
        data.x = e.pageX;
        data.y = e.pageY;
    };
    onMounted(function () {
        document.addEventListener('click', updatePosition);
    });
    onUnmounted(function () {
        document.removeEventListener('click', updatePosition);
    });
    var refsData = toRefs(data);
    return __assign({}, refsData);
}
export default useMouseTracker;
//# sourceMappingURL=useMousePostion.js.map