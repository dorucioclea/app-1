(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"50b2b11ca44fa27cd2d4":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=n("0d7f0986bcd2f33d8a2a"),c=n("b912ecc4473ae8a2ff0b"),f=n.n(c),l=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),u=n("6938d226fd372a75cbf9"),s=n("921c0b8c557fe6ba5da8"),p=n.n(s),d=n("e799c547a20a503b338f"),b=n.n(d),y=n("b02fe3f80d4238b52f20"),m=n.n(y),v=n("1037a6e0d5914309f74c"),h=n.n(v),g=(n("0d4ee4ad37ded188f527"),n("387190e83edf0e5eb8f6"));function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=S(p.a,{variant:"h5",gutterBottom:!0,align:"center"},void 0,"Use the existing app if it exists. All the apps will be ported here soon."),A=S("a",{href:"https://dxsale.network",target:"_blank"},void 0,S("i",{className:"ion-android-globe"})),F=S("a",{href:"https://twitter.com/dxsale",target:"_blank"},void 0,S("i",{className:"ion-social-twitter"})),E=S("a",{href:"https://t.me/dxsale",target:"_blank"},void 0,S("i",{className:"ion-paper-airplane"})),W=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,o,r=j(a);function a(){var e;N(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return R(P(e=r.call.apply(r,[this].concat(n))),"handleChange",(function(t){return function(n){e.setState(R({},t,n.target.value))}})),e}return t=a,(n=[{key:"render",value:function(){var e=h.a.name+" - Coming Soon",t=h.a.desc,n=this.props,o=n.classes,r=n.deco;return S("div",{className:o.rootFull},void 0,S(i.Helmet,{},void 0,S("title",{},void 0,e),S("meta",{name:"description",content:t}),S("meta",{property:"og:title",content:e}),S("meta",{property:"og:description",content:t}),S("meta",{property:"twitter:title",content:e}),S("meta",{property:"twitter:description",content:t})),S("div",{className:o.container},void 0,S("div",{className:o.fullFormWrap},void 0,S(m.a,{className:f()(o.fullWrap,r&&o.petal,o.centerV)},void 0,S(p.a,{variant:"h2",className:o.titleGradient,gutterBottom:!0},void 0,"Coming Soon"),C,S("section",{className:o.pageFormWrap},void 0,S("div",{className:f()(o.lockForm,o.centerAdornment)},void 0,S(b.a,{color:"primary",className:o.button,href:"#"},void 0,A),S(b.a,{color:"primary",className:o.button,href:"#"},void 0,F),S(b.a,{color:"primary",className:o.button,href:"#"},void 0,E)))))))}}])&&O(t.prototype,n),o&&O(t,o),a}(a.a.Component),B=Object(l.connect)((function(e){return{force:e,deco:e.getIn(["ui","decoration"])}}))(W);t.default=Object(u.withStyles)(g.a)(B)}}]);