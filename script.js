let mobileSvgPath = `   <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'>
<path style='fill:#2C353F;' d='M374.157,0H137.843c-12.747,0-23.084,10.337-23.084,23.084v153.468v70.621v241.743
c0,12.747,10.337,23.084,23.084,23.084h236.323c12.738,0,23.075-10.337,23.075-23.084V247.172v-70.621V23.084
C397.241,10.337,386.904,0,374.157,0z'/>
<rect x='114.759' y='52.966' style='fill:#659ED8;' width='282.483' height='370.759'/>
<g>
<path style='fill:#C4CED3;' d='M300.138,35.31h-88.276c-4.873,0-8.828-3.955-8.828-8.828s3.955-8.828,8.828-8.828h88.276
   c4.873,0,8.828,3.955,8.828,8.828S305.011,35.31,300.138,35.31z'/>
<path style='fill:#C4CED3;' d='M361.931,35.31h-8.828c-4.873,0-8.828-3.955-8.828-8.828s3.955-8.828,8.828-8.828h8.828
   c4.873,0,8.828,3.955,8.828,8.828S366.804,35.31,361.931,35.31z'/>
<path style='fill:#C4CED3;' d='M266.955,485.517h-21.919c-8.572,0-15.519-6.947-15.519-15.528v-4.264
   c0-8.572,6.947-15.519,15.528-15.519h21.919c8.572,0,15.519,6.947,15.519,15.528v4.264
   C282.483,478.57,275.535,485.517,266.955,485.517z'/>
</g>

</svg>`;
let desktopSvgPath = `<svg id="Capa_1" enable-background="new 0 0 497 497" height="512" viewBox="0 0 497 497" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m275.57 401-84.14 30-3.19 11.15c-4.53 15.87-21.74 28.85-38.24 28.85v7.5h174.5z" fill="#adaca7"/><path d="m308.76 442.15-11.76-41.15-48.5-30-48.5 30-8.57 30h84.14l3.19 11.15c4.53 15.87 21.74 28.85 38.24 28.85l15 7.5 15-7.5c-16.5 0-33.71-12.98-38.24-28.85z" fill="#8f8f8b"/><path d="m437 401h30c16.5 0 30-13.5 30-30v-60l-60-60z" fill="#adaca7"/><path d="m0 371c0 16.5 13.5 30 30 30h407c16.5 0 30-13.5 30-30v-180l-467 120z" fill="#cbc9c2"/><path d="m467 11h-30l30 300h30v-270c0-16.5-13.5-30-30-30z" fill="#404242"/><path d="m467 41c0-16.5-13.5-30-30-30h-407c-16.5 0-30 13.5-30 30v270h467v-30l-218.5-120.013z" fill="#565959"/><path d="m467 40.995-29.994-.021c0 .005-188.506 120.013-188.506 120.013s188.502 120.011 188.5 120.013c0 0 29.999-.02 29.999-.02.001 0-.002-239.981.001-239.985z" fill="#4b88d5"/><path d="m437 40.995-406.912-.022c-.025.012-.046 240.022-.088 240.027 0 0 406.98-.02 406.99-.02.005 0-.032-239.981.01-239.985z" fill="#69a7ff"/><circle cx="248.5" cy="356" fill="#fff" r="15"/><path d="m403.5 486h-310c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h310c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#8f8f8b"/></g></svg>`;
let changeImageBtn = document.querySelectorAll('.change-image-btn');
changeImageBtn.forEach(btn => {
    btn.innerHTML = mobileSvgPath;
    let isMoblie = false;
    let previesImageAreaSrc = btn.previousElementSibling.getAttribute('src');
    btn.addEventListener('click', () => {
        let mobileVersionSrc = btn.getAttribute('data-mobile-src');
        let imageArea = btn.previousElementSibling;
        imageArea.classList.add('speceffect');
        setTimeout(() => {
            imageArea.classList.remove('speceffect');
        }, 500)
        setTimeout(() => {
            if (!isMoblie) {
                imageArea.src = mobileVersionSrc;
                isMoblie = true;
                btn.innerHTML = desktopSvgPath;
            } else {
                imageArea.src = previesImageAreaSrc;
                isMoblie = false;
                btn.innerHTML = mobileSvgPath;
            }

        }, 500)
    })
})