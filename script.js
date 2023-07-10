//your JS code here. If required.
function updateWindowSize() {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

            var sizeInfo = document.getElementById("sizeInfo");
            sizeInfo.innerHTML = "<h1>Window Size: Width: " + width + "px, Height: " + height + "px</h1>";
        }

        window.addEventListener("resize", updateWindowSize);
        window.addEventListener("DOMContentLoaded", updateWindowSize);