_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(i.AmpStateContext))};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n},i=a("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,i=e.hasQuery,c=void 0!==i&&i;return a||r&&c}},"8Kt/":function(e,t,a){"use strict";a("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),i=(n=a("Xuae"))&&n.__esModule?n:{default:n},c=a("lwAK"),o=a("FYa8"),l=a("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var o=0,l=y.length;o<l;o++){var s=y[o];if(r.props.hasOwnProperty(s))if("charSet"===s)a.has(s)?i=!1:a.add(s);else{var d=r.props[s],p=n[s]||new Set;p.has(d)?i=!1:(p.add(d),n[s]=p)}}}return i}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,a=(0,r.useContext)(c.AmpStateContext),n=(0,r.useContext)(o.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:u,headManager:n,inAmpMode:(0,l.isInAmpMode)(a)},t)}m.rewind=function(){};var f=m;t.default=f},FYa8:function(e,t,a){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=r},RNiq:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return h}));var n=a("ODXe"),r=a("8Kt/"),i=a.n(r),c=a("Ol7k"),o=a("5rEg"),l=a("BMrR"),s=a("bx4M"),d=a("q1tI"),p=a.n(d),y=a("ZTPi"),u=a("YFqc"),m=a.n(u),f=(a("zXOc"),a("aJgq")),g=p.a.createElement,v=y.a.TabPane;function h(){var t=[{name:"3-15 PSI",display:"3-15 PSI",id:0,type:"instrumentation",category:"instrumentation"},{name:"0-20mA",display:"0-20 mA",id:1,type:"instrumentation",category:"instrumentation"},{name:"4-20mA",display:"4-20 mA",id:2,type:"instrumentation",category:"instrumentation"},{name:"0-25mA",display:"0-25 mA",id:3,type:"instrumentation",category:"instrumentation"},{name:"zero",display:"0-X to % (Conversion)",id:4,type:"instrumentation",category:"zero"},{children:"brightness_1",name:"area",display:"Area",id:5,type:"conversions",category:"conversion"},{children:"chat",name:"force",display:"Force",id:6,type:"conversions",category:"conversion"},{name:"energy",display:"Energy",id:7,type:"conversions",category:"conversion"},{name:"fuel_consumption",display:"Fuel Consumption",id:8,type:"conversions",category:"conversion"},{name:"time",display:"Time",id:9,type:"conversions",category:"conversion"},{name:"mass",display:"Mass",id:10,type:"conversions",category:"conversion"},{name:"length",display:"Length",id:11,type:"conversions",category:"conversion"},{name:"digital_storage",display:"Data Storage",id:12,type:"conversions",category:"conversion"},{name:"resistancetemp",display:"Resistance (from temperature)",id:13,type:"instrumentation",category:"electrical"},{name:"linearma",display:"Linear mA to Square Root mA",id:14,type:"instrumentation",category:"electrical"},{name:"temperature",display:"Temperature (from resistance)",id:15,type:"instrumentation",category:"electrical"},{name:"temperature",display:"Temperature",id:16,type:"conversions",category:"conversion"},{name:"linear",display:"Linear to Square Root percentage",id:17,type:"instrumentation",category:"electrical"},{name:"electric_current",display:"Current",id:18,type:"conversions",category:"conversion"},{name:"ohms",display:"Ohms law (R)",id:19,stringId:"19",type:"electrical",category:"electrical"},{name:"ohmsi",display:"Ohms law (I)",id:20,type:"electrical",category:"electrical"},{name:"aircore",display:"Air Core Inductance",id:21,type:"electrical",category:"electrical"},{name:"laser",display:"Laser Real-Time Converter",id:22,type:"electrical",category:"electrical"},{name:"ohmsv",display:"Ohms Law (V)",id:23,type:"electrical",category:"electrical"},{name:"parallel",display:"Parallel Resistance",id:24,type:"electrical",category:"electrical"},{name:"velocitysound",display:"Velocity of Sound",id:25,type:"electrical",category:"electrical"},{name:"lcresonance",display:"LC Resonance",id:26,type:"electrical",category:"electrical"},{name:"voltagediv",display:"Voltage Divider",id:27,type:"electrical",category:"electrical"},{name:"speedtime",display:"Time (Speed)",id:28,type:"extra",category:"electrical"},{name:"wheat",display:"Wheatstone bridge",id:29,type:"electrical",category:"electrical"},{name:"color",display:"Color code Resistance",id:30,type:"electrical",category:"color"},{name:"powerrv",display:"Power (with R,V)",id:31,stringId:"31",type:"electrical",category:"electrical"},{name:"powervi",display:"Power (with V,I)",id:32,type:"electrical",category:"electrical"},{name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},{name:"speedspeed",display:"Speed",id:34,type:"extra",category:"electrical"},{name:"distance",display:"Distance (Speed)",id:35,type:"extra",category:"electrical"},{name:"volume",display:"Volume",id:36,type:"conversions",category:"conversion"},{name:"pressure",display:"Pressure",id:37,type:"conversions",category:"conversion"},{name:"speed",display:"Speed",id:38,type:"conversions",category:"conversion"},{name:"power",display:"Power",id:39,type:"conversions",category:"conversion"},{name:"powerir",display:"Power (with R,I)",id:40,type:"electrical",category:"electrical"},{name:"wavelength",display:"Wavelength",id:41,type:"extra",category:"electrical"},{name:"powerline",display:"Power Factor 3Phase (Line)",id:42,type:"electrical",category:"electrical"},{name:"powerneutral",display:"Power Factor 3Phase (neutral)",id:43,type:"electrical",category:"electrical"},{name:"power",display:"Power Factor Single Phase",id:44,stringId:"44",type:"electrical",category:"electrical"},{name:"charge",display:"Charge",id:45,type:"conversions",category:"conversion"},{name:"speedhorse",display:"Speed (Horsepower)",id:46,stringId:"46",type:"electrical",category:"electrical"},{name:"torque",display:"Torque (HorsePower)",id:47,type:"electrical",category:"electrical"},{name:"horsepower",display:"HorsePower",id:48,type:"electrical",category:"electrical"},{name:"twoseals",display:"Level measurement Two Seals",id:49,type:"instrumentation",category:"electrical"},{name:"onesealabove",display:"Level measurement one seal above",id:50,type:"instrumentation",category:"electrical"},{name:"onesealbelow",display:"Level measurement one seal below",id:51,type:"instrumentation",category:"electrical"},{name:"bubblelevel",display:"Bubble Level",id:52,type:"instrumentation",category:"electrical"},{name:"bubbleinterface",display:"Bubble Interface",id:53,type:"instrumentation",category:"electrical"},{name:"twosealint",display:"Two Seal Interface",id:54,type:"instrumentation",category:"electrical"},{name:"opentank",display:"Open Tank",id:55,type:"instrumentation",category:"electrical"},{name:"intwet",display:"Interface Wet Leg",id:56,type:"instrumentation",category:"electrical"},{name:"liquidpurge",display:"Liquid Purge",id:57,type:"instrumentation",category:"electrical"},{name:"LT3",display:"Level Transmission Closed Vessel",id:58,type:"instrumentation",category:"electrical"},{name:"short",display:"Short Circuit Calculation",id:59,type:"electrical",category:"electrical"},{name:"transformer",display:"Transformer Fault Current",id:60,type:"electrical",category:"electrical"},{name:"DOL",display:"DOL Star & Delta",id:61,type:"electrical",category:"electrical"},{name:"flowrate",display:"Flow Rate Calculation",id:62,type:"instrumentation",category:"electrical"},{name:"hydrost",display:"Hydrostatic Level",id:63,type:"instrumentation",category:"electrical"},{name:"orifice",display:"Orifice Plate error",id:64,type:"instrumentation",category:"electrical"},{name:"lb",display:"LbIn to Nm",id:65,type:"electrical",category:"electrical"},{name:"nm",display:"Nm to LbIn",id:66,type:"electrical",category:"electrical"},{name:"dcmotor",display:"DC Motor horsepower",id:67,type:"electrical",category:"electrical"},{name:"eff1",display:"Eff Tension from HP & FPM",id:68,type:"electrical",category:"electrical"},{name:"eff2",display:"Eff Tension from Torque and Radius",id:69,type:"electrical",category:"electrical"}],a=p.a.useState(t),r=Object(n.a)(a,2),d=r[0],u=r[1],h=p.a.useState([{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:!1},{id:2,type:"electrical",name:"ELECTRICAL",show:!1},{id:3,type:"conversions",name:"UNIT CONVERSION",show:!1}]),w=Object(n.a)(h,2),C=w[0],b=w[1],_=function(e){console.log("key",e),function(){var e=C;e.map((function(e){return e.show=!0})),b(e)}(),u(S.filter((function(t){return""!==e&&-1!==t.display.toLowerCase().indexOf(e.toLowerCase())}))),""===e&&u(S),console.log(d)},M=p.a.useState(t),I=Object(n.a)(M,2),S=I[0];I[1];return g("div",null,g(i.a,null,g("title",null,"gudofConvert"),g("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),g("link",{rel:"icon",href:"/favicon.ico"}),g("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"}),g("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"}),g("script",{type:"module",src:"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"}),g("script",{nomodule:!0,src:"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"}),g("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"})),g("body",{className:"body"},g(c.a,null,g(f.default,null),g(y.a,{style:{marginTop:"60px"},defaultActiveKey:"1"},void 0!==C&&C.map((function(t){return g(v,{tab:t.name,key:t.id},g("div",{style:{marginLeft:"20px",marginRight:"20px"}},g(o.a,{style:{marginLeft:"10px",marginRight:"30px"},placeholder:"Search",prefix:g("i",{style:{marginTop:"-5px"},className:"material-icons"},"search"),onInput:function(e){return _(e.target.value)}}),g(l.a,null,d.map((function(a){return a.type===t.type&&g(s.a,{className:"carditems",style:{flex:1}},"instrumentation"===a.category&&g(m.a,{href:"sliderTool/".concat(a.display,"/").concat(a.id),as:e.env.BACKEND_URL+"sliderTool/".concat(a.display,"/").concat(a.id)},g("a",null,a.display)),"zero"===a.category&&g(m.a,{href:"zerotox/".concat(a.display,"/").concat(a.id),as:e.env.BACKEND_URL+"zerotox/".concat(a.display,"/").concat(a.id)},g("a",null,a.display)),"electrical"===a.category&&g(m.a,{href:"functions/".concat(a.display,"/").concat(a.id),as:e.env.BACKEND_URL+"functions/".concat(a.display,"/").concat(a.id)},g("a",null,a.display)),"conversion"===a.category&&g(m.a,{href:"conversion/".concat(a.display,"/").concat(a.name),as:e.env.BACKEND_URL+"conversion/".concat(a.display,"/").concat(a.name)},g("a",null,a.display)),"color"===a.category&&g(m.a,{href:"colorcode/".concat(a.display,"/").concat(a.id),as:e.env.BACKEND_URL+"colorcode/".concat(a.display,"/").concat(a.id)},g("a",null,a.display)))})))))}))))))}}.call(this,a("8oxB"))},Xuae:function(e,t,a){"use strict";var n=a("RIqP"),r=a("lwsE"),i=a("W8MJ"),c=(a("PJYZ"),a("7W2i")),o=a("a1gu"),l=a("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return o(this,a)}}t.__esModule=!0,t.default=void 0;var d=a("q1tI"),p=function(e){c(a,e);var t=s(a);function a(e){var i;return r(this,a),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(d.Component);t.default=p},aJgq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("Ol7k"),c=a("BvKs"),o=a("YFqc"),l=a.n(o),s=r.a.createElement;function d(){return s(i.a,{className:"navbar"},s("div",null,s(c.a,{className:"menu"},s("h2",{className:"h2-nav"},s(l.a,{href:"/"},s("a",null,"gudofConvert"))))))}},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},zXOc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("Ol7k"),c=a("BvKs"),o=a("YFqc"),l=a.n(o),s=r.a.createElement;function d(e){var t=e.showDrawer;return s(i.a,{className:"navbar"},s("div",null,s(c.a,{className:"menu"},s("i",{onClick:function(){return t()},className:"material-icons menu-icon"},"dehaze"),s("h2",{className:"h2-nav"},s(l.a,{href:"/"},s("a",null,"gudofConvert"))))))}}},[["vlRD",0,2,1,3,5,4]]]);