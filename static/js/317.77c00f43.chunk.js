"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[317],{6317:function(e,r,t){t.r(r),t.d(r,{default:function(){return Te}});var n=t(2791),a=t(4270),o=t(1413),i=t(1087),l=t(9434),s=t(9273),c=t(8737),d=t(6363),u=t(9332),p=t(9982),f=t(1231),m=t(2356),b=t(847),h=t(7762),y=t(4077),v=t(3704),g=(0,n.createContext)(null),w=g.Provider,x=t(3433),O=t(9439),C=t(4150),P=t(8481),k=Object.defineProperty,z=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,N=function(e,r,t){return r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},E=function(e,r){for(var t in r||(r={}))j.call(r,t)&&N(e,t,r[t]);if(z){var n,a=(0,h.Z)(z(r));try{for(a.s();!(n=a.n()).done;){t=n.value;S.call(r,t)&&N(e,t,r[t])}}catch(o){a.e(o)}finally{a.f()}}return e},I={size:"sm"},Z=(0,n.forwardRef)((function(e,r){var t=(0,y.N4)("CheckboxGroup",I,e),a=t.children,o=t.value,i=t.defaultValue,l=t.onChange,s=t.size,c=t.wrapperProps,d=function(e,r){var t={};for(var n in e)j.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&z){var a,o=(0,h.Z)(z(e));try{for(o.s();!(a=o.n()).done;)n=a.value,r.indexOf(n)<0&&S.call(e,n)&&(t[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return t}(t,["children","value","defaultValue","onChange","size","wrapperProps"]),u=(0,C.C)({value:o,defaultValue:i,finalValue:[],onChange:l}),p=(0,O.Z)(u,2),f=p[0],m=p[1];return n.createElement(w,{value:{value:f,onChange:function(e){var r=e.currentTarget.value;m(f.includes(r)?f.filter((function(e){return e!==r})):[].concat((0,x.Z)(f),[r]))},size:s}},n.createElement(P.I.Wrapper,E(E({labelElement:"div",size:s,__staticSelector:"CheckboxGroup",ref:r},c),d),a))}));Z.displayName="@mantine/core/CheckboxGroup";var _=Object.defineProperty,T=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,D=function(e,r,t){return r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},L=function(e,r){for(var t in r||(r={}))A.call(r,t)&&D(e,t,r[t]);if(T){var n,a=(0,h.Z)(T(r));try{for(a.s();!(n=a.n()).done;){t=n.value;W.call(r,t)&&D(e,t,r[t])}}catch(o){a.e(o)}finally{a.f()}}return e},R=function(e,r){var t={};for(var n in e)A.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&T){var a,o=(0,h.Z)(T(e));try{for(o.s();!(a=o.n()).done;){n=a.value;r.indexOf(n)<0&&W.call(e,n)&&(t[n]=e[n])}}catch(i){o.e(i)}finally{o.f()}}return t};function V(e){var r=e,t=r.width,a=r.height,o=r.style,i=R(r,["width","height","style"]);return n.createElement("svg",L({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:L({width:t,height:a},o)},i),n.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var M=t(4942),q=t(5431),F=t(7581),J=t(7653),G=t(4499),Y=Object.defineProperty,B=Object.defineProperties,H=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,$=function(e,r,t){return r in e?Y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},Q=function(e,r){for(var t in r||(r={}))U.call(r,t)&&$(e,t,r[t]);if(K){var n,a=(0,h.Z)(K(r));try{for(a.s();!(n=a.n()).done;){t=n.value;X.call(r,t)&&$(e,t,r[t])}}catch(o){a.e(o)}finally{a.f()}}return e},ee=function(e,r){return B(e,H(r))},re={xs:(0,q.h)(16),sm:(0,q.h)(20),md:(0,q.h)(24),lg:(0,q.h)(30),xl:(0,q.h)(36)},te=(0,F.k)((function(e,r,t){var n=r.radius,a=r.color,o=r.transitionDuration,i=r.labelPosition,l=r.error,s=r.indeterminate,c=t.size,d=(0,J.a)({size:c,sizes:re}),u=e.fn.variant({variant:"filled",color:a});return{icon:ee(Q({},e.fn.cover()),{ref:(0,G.A)("icon"),color:s?"inherit":e.white,transform:s?"none":"translateY(".concat((0,q.h)(5),") scale(0.5)"),opacity:s?1:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:"".concat(o,"ms"),pointerEvents:"none",width:"60%",position:"absolute",zIndex:1,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}}),inner:{position:"relative",width:d,height:d,order:"left"===i?2:1},input:ee(Q({},e.fn.focusStyles()),{appearance:"none",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:"".concat((0,q.h)(1)," solid ").concat(l?e.fn.variant({variant:"filled",color:"red"}).background:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]),width:d,height:d,borderRadius:e.fn.radius(n),padding:0,display:"block",margin:0,transition:"border-color ".concat(o,"ms ease, background-color ").concat(o,"ms ease"),cursor:e.cursorType,"&:checked":(0,M.Z)({backgroundColor:u.background,borderColor:u.background},"& + .".concat((0,G.A)("icon")),{opacity:1,color:e.white,transform:"translateY(0) scale(1)"}),"&:disabled":(0,M.Z)({backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],borderColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[3],cursor:"not-allowed",pointerEvents:"none"},"& + .".concat((0,G.A)("icon")),{color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5]})})}})),ne=t(1856),ae=Object.defineProperty,oe=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,de=function(e,r,t){return r in e?ae(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},ue=function(e,r){for(var t in r||(r={}))se.call(r,t)&&de(e,t,r[t]);if(le){var n,a=(0,h.Z)(le(r));try{for(a.s();!(n=a.n()).done;){t=n.value;ce.call(r,t)&&de(e,t,r[t])}}catch(o){a.e(o)}finally{a.f()}}return e},pe={xs:(0,q.h)(16),sm:(0,q.h)(20),md:(0,q.h)(24),lg:(0,q.h)(30),xl:(0,q.h)(36)},fe=(0,F.k)((function(e,r,t){var n,a,o,i=r.labelPosition,l=t.size;return{root:{},body:{display:"flex","&:has(input:disabled) label":{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}},labelWrapper:(a=ue({},e.fn.fontStyles()),o={display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:l in pe?(0,J.a)({size:l,sizes:e.fontSizes}):void 0,lineHeight:l in pe?(0,J.a)({size:l,sizes:pe}):void 0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,cursor:e.cursorType,order:"left"===i?1:2},oe(a,ie(o))),description:(0,M.Z)({marginTop:"calc(".concat(e.spacing.xs," / 2)")},"left"===i?"paddingRight":"paddingLeft",e.spacing.sm),error:(0,M.Z)({marginTop:"calc(".concat(e.spacing.xs," / 2)")},"left"===i?"paddingRight":"paddingLeft",e.spacing.sm),label:(n={cursor:e.cursorType},(0,M.Z)(n,"left"===i?"paddingRight":"paddingLeft",e.spacing.sm),(0,M.Z)(n,"&:disabled, &[data-disabled]",{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}),n)}})),me=t(4414),be=Object.defineProperty,he=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ge=function(e,r,t){return r in e?be(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},we=(0,n.forwardRef)((function(e,r){var t=e,a=t.__staticSelector,o=t.className,i=t.classNames,l=t.styles,s=t.unstyled,c=t.children,d=t.label,u=t.description,p=t.id,f=t.disabled,m=t.error,b=t.size,y=t.labelPosition,v=t.variant,g=function(e,r){var t={};for(var n in e)ye.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&he){var a,o=(0,h.Z)(he(e));try{for(o.s();!(a=o.n()).done;)n=a.value,r.indexOf(n)<0&&ve.call(e,n)&&(t[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return t}(t,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant"]),w=fe({labelPosition:y},{name:a,styles:l,classNames:i,unstyled:s,variant:v,size:b}),x=w.classes,O=w.cx;return n.createElement(me.x,function(e,r){for(var t in r||(r={}))ye.call(r,t)&&ge(e,t,r[t]);if(he){var n,a=(0,h.Z)(he(r));try{for(a.s();!(n=a.n()).done;)t=n.value,ve.call(r,t)&&ge(e,t,r[t])}catch(o){a.e(o)}finally{a.f()}}return e}({className:O(x.root,o),ref:r},g),n.createElement("div",{className:O(x.body)},c,n.createElement("div",{className:x.labelWrapper},d&&n.createElement("label",{className:x.label,"data-disabled":f||void 0,htmlFor:p},d),u&&n.createElement(P.I.Description,{className:x.description},u),m&&"boolean"!==m&&n.createElement(P.I.Error,{className:x.error},m))))}));we.displayName="@mantine/core/InlineInput";var xe=Object.defineProperty,Oe=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,ke=function(e,r,t){return r in e?xe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},ze=function(e,r){for(var t in r||(r={}))Ce.call(r,t)&&ke(e,t,r[t]);if(Oe){var n,a=(0,h.Z)(Oe(r));try{for(a.s();!(n=a.n()).done;){t=n.value;Pe.call(r,t)&&ke(e,t,r[t])}}catch(o){a.e(o)}finally{a.f()}}return e},je={size:"sm",transitionDuration:100,icon:function(e){var r=e,t=r.indeterminate,a=R(r,["indeterminate"]);return t?n.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},a),n.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):n.createElement(V,L({},a))},labelPosition:"right"},Se=(0,n.forwardRef)((function(e,r){var t=(0,y.N4)("Checkbox",je,e),a=t.className,o=t.style,i=t.sx,l=t.checked,s=t.disabled,c=t.color,d=t.label,u=t.indeterminate,p=t.id,f=t.size,m=t.radius,b=t.wrapperProps,w=(t.children,t.classNames),x=t.styles,O=t.transitionDuration,C=t.icon,P=t.unstyled,k=t.labelPosition,z=t.description,j=t.error,S=t.variant,N=function(e,r){var t={};for(var n in e)Ce.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&Oe){var a,o=(0,h.Z)(Oe(e));try{for(o.s();!(a=o.n()).done;)n=a.value,r.indexOf(n)<0&&Pe.call(e,n)&&(t[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return t}(t,["className","style","sx","checked","disabled","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled","labelPosition","description","error","variant"]),E=(0,n.useContext)(g),I=(0,v.M)(p),Z=(0,ne.x)(N),_=Z.systemStyles,T=Z.rest,A=te({radius:m,color:c,transitionDuration:O,labelPosition:k,error:!!j,indeterminate:u},{name:"Checkbox",classNames:w,styles:x,unstyled:P,variant:S,size:(null==E?void 0:E.size)||f}).classes,W=E?{checked:E.value.includes(T.value),onChange:E.onChange}:{};return n.createElement(we,ze(ze({className:a,sx:i,style:o,id:I,size:(null==E?void 0:E.size)||f,labelPosition:k,label:d,description:z,error:j,disabled:s,__staticSelector:"Checkbox",classNames:w,styles:x,unstyled:P,"data-checked":W.checked||void 0,variant:S},_),b),n.createElement("div",{className:A.inner},n.createElement("input",ze(ze({id:I,ref:r,type:"checkbox",className:A.input,checked:l,disabled:s},T),W)),n.createElement(C,{indeterminate:u,className:A.icon})))}));Se.displayName="@mantine/core/Checkbox",Se.Group=Z;var Ne=t(675),Ee=t(5879),Ie=t(8296),Ze=t(3329),_e=function(){var e=(0,l.I0)(),r=(0,c.c)({initialValues:{name:"",email:"",password:"",terms:!0},validate:{name:function(e){return e.length<=3?"Password should include at least 3 characters":null},email:(0,d.J)("Invalid email"),password:function(e){return e.length<=6?"Password should include at least 6 characters":null}}});return(0,Ze.jsxs)(u.X,{shadow:"sm",p:"xl",w:350,mx:"auto",children:[(0,Ze.jsx)(p.x,{size:"lg",weight:500,ta:"center",mb:20,children:"Welcome, register with email"}),(0,Ze.jsxs)("form",{onSubmit:r.onSubmit((function(r){var t=r.name,n=r.email,a=r.password;e((0,s.z2)({name:t,email:n,password:a}))})),children:[(0,Ze.jsxs)(f.K,{children:[(0,Ze.jsx)(m.o,(0,o.Z)({withAsterisk:!0,required:!0,label:"Name",placeholder:"Your name",value:r.values.name,onChange:function(e){return r.setFieldValue("name",e.currentTarget.value)},error:r.errors.name&&"Invalid email",radius:"md"},r.getInputProps("name"))),(0,Ze.jsx)(m.o,(0,o.Z)({withAsterisk:!0,required:!0,label:"Email",placeholder:"hello@gmail.com",value:r.values.email,onChange:function(e){return r.setFieldValue("email",e.currentTarget.value)},error:r.errors.email&&"Invalid email",radius:"md"},r.getInputProps("email"))),(0,Ze.jsx)(b.W,(0,o.Z)({withAsterisk:!0,required:!0,label:"Password",placeholder:"Your password",value:r.values.password,onChange:function(e){return r.setFieldValue("password",e.currentTarget.value)},radius:"md"},r.getInputProps("password"))),(0,Ze.jsx)(Se,{label:"I accept terms and conditions",checked:r.values.terms,onChange:function(e){return r.setFieldValue("terms",e.currentTarget.checked)}})]}),(0,Ze.jsxs)(Ne.Z,{position:"apart",mt:"xl",children:[(0,Ze.jsxs)(p.x,{color:"dimmed",size:"xs",children:["Already have an account?"," ",(0,Ze.jsx)(Ee.e,{component:i.rU,to:"/login",children:"Login"})]}),(0,Ze.jsx)(Ie.z,{type:"submit",children:"Register"})]})]})]})},Te=function(){return(0,Ze.jsxs)(Ze.Fragment,{children:[(0,Ze.jsx)(a.q,{children:(0,Ze.jsx)("title",{children:"Registration"})}),(0,Ze.jsx)(_e,{})]})}},5879:function(e,r,t){t.d(r,{e:function(){return k}});var n=t(7762),a=t(2791),o=t(4077),i=t(9249),l=t(9982),s=t(7581),c=Object.defineProperty,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=function(e,r,t){return r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},m=function(e,r){for(var t in r||(r={}))u.call(r,t)&&f(e,t,r[t]);if(d){var a,o=(0,n.Z)(d(r));try{for(o.s();!(a=o.n()).done;){t=a.value;p.call(r,t)&&f(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e};function b(e){var r=e.theme,t=e.color;return"dimmed"===t?r.fn.dimmed():r.fn.themeColor(t||r.primaryColor,"dark"===r.colorScheme?4:7,!1,!0)}var h=(0,s.k)((function(e,r){var t=r.color,n=r.underline;return{root:m({backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,color:b({theme:e,color:t})},e.fn.hover({textDecoration:n?"underline":"none"}))}})),y=Object.defineProperty,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=function(e,r,t){return r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},O=function(e,r){for(var t in r||(r={}))g.call(r,t)&&x(e,t,r[t]);if(v){var a,o=(0,n.Z)(v(r));try{for(o.s();!(a=o.n()).done;){t=a.value;w.call(r,t)&&x(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e},C={underline:!0},P=(0,a.forwardRef)((function(e,r){var t=(0,o.N4)("Anchor",C,e),i=t.component,s=t.className,c=t.unstyled,d=t.variant,u=t.size,p=t.color,f=t.underline,m=function(e,r){var t={};for(var a in e)g.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&v){var o,i=(0,n.Z)(v(e));try{for(i.s();!(o=i.n()).done;)a=o.value,r.indexOf(a)<0&&w.call(e,a)&&(t[a]=e[a])}catch(l){i.e(l)}finally{i.f()}}return t}(t,["component","className","unstyled","variant","size","color","underline"]),b=h({color:p,underline:f},{name:"Anchor",unstyled:c,variant:d,size:u}),y=b.classes,x=b.cx,P="button"===i?{type:"button"}:null;return a.createElement(l.x,O(O({component:i||"a",ref:r,className:x(y.root,s),size:u},P),m))}));P.displayName="@mantine/core/Anchor";var k=(0,i.F)(P)},847:function(e,r,t){t.d(r,{W:function(){return L}});var n=t(9439),a=t(7762),o=t(2791),i=t(3704),l=t(4150),s=t(5431),c=t(4077),d=t(7653),u=t(7581),p=t(4110),f=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=function(e,r,t){return r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},w=function(e,r){for(var t in r||(r={}))y.call(r,t)&&g(e,t,r[t]);if(h){var n,o=(0,a.Z)(h(r));try{for(o.s();!(n=o.n()).done;){t=n.value;v.call(r,t)&&g(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e},x=function(e,r){return m(e,b(r))},O=(0,u.k)((function(e,r,t){var n=r.rightSectionWidth,a=t.size;return{visibilityToggle:{},input:{position:"relative",overflow:"hidden"},innerInput:x(w(w({},e.fn.fontStyles()),e.fn.cover(0)),{backgroundColor:"transparent",border:"".concat((0,s.h)(1)," solid transparent"),borderLeftWidth:0,borderRightWidth:0,boxSizing:"border-box",display:"block",width:"calc(100% - ".concat((0,s.h)(n),")"),paddingLeft:"calc(".concat((0,d.a)({size:a,sizes:p.J}),"  / 3)"),fontSize:(0,d.a)({size:a,sizes:e.fontSizes}),height:"calc(".concat((0,d.a)({size:a,sizes:p.J})," - ").concat((0,s.h)(2),")"),lineHeight:"calc(".concat((0,d.a)({size:a,sizes:p.J})," - ").concat((0,s.h)(4),")"),color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&::-ms-reveal, &::-ms-clear":{display:"none"},"&:focus":{outline:0},"&:disabled":{cursor:"not-allowed",pointerEvents:"none",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,"&::placeholder":{color:e.colors.dark[2]}},"&::placeholder":x(w({},e.fn.placeholderStyles()),{opacity:1}),"&[data-invalid]":{color:e.fn.variant({variant:"filled",color:"red"}).background,"&::placeholder":{opacity:1,color:e.fn.variant({variant:"filled",color:"red"}).background}},"&[data-with-icon]":{paddingLeft:(0,d.a)({size:a,sizes:p.J})}})}})),C=t(1856),P=t(6808),k=t(8481),z=Object.defineProperty,j=Object.defineProperties,S=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,Z=function(e,r,t){return r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},_=function(e,r){for(var t in r||(r={}))E.call(r,t)&&Z(e,t,r[t]);if(N){var n,o=(0,a.Z)(N(r));try{for(o.s();!(n=o.n()).done;){t=n.value;I.call(r,t)&&Z(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e},T={xs:(0,s.h)(22),sm:(0,s.h)(26),md:(0,s.h)(28),lg:(0,s.h)(32),xl:(0,s.h)(40)},A={xs:(0,s.h)(12),sm:(0,s.h)(15),md:(0,s.h)(17),lg:(0,s.h)(19),xl:(0,s.h)(21)},W={xs:(0,s.h)(28),sm:(0,s.h)(32),md:(0,s.h)(34),lg:(0,s.h)(44),xl:(0,s.h)(54)},D={size:"sm",toggleTabIndex:-1,visibilityToggleIcon:function(e){var r=e.reveal,t=e.size;return o.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:t,height:t}},o.createElement("path",{d:r?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},__staticSelector:"PasswordInput"},L=(0,o.forwardRef)((function(e,r){var t,s,u=(0,c.N4)("PasswordInput",D,e),p=u.radius,f=u.disabled,m=u.size,b=u.toggleTabIndex,h=u.className,y=u.id,v=u.label,g=u.error,w=u.required,x=u.style,z=u.icon,Z=u.description,L=u.wrapperProps,R=u.classNames,V=u.styles,M=u.variant,q=u.visibilityToggleIcon,F=u.__staticSelector,J=u.sx,G=u.labelProps,Y=u.descriptionProps,B=u.errorProps,H=u.unstyled,K=u.visibilityToggleLabel,U=u.withAsterisk,X=u.inputContainer,$=u.iconWidth,Q=u.inputWrapperOrder,ee=u.visible,re=u.defaultVisible,te=u.onVisibilityChange,ne=function(e,r){var t={};for(var n in e)E.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&N){var o,i=(0,a.Z)(N(e));try{for(i.s();!(o=i.n()).done;)n=o.value,r.indexOf(n)<0&&I.call(e,n)&&(t[n]=e[n])}catch(l){i.e(l)}finally{i.f()}}return t}(u,["radius","disabled","size","toggleTabIndex","className","id","label","error","required","style","icon","description","wrapperProps","classNames","styles","variant","visibilityToggleIcon","__staticSelector","sx","labelProps","descriptionProps","errorProps","unstyled","visibilityToggleLabel","withAsterisk","inputContainer","iconWidth","inputWrapperOrder","visible","defaultVisible","onVisibilityChange"]),ae=(0,d.a)({size:m,sizes:W}),oe=O({rightSectionWidth:ae},{name:"PasswordInput",classNames:R,styles:V,unstyled:H,size:m,variant:M}).classes,ie=(0,i.M)(y),le=(0,C.x)(ne),se=le.systemStyles,ce=le.rest,de=(0,l.C)({value:ee,defaultValue:re,finalValue:!1,onChange:te}),ue=(0,n.Z)(de,2),pe=ue[0],fe=ue[1],me=function(){return fe(!pe)},be=o.createElement(P.A,{className:oe.visibilityToggle,tabIndex:b,radius:p,size:(0,d.a)({size:m,sizes:T}),"aria-hidden":!K,"aria-label":K,unstyled:H,onMouseDown:function(e){e.preventDefault(),me()},onKeyDown:function(e){" "===e.key&&(e.preventDefault(),me())}},o.createElement(q,{reveal:pe,size:(0,d.a)({size:m,sizes:A})}));return o.createElement(k.I.Wrapper,_(_({required:w,id:ie,label:v,error:g,description:Z,size:m,className:h,style:x,classNames:R,styles:V,__staticSelector:F,sx:J,errorProps:B,descriptionProps:Y,labelProps:G,unstyled:H,withAsterisk:U,inputWrapperOrder:Q,inputContainer:X,variant:M},se),L),o.createElement(k.I,{component:"div",error:g,icon:z,size:m,classNames:(t=_({},R),s={input:oe.input},j(t,S(s))),styles:V,radius:p,disabled:f,__staticSelector:F,rightSectionWidth:ae,rightSection:!f&&be,variant:M,unstyled:H,iconWidth:$},o.createElement("input",_({type:pe?"text":"password",required:w,"data-invalid":!!g||void 0,"data-with-icon":!!z||void 0,className:oe.innerInput,disabled:f,id:ie,ref:r},ce))))}));L.displayName="@mantine/core/PasswordInput"},6363:function(e,r,t){function n(e){return function(e,r){var t=r||!0;return function(r){return"string"!==typeof r?t:e.test(r)?null:t}}(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}t.d(r,{J:function(){return n}})}}]);
//# sourceMappingURL=317.77c00f43.chunk.js.map