_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"1Ot+":function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),o=n(a("lSNA")),u=n(a("cDf5")),c=n(a("J4zp")),i=r(a("q1tI")),s=n(a("TSYQ")),f=a("vgIT"),d=n(a("5u0s")),v=a("KEtS"),p=r(a("hf16")),m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},y=((0,v.tuple)("top","middle","bottom","stretch"),(0,v.tuple)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var a=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),r=(0,c.default)(a,2),n=r[0],v=r[1],y=i.useRef();y.current=e.gutter,i.useEffect((function(){var e=p.default.subscribe((function(e){var t=y.current||0;(!Array.isArray(t)&&"object"===(0,u.default)(t)||Array.isArray(t)&&("object"===(0,u.default)(t[0])||"object"===(0,u.default)(t[1])))&&v(e)}));return function(){p.default.unsubscribe(e)}}),[]);var h=function(a){var r,c=a.getPrefixCls,f=a.direction,v=e.prefixCls,y=e.justify,h=e.align,b=e.className,g=e.style,x=e.children,w=m(e,["prefixCls","justify","align","className","style","children"]),O=c("row",v),j=function(){var t=[0,0],a=e.gutter,r=void 0===a?0:a;return(Array.isArray(r)?r:[r,0]).forEach((function(e,a){if("object"===(0,u.default)(e))for(var r=0;r<p.responsiveArray.length;r++){var l=p.responsiveArray[r];if(n[l]&&void 0!==e[l]){t[a]=e[l];break}}else t[a]=e||0})),t}(),N=(0,s.default)(O,(r={},(0,o.default)(r,"".concat(O,"-").concat(y),y),(0,o.default)(r,"".concat(O,"-").concat(h),h),(0,o.default)(r,"".concat(O,"-rtl"),"rtl"===f),r),b),E=(0,l.default)((0,l.default)((0,l.default)({},j[0]>0?{marginLeft:j[0]/-2,marginRight:j[0]/-2}:{}),j[1]>0?{marginTop:j[1]/-2,marginBottom:j[1]/2}:{}),g),S=(0,l.default)({},w);return delete S.gutter,i.createElement(d.default.Provider,{value:{gutter:j}},i.createElement("div",(0,l.default)({},S,{className:N,style:E,ref:t}),x))};return i.createElement(f.ConfigConsumer,null,h)})));y.displayName="Row";var h=y;t.default=h},"1yXF":function(e,t,a){"use strict";a("VEUW"),a("dnqb")},"5u0s":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,a("q1tI").createContext)({});t.default=r},"6cGi":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI");function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(c){n=!0,l=c}finally{try{r||null==u.return||u.return()}finally{if(n)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function o(e,t){var a=t||{},l=a.defaultValue,o=a.value,u=a.onChange,c=a.postState,i=n(r.useState((function(){return void 0!==o?o:void 0!==l?"function"===typeof l?l():l:"function"===typeof e?e():e})),2),s=i[0],f=i[1],d=void 0!==o?o:s;c&&(d=c(d));var v=r.useRef(!0);return r.useEffect((function(){v.current?v.current=!1:void 0===o&&f(o)}),[o]),[d,function(e){f(e),d!==e&&u&&u(e,d)}]}},"9xET":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("vhhj").Row;t.default=r},EWAn:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("J4zp")),l=a("q1tI"),o=r(a("hf16"));var u=function(){var e=(0,l.useState)({}),t=(0,n.default)(e,2),a=t[0],r=t[1];return(0,l.useEffect)((function(){var e=o.default.subscribe((function(e){r(e)}));return function(){return o.default.unsubscribe(e)}}),[]),a};t.default=u},Y7j8:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("lSNA")),o=n(a("pVnL")),u=n(a("cDf5")),c=r(a("q1tI")),i=n(a("TSYQ")),s=n(a("5u0s")),f=a("vgIT"),d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};var v=c.forwardRef((function(e,t){var a=function(a){var r,n=a.getPrefixCls,f=a.direction,v=e.prefixCls,p=e.span,m=e.order,y=e.offset,h=e.push,b=e.pull,g=e.className,x=e.children,w=e.flex,O=e.style,j=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),N=n("col",v),E={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var a,r={},n=e[t];"number"===typeof n?r.span=n:"object"===(0,u.default)(n)&&(r=n||{}),delete j[t],E=(0,o.default)((0,o.default)({},E),(a={},(0,l.default)(a,"".concat(N,"-").concat(t,"-").concat(r.span),void 0!==r.span),(0,l.default)(a,"".concat(N,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),(0,l.default)(a,"".concat(N,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),(0,l.default)(a,"".concat(N,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),(0,l.default)(a,"".concat(N,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),(0,l.default)(a,"".concat(N,"-rtl"),"rtl"===f),a))}));var S=(0,i.default)(N,(r={},(0,l.default)(r,"".concat(N,"-").concat(p),void 0!==p),(0,l.default)(r,"".concat(N,"-order-").concat(m),m),(0,l.default)(r,"".concat(N,"-offset-").concat(y),y),(0,l.default)(r,"".concat(N,"-push-").concat(h),h),(0,l.default)(r,"".concat(N,"-pull-").concat(b),b),r),g,E);return c.createElement(s.default.Consumer,null,(function(e){var a=e.gutter,r=(0,o.default)({},O);return a&&(r=(0,o.default)((0,o.default)((0,o.default)({},a[0]>0?{paddingLeft:a[0]/2,paddingRight:a[0]/2}:{}),a[1]>0?{paddingTop:a[1]/2,paddingBottom:a[1]/2}:{}),r)),w&&(r.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(w)),c.createElement("div",(0,o.default)({},j,{style:r,className:S,ref:t}),x)}))};return c.createElement(f.ConfigConsumer,null,a)}));v.displayName="Col";var p=v;t.default=p},ZPTe:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("vhhj").Col;t.default=r},cfHN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Colorcode",function(){return a("ehDZ")}])},dnqb:function(e,t,a){},ehDZ:function(e,t,a){"use strict";a.r(t);a("MaXC");var r=a("4IMT"),n=a.n(r),l=(a("hr7U"),a("9xET")),o=a.n(l),u=(a("fv9D"),a("ZPTe")),c=a.n(u),i=a("ODXe"),s=(a("ek7I"),a("FAat")),f=a.n(s),d=a("q1tI"),v=a.n(d),p=v.a.createElement;t.default=function(e){e.names,e.toolType;var t=f.a.Option,a=v.a.useState(),r=Object(i.a)(a,2),l=r[0],u=r[1],s=v.a.useState(),d=Object(i.a)(s,2),m=d[0],y=d[1],h=v.a.useState(),b=Object(i.a)(h,2),g=b[0],x=b[1],w=v.a.useState(),O=Object(i.a)(w,2),j=O[0],N=O[1],E=v.a.useState(),S=Object(i.a)(E,2),C=S[0],_=S[1],A=v.a.useState(),P=Object(i.a)(A,2),T=P[0],R=P[1];return p("div",{className:"toolbox-layout"},p("div",{className:"toolbox"},p("div",{className:"toolbox-heading"},"Color Code Resistance"),p("div",null,p("hr",{className:"hr"}),p("div",{className:"toolbox-calc"},p("div",{className:"heading"},"Calculation"),p(o.a,{style:{marginBottom:"10px"}},p(c.a,{style:{flex:1}},"First strip"),p(c.a,{style:{flex:1}},p(f.a,{style:{width:120},value:l,onSelect:function(e){return u(e)}},p(t,{value:"0"},"Black"),p(t,{value:"1"},"Brown"),p(t,{value:"2"},"Red"),p(t,{value:"3"},"Orange"),p(t,{value:"4"},"Yellow"),p(t,{value:"5"},"Green"),p(t,{value:"6"},"Blue"),p(t,{value:"7"},"Violet"),p(t,{value:"8"},"Gray"),p(t,{value:"9"},"White")))),p(o.a,{style:{marginBottom:"10px"}},p(c.a,{style:{flex:1}},"Second strip"),p(c.a,{style:{flex:1}},p(f.a,{style:{width:120},value:m,onSelect:function(e){return y(e)}},p(t,{value:"0"},"Black"),p(t,{value:"1"},"Brown"),p(t,{value:"2"},"Red"),p(t,{value:"3"},"Orange"),p(t,{value:"4"},"Yellow"),p(t,{value:"5"},"Green"),p(t,{value:"6"},"Blue"),p(t,{value:"7"},"Violet"),p(t,{value:"8"},"Gray"),p(t,{value:"9"},"White")))),p(o.a,{style:{marginBottom:"10px"}},p(c.a,{style:{flex:1}},"Third strip"),p(c.a,{style:{flex:1}},p(f.a,{style:{width:120},value:g,onSelect:function(e){return x(e)}},p(t,{value:"0"},"Black"),p(t,{value:"1"},"Brown"),p(t,{value:"2"},"Red"),p(t,{value:"3"},"Orange"),p(t,{value:"4"},"Yellow"),p(t,{value:"5"},"Green"),p(t,{value:"6"},"Blue"),p(t,{value:"7"},"Violet"),p(t,{value:"8"},"Gray"),p(t,{value:"9"},"White")))),p(o.a,{style:{marginBottom:"10px"}},p(c.a,{style:{flex:1}},"Fourth strip"),p(c.a,{style:{flex:1}},p(f.a,{style:{width:120},value:j,onSelect:function(e){return N(e)}},p(t,{value:"5"},"Gold"),p(t,{value:"10"},"Silver"),p(t,{value:"20"},"None")))),p(n.a,{className:"calculate-button",onClick:function(){return function(){var e=10*Number(l)+Number(m),t=Number(g),a=Math.pow(10,t);_(e*a),R(Number(j))}()}},"CALCULATE")),p("hr",{className:"hr"}),void 0!==C&&p("div",{className:"toolbox-calc"},p("div",{className:"heading"},"RESULT"),C," Ohm  ",T,"%",p("hr",{className:"hr"})),p("div",{className:"toolbox-calc"},p("div",{className:"heading"},"DESCription"),"Components and wires are coded with colors to identify their value and function.",p("br",null),"Resistor Color Coding uses colored bands to quickly identify a resistors resistive value and its percentage of tolerance with the physical size of the resistor indicating its wattage rating."))))}},fv9D:function(e,t,a){"use strict";a("VEUW"),a("1yXF")},hf16:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.responsiveMap=t.responsiveArray=void 0;var n=r(a("lSNA")),l=r(a("pVnL"));t.responsiveArray=["xxl","xl","lg","md","sm","xs"];var o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t.responsiveMap=o;var u=new Map,c=-1,i={},s={matchHandlers:{},dispatch:function(e){return i=e,u.forEach((function(e){return e(i)})),u.size>=1},subscribe:function(e){return u.size||this.register(),c+=1,u.set(c,e),e(i),c},unsubscribe:function(e){u.delete(e),u.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var a=o[t],r=e.matchHandlers[a];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),u.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var a=o[t],r=function(a){var r=a.matches;e.dispatch((0,l.default)((0,l.default)({},i),(0,n.default)({},t,r)))},u=window.matchMedia(a);u.addListener(r),e.matchHandlers[a]={mql:u,listener:r},r(u)}))}};t.default=s},hr7U:function(e,t,a){"use strict";a("VEUW"),a("1yXF")},vhhj:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=r(a("1Ot+")),l=r(a("Y7j8")),o={useBreakpoint:r(a("EWAn")).default};t.default=o}},[["cfHN",0,2,1,3,4,6,8,7,12,20,21]]]);