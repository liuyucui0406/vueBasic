import { ref, onMounted, onUnmounted } from 'vue';
var isClickOutside = function (elementRef) {
    var isClick = ref(false);
    var handler = function (e) {
        if (elementRef.value) {
            if (elementRef.value.contains(e.target)) {
                isClick.value = false;
            }
            else {
                isClick.value = true;
            }
        }
    };
    onMounted(function () {
        document.addEventListener('click', handler);
    });
    onUnmounted(function () {
        document.removeEventListener('click', handler);
    });
    return isClick;
};
export default isClickOutside;
//# sourceMappingURL=useClickOutside.js.map