const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(t){t.disabled=!0}function d(t){t.disabled=!1}e.disabled=!0,t.addEventListener("click",(function(){timerId=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o(t),d(e)})),e.addEventListener("click",(function(){clearInterval(timerId),o(e),d(t)}));
//# sourceMappingURL=01-color-switcher.89715d46.js.map