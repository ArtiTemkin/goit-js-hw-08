var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return f.Date.now()};function g(e,t,n){var o,i,r,a,u,l,f=0,c=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,f=t,a=e.apply(r,n)}function w(e){return f=e,u=setTimeout(O,t),c?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-f>=r}function O(){var e=m();if(S(e))return j(e);u=setTimeout(O,function(e){var n=t-(e-l);return g?d(n,r-(e-f)):n}(e))}function j(e){return u=void 0,y&&o?b(e):(o=i=void 0,a)}function N(){var e=m(),n=S(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return w(l);if(g)return u=setTimeout(O,t),b(l)}return void 0===u&&(u=setTimeout(O,t)),a}return t=v(t)||0,p(n)&&(c=!!n.leading,r=(g="maxWait"in n)?s(v(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),N.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=i=u=void 0},N.flush=function(){return void 0===u?a:j(m())},N}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector("input"),b=document.querySelector("textarea");let w=t((function(e){window.localStorage.setItem("feedback-form-state",e)}),500);y.oninput=function(){const e=window.localStorage.getItem("feedback-form-state");let t={email:"",message:""};null!==e?(t=JSON.parse(e),t.email=y.value):t.email=y.value,w(JSON.stringify(t))},b.oninput=function(){const e=window.localStorage.getItem("feedback-form-state");let t={email:"",message:""};null!==e?(t=JSON.parse(e),t.message=b.value):t.message=b.value,w(JSON.stringify(t))},window.onload=function(){!function(){const e=window.localStorage.getItem("feedback-form-state");if(null!==e){const t=JSON.parse(e);y.value=null!==t.email?t.email:"",b.value=null!==t.message?t.message:""}}()};document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const t=window.localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),y.value="",b.value="",window.localStorage.clear()}));
//# sourceMappingURL=03-feedback.dcf663b8.js.map