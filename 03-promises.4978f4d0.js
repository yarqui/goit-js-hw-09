var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=e.parcelRequire7bc7;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var l=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,l.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=l),l("iQIUW"),formRef=document.querySelector(".form");let t=1,r=0,i=0,s=0;formRef.addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:n,amount:l}=formRef.elements;r=o.value,i=n.value,s=l.value,function(e,o){console.log("delayValue:",r),console.log("promiseCounter:",t);const n=Math.random()>.3;if(t>s)return void console.log("don't make promises");setInterval((()=>{new Promise(((l,t)=>{n?l(`✅ Fulfilled promise ${e} in ${o}ms`):t(`❌ Rejected promise ${e} in ${o}ms`)})).then((e=>{console.log(e)})).catch((e=>{console.log(e)})),t+=1,r+=i,console.log("position2:",e)}),r)}(t,r)}));
//# sourceMappingURL=03-promises.4978f4d0.js.map
