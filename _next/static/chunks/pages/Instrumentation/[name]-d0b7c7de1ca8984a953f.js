_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{H0fC:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return w})),t.d(a,"default",(function(){return O}));t("ppZR");var n=t("d2CI"),s=t.n(n),l=(t("dc+4"),t("Btem")),o=t.n(l),u=t("ODXe"),c=t("q1tI"),i=t.n(c),r=t("nOHt"),d=t("zXOc"),m=t("8Kt/"),f=t.n(m),p=t("VcBQ"),b=t("mkpg"),N=t("RNiq"),y=t("Rm4c"),v=t("TRwk"),h=t("oqNV"),g=i.a.createElement,w=!0;function O(e){e.params;var a=e.functions,t=e.toolType,n=e.names,l=i.a.useState(!1),c=Object(u.a)(l,2),m=c[0],w=c[1];i.a.useEffect((function(){window.innerWidth>700&&w(!1)}));var O=i.a.useState(),S=Object(u.a)(O,2),j=S[0],T=S[1],x=i.a.useState(0),_=Object(u.a)(x,2),q=_[0],C=(_[1],i.a.useState()),E=Object(u.a)(C,2),k=E[0],H=E[1],I=Object(r.useRouter)(),R=i.a.useState(),X=Object(u.a)(R,2),D=X[0],J=X[1],K=i.a.useState(),M=Object(u.a)(K,2),P=M[0],U=M[1];i.a.useEffect((function(){I&&I.query&&(H(I.query.name),console.log("router",I.query.id))}),[I,I.query]);var V=i.a.useState(),z=Object(u.a)(V,2),B=z[0],W=z[1],Z=i.a.useState(),A=Object(u.a)(Z,2),G=A[0],L=A[1],Q=i.a.useState(),F=Object(u.a)(Q,2),Y=F[0],$=F[1],ee=i.a.useState(),ae=Object(u.a)(ee,2),te=ae[0],ne=ae[1];return i.a.useEffect((function(){if(void 0!==k){var e=n.find((function(e){return Object(N.stringSpaceToHyphen)(e.display)===I.query.name}));if($(e.category),void 0!==a.find((function(e){return Object(N.stringSpaceToHyphen)(e.display)===I.query.name}))){var t=a.find((function(e){return Object(N.stringSpaceToHyphen)(e.display)===I.query.name}));J(t.a),T(t.a),L(t.name),U(t.b),W(t.display)}ne(e.id),console.log("id",te)}}),[k]),g("div",null,g(f.a,null,g("title",null,I.query.name," Instrumentation Tool"),g("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),void 0!==a&&a.map((function(e){return Object(N.stringSpaceToHyphen)(e.display)===I.query.name&&g("meta",{key:"description",name:"description",content:e.desc})}))),g(d.default,{showDrawer:function(){window.innerWidth<=700&&w(!0)}}),g("div",{className:"tools-container"},g(o.a,{width:350,title:"gudofConvert",placement:"left",closable:!0,onClose:function(){w(!1)},visible:m},g(b.default,{names:n,toolType:t,onClose:function(){return w(!1)}})),g("div",{className:"tools-left"},g(p.default,{names:n,toolType:t,key2:"1"})),g(s.a,{className:"toolbox-layout"},void 0!==j&&"instrumentation"===Y&&g(y.default,{desc:"",display:B,a:D,b:P,res:q,qn:j,name:G}),"electrical"===Y&&g(h.default,{id:te}),"zero"===Y&&g(v.default,null))))}},TRwk:function(e,a,t){"use strict";t.r(a);t("MaXC");var n=t("4IMT"),s=t.n(n),l=(t("hr7U"),t("9xET")),o=t.n(l),u=(t("cUip"),t("iJl9")),c=t.n(u),i=(t("fv9D"),t("ZPTe")),r=t.n(i),d=t("ODXe"),m=t("q1tI"),f=t.n(m),p=f.a.createElement;a.default=function(){var e=f.a.useState(0),a=Object(d.a)(e,2),t=a[0],n=a[1],l=f.a.useState(100),u=Object(d.a)(l,2),i=u[0],m=u[1],b=f.a.useState(),N=Object(d.a)(b,2),y=N[0],v=N[1],h=function(){v(i-t)};return p("div",{className:"toolbox"},p("div",{className:"toolbox-heading"},"0-X % Conversion"),p("hr",{className:"hr"}),p("div",{className:"toolbox-calc"},p("div",{className:"heading"},"Calculation"),p(o.a,{className:"row"},p(r.a,{span:12},"Start Value"),p(r.a,{span:12},p(c.a,{className:"input box",style:{border:"1px solid gray"},type:"text",value:t,onChange:function(e){return function(e){n(Number(e.target.value)),h()}(e)}}))),p(o.a,{className:"row"},p(r.a,{span:12},"End value"),p(r.a,{span:12},p(c.a,{className:"input box",style:{border:"1px solid gray"},type:"text",value:i,onChange:function(e){return function(e){m(Number(e.target.value)),h()}(e)}}))),p(o.a,{className:"toolbox-descp"},p(r.a,{style:{textAlign:"center"}},p(s.a,{className:"calculate-button",onClick:function(){h()}},"Calculate")))),void 0!==y&&p("div",{className:"toolbox-calc"},p("hr",{className:"hr"}),p("div",{className:"heading"},"RESULT"),p(o.a,null,p(r.a,{span:12,className:"result-head"}," 0%"),p(r.a,null," ",t," ")),p(o.a,null,p(r.a,{span:12,className:"result-head"}," 25%"),p(r.a,null," ",y/4+Number(t)," ")),p(o.a,null,p(r.a,{span:12,className:"result-head"}," 50%"),p(r.a,null," ",y/2+Number(t)," ")),p(o.a,null,p(r.a,{span:12,className:"result-head"}," 75%"),p(r.a,null," ",3*y/4+Number(t),"  ")),p(o.a,null,p(r.a,{span:12,className:"result-head"}," 100%"),p(r.a,null," ",i," "))),p("hr",{className:"hr"}),p("div",{className:"toolbox-descp toolbox-calc"},p("div",{className:"heading"},"description"),p("div",{className:""},"This tool is used to calculate 0% , 25% , 50% , 75% ,and 100% of range between two numbers.")))}},kfKt:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Instrumentation/[name]",function(){return t("H0fC")}])}},[["kfKt",0,2,1,3,5,4,6,8,7,9,10,12,13,11,14,15,16,18,19,20,23,17]]]);