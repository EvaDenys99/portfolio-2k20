_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"8Z9I":function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=f(i),u=f(n(2)),s=f(n(10)),l=f(n(12)),c=f(n(13)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function f(e){return e&&e.__esModule?e:{default:e}}var p=["\ud83d\udd19","\u23f0"],v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,o){var i=n.props.avgTypingDelay,a=n.props.stdTypingDelay;return n.props.delayGenerator(i,a,{line:e,lineIdx:t,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return d.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,o=n.props.onLineTyped;return d.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("\ud83d\udd19").repeat(e.props.count)):d.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="\u23f0"),new Promise((function(e,i){n.setState({textLines:n.state.textLines.concat([""])},(function(){d.eachPromise(r,n.typeCharacter,r,t).then((function(){return o(r,t)})).then(e).catch(i)}))}))},n.typeCharacter=function(e,t,r,o){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise((function(a){var u=n.state.textLines.slice();d.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var s="\ud83d\udd19"===e;if("\u23f0"===e)a();else{if(s&&o>0){for(var l=o-1,c=u[l],d=l;d>=0&&(!(c.length>0)||p.includes(c[0]));d--)c=u[l=d];u[l]=c.substr(0,c.length-1)}else u[o]+=e;n.setState({textLines:u},(function(){var u=n.delayGenerator(r,o,e,t);i(e,t),setTimeout(a,u)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=d.extractTextFromElement(e.children)),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!==typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return d.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,o=this.state.isDone,i=d.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return a.default.createElement("div",{className:"Typist "+t},i,a.default.createElement(s.default,r({isDone:o},n)))}}]),t}(i.Component);v.propTypes={children:u.default.node,className:u.default.string,avgTypingDelay:u.default.number,stdTypingDelay:u.default.number,startDelay:u.default.number,cursor:u.default.object,onCharacterTyped:u.default.func,onLineTyped:u.default.func,onTypingDone:u.default.func,delayGenerator:u.default.func},v.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:d.gaussianRnd},t.default=v,v.Backspace=l.default,v.Delay=c.default},function(e,t){e.exports=n("q1tI")},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(6),a=n(7),u=n(8);e.exports=function(e,t){var n="function"===typeof Symbol&&Symbol.iterator,s="@@iterator";var l="<<anonymous>>",c={array:v("array"),bool:v("boolean"),func:v("function"),number:v("number"),object:v("object"),string:v("string"),symbol:v("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p((function(t,n,r,o,i){if("function"!==typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new f("Invalid "+o+" `"+i+"` of type `"+h(u)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<u.length;s++){var l=e(u,s,r,o,i+"["+s+"]",a);if(l instanceof Error)return l}return null}))},element:p((function(t,n,r,o,i){var a=t[n];return e(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||l;return new f("Invalid "+o+" `"+i+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return l;return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}))},node:p((function(e,t,n,r,o){return m(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,i){if("function"!==typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=h(u);if("object"!==s)return new f("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var c=e(u,l,r,o,i+"."+l,a);if(c instanceof Error)return c}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return p((function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(d(a,e[u]))return null;return new f("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!==typeof n)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",b(n),t),r.thatReturnsNull}return p((function(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new f("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return p((function(t,n,r,o,i){var u=t[n],s=h(u);if("object"!==s)return new f("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var c=e[l];if(c){var d=c(u,l,r,o,i+"."+l,a);if(d)return d}}return null}))}};function d(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function p(e){function n(n,r,i,u,s,c,d){(u=u||l,c=c||i,d!==a)&&(t&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[i]?n?null===r[i]?new f("The "+s+" `"+c+"` is marked as required in `"+u+"`, but its value is `null`."):new f("The "+s+" `"+c+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,i,u,s,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function v(e){return p((function(t,n,r,o,i,a){var u=t[n];return h(u)!==e?new f("Invalid "+o+" `"+i+"` of type `"+y(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[s]);if("function"===typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!m(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!m(a[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if("undefined"===typeof e||null===e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,c.checkPropTypes=u,c.PropTypes=c,c}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";var n=function(e){};e.exports=function(e,t,r,o,i,a,u,s){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,o,i,a,u,s],d=0;(l=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=u(o),a=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}n(11);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return i.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(o.Component);s.propTypes={blink:a.default.bool,show:a.default.bool,element:a.default.node,hideWhenDone:a.default.bool,hideWhenDoneDelay:a.default.number,isDone:a.default.bool},s.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=s},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Backspace",a.propTypes={count:o.default.number,delay:o.default.number},a.defaultProps={count:1,delay:0},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Delay",a.propTypes={ms:o.default.number.isRequired},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return Array.from(e).reduce((function(e,n,o){return e.then((function(){return t.apply(void 0,[n,o].concat(r))}))}),Promise.resolve())},t.exclude=u,t.isBackspaceElement=s,t.isDelayElement=l,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(a.default.isValidElement(r))s(r)||l(r)?n.unshift(r):a.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var o=!0,i=!1,u=void 0;try{for(var c,d=r[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){var f=c.value;t.push(f)}}catch(p){i=!0,u=p}finally{try{!o&&d.return&&d.return()}finally{if(i)throw u}}}else n.unshift(r)}return n},t.cloneElement=c,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return function e(t,n,o){if(o>=n.length)return[null,o];var i=o,u=function(t){var o=e(t,n,i),a=r(o,2),u=a[0],s=a[1];return i=s,u};if(a.default.isValidElement(t)&&!s(t)&&!l(t)){var d=a.default.Children.map(t.props.children,u)||[];return[c(t,d),i]}if(Array.isArray(t)){return[t.map(u),i]}return[n[i],i+1]}(t,n,0)[0]};var o,i=n(1),a=(o=i)&&o.__esModule?o:{default:o};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function u(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function s(e){return e&&e.type&&"Backspace"===e.type.componentName}function l(e){return e&&e.type&&"Delay"===e.type.componentName}function c(e,t){var n=e.type,r=u(e.props,["children"]),o=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+o,a.default.createElement.apply(a.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}}])},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("MX0m"),o=n.n(r),i=n("8Z9I"),a=n.n(i),u=n("q1tI"),s=n.n(u),l=n("CafY"),c=n("wd/R"),d=n.n(c),f=s.a.createElement;function p(){var e=Object(u.useState)(!1),t=e[0],n=e[1],r=Object(u.useState)(!1),i=r[0],s=r[1],c=Object(u.useRef)(null);Object(u.useEffect)((function(){var e=d()("19990421","YYYYMMDD").fromNow(),t=e.substring(0,e.lastIndexOf(" "));s(t)}),[]);var p=function(){n(!0),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),1e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),1500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),2e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),2500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),3e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),3500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),4e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),4500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),5e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),5500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),6e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),6500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),7e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),7500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),8e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),8500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),9e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),9500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),1e4),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),10500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),11e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),11500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),12e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),12500),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),13e3),setTimeout((function(){var e;return null===c||void 0===c?void 0:null===(e=c.current)||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})}),13500)};return f(l.a,null,f("div",{className:"jsx-1020141855 mt-5 container animate__animated animate__fadeIn"},f(o.a,{id:"1020141855"},['@media only screen and (min-width:0px){body{background-color:#151515;background-image:url("/images/me-sm.svg"), radial-gradient(circle at bottom right,#2c2c2c,#0c0c0c);background-attachment:fixed;background-position:bottom,center;background-repeat:no-repeat;color:#f8f8ff;}}',"@media only screen and (min-width:720px){body{background-color:#151515;background-image:radial-gradient( circle at bottom right, #2c2c2c, #0c0c0c );background-attachment:fixed;background-repeat:no-repeat;color:#f8f8ff;}body{overflow:hidden;}}"]),f("h1",{className:"jsx-1020141855 text-w-title"},"Hello, I am a"," ",f("span",{className:"jsx-1020141855 highlights bold"},"Creative Developer"),"."),f("img",{src:"/images/me.svg",alt:"/images/me.svg",className:"jsx-1020141855 img-me img-fluid"}),f("div",{className:"jsx-1020141855 mt-5 information-text"},f("div",{className:"jsx-1020141855"},f(a.a,{cursor:{show:!1}},f(a.a.Delay,{ms:1250}),f("div",{className:"jsx-1020141855"},f("h2",{className:"jsx-1020141855"}," > introduction "),f(a.a.Delay,{ms:500}),f("p",{className:"jsx-1020141855 text-w-intro"},"Hello, my name is Eva Denys. And I am a"," ",f("span",{className:"jsx-1020141855 highlights thick"},"Creative Developer"),","," ",f("em",{className:"jsx-1020141855 highlights"},"UI & UX Designer")," &"," ",f("span",{className:"jsx-1020141855 highlights dottedUnderline"},"Researcher"),".")),f("div",{className:"jsx-1020141855 mt-4"},f("h2",{className:"jsx-1020141855"},"> graduate"),f(a.a.Delay,{ms:500}),f("div",{className:"jsx-1020141855 text-w-grad"},f("p",{className:"jsx-1020141855 highlights mb-2"},"PBA Digital Design & Development"),f("p",{className:"jsx-1020141855"},"@ Howest University of Applied Sciences"))),f("div",{className:"jsx-1020141855 mt-4"},f("h2",{className:"jsx-1020141855"},"> contact"),f(a.a.Delay,{ms:500}),f("a",{href:"mailto: evadenys@hotmail.com",className:"jsx-1020141855"},"evadenys@hotmail.com"),f("p",{className:"jsx-1020141855"},f("a",{href:"/CV_EvaDenys.pdf",download:!0,className:"jsx-1020141855"},f("u",{className:"jsx-1020141855"},"my resume")))),f("div",{className:"jsx-1020141855 mt-4"},f("h2",{className:"jsx-1020141855 text-w-more"},"> would you like to know more?"," ",f("em",{className:"jsx-1020141855 text-w-more-y"},"(type ",f("span",{className:"jsx-1020141855 highlights"},"y"),")")),f("input",{type:"text",autoFocus:!0,onChange:function(e){return"y"===e.currentTarget.value.toLocaleLowerCase()&&p()},className:"jsx-1020141855 text-w-more-y-input"}),f("p",{className:"jsx-1020141855 text-w-more-button"},"Click on"," ",f("em",{onClick:function(){p()},className:"jsx-1020141855 highlights"},f("u",{className:"jsx-1020141855"},"Yes"))))),t&&f(a.a,{cursor:{show:!1}},f("div",{className:"jsx-1020141855 mt-4"},f("h2",{className:"jsx-1020141855"},"> age & origin"),f("p",{className:"jsx-1020141855"},i," old "),f("p",{className:"jsx-1020141855"},"Belgium, Deinze 9850")),f("div",{className:"jsx-1020141855 mt-4"},f("h2",{className:"jsx-1020141855"},"> hobbies"),f("p",{className:"jsx-1020141855"},"running"),f("p",{className:"jsx-1020141855"},"drawing"),f("p",{className:"jsx-1020141855"},"coding"),f("p",{className:"jsx-1020141855"},"dogs&cats"),f("p",{className:"jsx-1020141855"},"going out with friends"),f("p",{className:"jsx-1020141855"},"listening to music"),f("p",{className:"jsx-1020141855"},"watching series"),f("p",{className:"jsx-1020141855"},"...")),f("div",{className:"jsx-1020141855 mt-4 mb-4"},f("h2",{className:"jsx-1020141855"},"> professional social medias"),f("div",{className:"jsx-1020141855 d-flex flex-column"},f("p",{className:"jsx-1020141855 pb-3 pt-3"},f("a",{href:"https://github.com/EvaDenys99",target:"blank",className:"jsx-1020141855"},"Github")),f("p",{className:"jsx-1020141855 pb-3"},f("a",{href:"https://www.linkedin.com/in/eva-denys/",target:"blank",className:"jsx-1020141855 pb-3"},"Linkedin")),f("p",{id:"lastitem",className:"jsx-1020141855 pb-3"},f("a",{href:"https://www.behance.net/_eva_denys_",target:"blank",className:"jsx-1020141855"},"Behance"))))),f("div",{ref:c,className:"jsx-1020141855"})))))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,4,1,3]]]);