/**
 * 拖拽弹框
 * 用法：v-dragdrop,取消拖拽：v-dragdrop:colse
 */

import Vue from 'vue';

Vue.directive("dragdrop", {
    bind: function (el, binding) {

        //取消拖拽
        if (binding.arg == 'close') return;
        //绑定鼠标左键按下事件
        el.addEventListener('mousedown', function mousedown(event) {

            //解决浏览器全选无法拖拽弹框
            el.setCapture && el.setCapture();

            // 目前寻找的是view
            while (el.parentNode && el.getAttribute('defType') != 'dialogFrame') {
                el = el.parentNode;
            }

            let lf = event.clientX;
            let tp = event.clientY;

            let left = (el.style.left).replace('px', '');
            let top = (el.style.top).replace('px', '');

            //绑定鼠标移动事件
            function mousemove(event) {
                el.style.left = left - - event.clientX - lf + 'px';
                el.style.top = top - - event.clientY - tp + 'px';
            }
            document.addEventListener('mousemove', mousemove, false);

            //绑定鼠标松开事件,清除鼠标移动绑定
            document.addEventListener('mouseup', function (event) {
                document.removeEventListener('mousemove', mousemove, false);
                el.releaseCapture && el.releaseCapture();
                return false;
            }, false);
        }, false);
    }
});
