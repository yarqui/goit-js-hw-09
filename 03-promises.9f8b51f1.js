var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var i=n("iQIUW");const r=document.querySelector(".form");let l=0,s=0,u=0;function a(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}r.addEventListener("submit",(e=>{e.preventDefault();const{delay:o,step:t,amount:n}=r.elements;l=Number(o.value),s=Number(t.value),u=Number(n.value);for(let e=1;e<=u;e+=1)a(e,l).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),l+=s}));
//# sourceMappingURL=03-promises.9f8b51f1.js.map