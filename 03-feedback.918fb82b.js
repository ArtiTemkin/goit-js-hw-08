!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(j,t),s?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=p();if(O(e))return N(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function N(e){return f=void 0,v&&o?b(e):(o=r=void 0,u)}function h(){var e=p(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=w(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},h.flush=function(){return void 0===f?u:N(p())},h}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var S=document.querySelector("input"),O=document.querySelector("textarea");var j=n((function(e){window.localStorage.setItem("feedback-form-state",e)}),500);S.oninput=function(){var e=window.localStorage.getItem("feedback-form-state"),t={email:"",message:""};null!==e?(t=JSON.parse(e)).email=S.value:t.email=S.value,j(JSON.stringify(t))},O.oninput=function(){var e=window.localStorage.getItem("feedback-form-state"),t={email:"",message:""};null!==e?(t=JSON.parse(e)).message=O.value:t.message=O.value,j(JSON.stringify(t))},window.onload=function(){!function(){var e=window.localStorage.getItem("feedback-form-state");if(null!==e){var t=JSON.parse(e);S.value=null!==t.email?t.email:"",O.value=null!==t.message?t.message:""}}()},document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();var t=window.localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),S.value="",O.value="",window.localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.918fb82b.js.map