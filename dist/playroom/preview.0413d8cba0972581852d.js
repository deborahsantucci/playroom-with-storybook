(self.webpackChunkplayroom_with_storybook=self.webpackChunkplayroom_with_storybook||[]).push([[493],{5380:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=5380,e.exports=n},4394:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(7294),o=t(8337),i=t(3993);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},l(e,n)}function s(e,n){if(n&&("object"===a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t(9387);var b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}(m,e);var n,t,a,b,d=(a=m,b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=p(a);if(b){var t=p(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return s(this,e)});function m(){var e;u(this,m);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return y(f(e=d.call.apply(d,[this].concat(t))),"state",{error:null,invalidCode:null,errorInfo:null}),e}return n=m,(t=[{key:"componentDidCatch",value:function(e,n){var t=this.props.code,r=void 0===t?null:t;this.setState({invalidCode:r,error:e,errorInfo:n})}},{key:"render",value:function(){var e=this.state,n=e.invalidCode,t=e.error,a=e.errorInfo,u=this.props,c=u.code,l=u.children;if(c!==n||!t)return l;var s=a?a.componentStack.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})):[],f=s.slice(0,s.length-1);return r.createElement("div",{className:"_1w4nw0x1i _1w4nw0x1j _1w4nw0x1k _1w4nw0x1l _1w4nw0x2a _1w4nw0x2i _1w4nw0x2q _1w4nw0x2y _1w4nw0x1h _1w4nw0x3x"},r.createElement(o.x,{size:"large",tone:"critical"},r.createElement(i.c,null,t.message),f.map((function(e,n){return r.createElement("span",{key:n},e)}))))}}])&&c(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),m}(r.Component)},19:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7294),o=t(7174),i=t.n(o);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){var n=e.code,t=e.scope;return i()(n,u(u(u({},{}),t),{},{React:r}))}},8850:function(e,n,t){var r=t(9627);e.exports=r.default||r},4600:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,{animationDelay:function(){return y},animationDuration:function(){return b},animationIterationCount:function(){return d},hideSplash:function(){return m},root:function(){return w},size:function(){return v},trace:function(){return h}});var o=t(7294),i=t(3935),a=t(6961),u=t.n(a),c=t(5198),l=t(653),s=t(4184),f=t.n(s),p=function(e){var n=e.size,t=void 0===n?100:n;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:t},o.createElement("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"}))},y=(t(9387),500),b=1300,d=2,m="_1w4nw0x4c _1w4nw0x48",w="_1a2dupe1 _1w4nw0x1i _1w4nw0x1j _1w4nw0x1k _1w4nw0x1l _1w4nw0x1h _1w4nw0x1n _1w4nw0x22 _1w4nw0x1w _1w4nw0x4r _1w4nw0x44",v="_1a2dupe5",h="_1a2dupe3";function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var g=b,x=y,_=d,j=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(r,["animationDuration","animationDelay","animationIterationCount"]),k=function(){var e,n,t,r,i,a=(r=(0,o.useState)(!1),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}(r,i)||function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],c=a[1];return(0,o.useEffect)((function(){var e=setTimeout((function(){return c(!0)}),x+g*_);return function(){return clearTimeout(e)}}),[]),o.createElement("div",{className:f()(j.root,(e={},n=j.hideSplash,t=u,n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e))},o.createElement("div",{className:f()(j.trace,j.size)},o.createElement(p,{size:"100%"})))},E=t(4394),P=t(19),C=function(e){var n=e.themes,t=e.components,r=e.FrameComponent,i=(0,c.UO)((function(e){if(e.code){var n,t=JSON.parse(null!==(n=u().decompressFromEncodedURIComponent(String(e.code)))&&void 0!==n?n:"");return{code:(0,l.j)(t.code),themeName:t.theme}}return{}})),a=i.themeName,s=i.code,f=a?n[a]:null;return o.createElement(E.Z,{code:s},o.createElement("div",{className:"_1w4nw0x1g _1w4nw0x4d"},o.createElement(r,{themeName:a||"__PLAYROOM__NO_THEME__",theme:f},o.createElement(P.Z,{code:s,scope:t}))),o.createElement("div",{className:"_1w4nw0x1g _1w4nw0x4e"},o.createElement(k,null)))},S=document.createElement("div");document.body.appendChild(S),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.themes,r=void 0===n?t(6243):n,a=e.components,u=void 0===a?t(2151):a,c=e.FrameComponent,l=void 0===c?t(8850):c;(0,i.render)(o.createElement(C,{components:u,themes:r,FrameComponent:l}),S)}()},4280:function(e,n,t){"use strict";t.r(n),t.d(n,{Button:function(){return c}});var r=t(7294),o=t(5697),i=t.n(o),a=(t(5961),["primary","backgroundColor","size","label"]);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}var c=function(e){var n=e.primary,t=e.backgroundColor,o=e.size,i=e.label,c=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,a),l=n?"storybook-button--primary":"storybook-button--secondary";return r.createElement("button",u({type:"button",className:["storybook-button","storybook-button--".concat(o),l].join(" "),style:t&&{backgroundColor:t}},c),i)};c.propTypes={primary:i().bool,backgroundColor:i().string,size:i().oneOf(["small","medium","large"]),label:i().string.isRequired,onClick:i().func},c.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0}},3194:function(e,n,t){"use strict";t.r(n);var r=t(8081),o=t.n(r),i=t(3645),a=t.n(i)()(o());a.push([e.id,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),n.default=a},8215:function(){},9387:function(){},7174:function(e){(function(){var n={}.hasOwnProperty,t=[].slice;e.exports=function(e,r){var o,i,a,u;for(o in i=[],u=[],r)n.call(r,o)&&(a=r[o],"this"!==o&&(i.push(o),u.push(a)));return Function.apply(null,t.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(r.this,u)}}).call(this)},5961:function(e,n,t){var r=t(3379),o=t(3194);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}}},function(e){e.O(0,[937,928],(function(){return 4600,e(e.s=4600)})),e.O()}]);