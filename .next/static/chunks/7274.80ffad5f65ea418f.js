"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7274],{7274:function(e,t,n){n.r(t),n.d(t,{Equation:function(){return he}});var a=n(7294),r=n(1008);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o,i,c=(0,a.memo)((function(e){var t=e.children,n=e.math,o=e.block,i=e.errorColor,c=e.renderError,s=e.settings,m=e.as,u=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}(e,["children","math","block","errorColor","renderError","settings","as"]),p=m||(o?"div":"span"),d=null!=t?t:n,h=(0,a.useState)({innerHtml:""}),g=h[0],f=h[1];return(0,a.useEffect)((function(){try{var e=r.Z.renderToString(d,l({displayMode:!!o,errorColor:i,throwOnError:!!c},s));f({innerHtml:e})}catch(e){if(!(e instanceof r.Z.ParseError||e instanceof TypeError))throw e;f(c?{errorElement:c(e)}:{innerHtml:e.message})}}),[o,d,i,c,s]),"errorElement"in g?g.errorElement:a.createElement(p,Object.assign({},u,{dangerouslySetInnerHTML:{__html:g.innerHtml}}))})),s=n(6861),m=n(8110),u=n(3324),p=n(3072),d=n(9218),h=n(9590),g=Object.create,f=Object.defineProperty,v=Object.defineProperties,y=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,w=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&_(e,n,t[n]);if(k)for(var n of k(t))N.call(t,n)&&_(e,n,t[n]);return e},P=(e,t)=>v(e,b(t)),I=(e,t)=>{var n={};for(var a in e)C.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&N.call(e,a)&&(n[a]=e[a]);return n},O=(e,t,n)=>new Promise(((a,r)=>{var l=e=>{try{i(n.next(e))}catch(t){r(t)}},o=e=>{try{i(n.throw(e))}catch(t){r(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,o);i((n=n.apply(e,t)).next())})),L=(o={"../../node_modules/lodash.throttle/index.js"(e,t){var n="Expected a function",a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof global&&global&&global.Object===Object&&global,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),u=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return m.Date.now()};function g(e,t,a){var r,l,o,i,c,s,m=0,u=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=r,a=l;return r=l=void 0,m=t,i=e.apply(a,n)}function E(e){return m=e,c=setTimeout(w,t),u?b(e):i}function k(e){var n=e-s;return void 0===s||n>=t||n<0||g&&e-m>=o}function w(){var e=h();if(k(e))return C(e);c=setTimeout(w,function(e){var n=t-(e-s);return g?d(n,o-(e-m)):n}(e))}function C(e){return c=void 0,y&&r?b(e):(r=l=void 0,i)}function N(){var e=h(),n=k(e);if(r=arguments,l=this,s=e,n){if(void 0===c)return E(s);if(g)return c=setTimeout(w,t),b(s)}return void 0===c&&(c=setTimeout(w,t)),i}return t=v(t)||0,f(a)&&(u=!!a.leading,o=(g="maxWait"in a)?p(v(a.maxWait)||0,t):o,y="trailing"in a?!!a.trailing:y),N.cancel=function(){void 0!==c&&clearTimeout(c),m=0,r=s=l=c=void 0},N.flush=function(){return void 0===c?i:C(h())},N}function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||o.test(e)?i(e.slice(2),n?2:8):r.test(e)?NaN:+e}t.exports=function(e,t,a){var r=!0,l=!0;if("function"!=typeof e)throw new TypeError(n);return f(a)&&(r="leading"in a?!!a.leading:r,l="trailing"in a?!!a.trailing:l),g(e,t,{leading:r,maxWait:t,trailing:l})}}},function(){return i||(0,o[E(o)[0]])((i={exports:{}}).exports,i),i.exports}),M=(e,t)=>{if(!e)return null;if(e.startsWith("data:"))return e;if(e.startsWith("https://images.unsplash.com"))return e;try{const t=new URL(e);if(t.pathname.startsWith("/secure.notion-static.com")&&t.hostname.endsWith(".amazonaws.com")&&t.searchParams.has("X-Amz-Credential")&&t.searchParams.has("X-Amz-Signature")&&t.searchParams.has("X-Amz-Algorithm"))return e}catch(r){}e.startsWith("/images")&&(e=`https://www.notion.so${e}`),e=`https://www.notion.so${e.startsWith("/image")?e:`/image/${encodeURIComponent(e)}`}`;const n=new URL(e);let a="space"===t.parent_table?"block":t.parent_table;return"collection"!==a&&"team"!==a||(a="block"),n.searchParams.set("table",a),n.searchParams.set("id",t.id),n.searchParams.set("cache","v2"),e=n.toString()},j=e=>t=>(t=(t||"").replace(/-/g,""),e&&t===e?"/":`/${t}`),z=(...e)=>e.filter((e=>!!e)).join(" "),S="undefined"!==typeof window,U=new Set(["youtu.be","youtube.com","www.youtube.com","youtube-nocookie.com","www.youtube-nocookie.com"]);var R=function(e){return a.createElement("svg",x({viewBox:"0 0 260 260"},e),a.createElement("g",null,a.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:"#161614"})))},$=({block:e,inline:t,className:n})=>{var r,l,o;const{components:i}=pe(),{original_url:c,attributes:m,domain:u}=(null==e?void 0:e.format)||{};if(!c||!m)return null;const p=null==(r=m.find((e=>"title"===e.id)))?void 0:r.values[0];let d=null==(l=m.find((e=>"owner"===e.id)))?void 0:l.values[0];const h=null==(o=m.find((e=>"updated_at"===e.id)))?void 0:o.values[0],g=h?(0,s.c8)(h):null;let f;if("github.com"!==u)return console.log(`Unsupported external_object_instance domain "${u}"`,JSON.stringify(e,null,2)),null;if(f=a.createElement(R,null),d){const e=d.split("/");d=e[e.length-1]}return a.createElement(i.Link,{target:"_blank",rel:"noopener noreferrer",href:c,className:z("notion-external",t?"notion-external-mention":"notion-external-block notion-row",n)},f&&a.createElement("div",{className:"notion-external-image"},f),a.createElement("div",{className:"notion-external-description"},a.createElement("div",{className:"notion-external-title"},p),(d||g)&&a.createElement("div",{className:"notion-external-subtitle"},d&&a.createElement("span",null,d),d&&g&&a.createElement("span",null," \u2022 "),g&&a.createElement("span",null,"Updated ",g))))},B=e=>S?a.createElement(u.Img,x({},e)):a.createElement("img",x({},e)),H=e=>{const t=e,{className:n}=t,r=I(t,["className"]);return a.createElement("svg",P(x({className:n},r),{viewBox:"0 0 30 30",width:"16"}),a.createElement("path",{d:"M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"}))},T=e=>{var t,n,r,l=e,{src:o,alt:i,className:c,style:m,zoomable:u=!1,priority:d=!1,height:h}=l,g=I(l,["src","alt","className","style","zoomable","priority","height"]);const{recordMap:f,zoom:v,previewImages:y,forceCustomImages:b,components:E}=pe(),k=a.useRef(v?v.clone():null),w=y?null!=(r=null==(t=null==f?void 0:f.preview_images)?void 0:t[o])?r:null==(n=null==f?void 0:f.preview_images)?void 0:n[(0,s.D5)(o)]:null,C=a.useCallback((e=>{u&&(e.target.src||e.target.srcset)&&k.current&&k.current.attach(e.target)}),[k,u]),N=a.useCallback((e=>{k.current&&e&&k.current.attach(e)}),[k]),_=a.useMemo((()=>u?N:void 0),[u,N]);if(w){const e=w.originalHeight/w.originalWidth;return E.Image?a.createElement(E.Image,{src:o,alt:i,style:m,className:c,width:w.originalWidth,height:w.originalHeight,blurDataURL:w.dataURIBase64,placeholder:"blur",priority:d,onLoad:C}):a.createElement(p.AZ,P(x({src:o},g),{experimentalDecode:!0}),(({imageState:t,ref:n})=>{const r=t===p.zl.LoadSuccess,l={width:"100%"},s={};return h?l.height=h:(s.position="absolute",l.paddingBottom=100*e+"%"),a.createElement("div",{className:z("lazy-image-wrapper",r&&"lazy-image-loaded",c),style:l},a.createElement("img",{className:"lazy-image-preview",src:w.dataURIBase64,alt:i,ref:n,style:m,decoding:"async"}),a.createElement("img",{className:"lazy-image-real",src:o,alt:i,ref:_,style:x(x({},m),s),width:w.originalWidth,height:w.originalHeight,decoding:"async",loading:"lazy"}))}))}return E.Image&&b?a.createElement(E.Image,{src:o,alt:i,className:c,style:m,width:null,height:h||null,priority:d,onLoad:C}):a.createElement("img",x({className:c,style:m,src:o,alt:i,ref:_,loading:"lazy",decoding:"async"},g))},F=a.memo((({block:e,className:t,inline:n=!0,hideDefaultIcon:r=!1,defaultIcon:l})=>{var o;const{mapImageUrl:i,recordMap:c,darkMode:u}=pe();let p=!1,d=null;if("page"===(h=e).type||"callout"===h.type||"collection_view"===h.type||"collection_view_page"===h.type){const n=(null==(o=(0,s.Ck)(e,c))?void 0:o.trim())||l,h=(0,s.Ho)(e,c);if(n&&(0,m.Z)(n)){const r=i(n,e);p=!0,d=a.createElement(T,{src:r,alt:h||"page icon",className:z(t,"notion-page-icon")})}else if(n&&n.startsWith("/icons/")){const e="https://www.notion.so"+n+"?mode="+(u?"dark":"light");d=a.createElement(T,{src:e,alt:h||"page icon",className:z(t,"notion-page-icon")})}else n?(p=!1,d=a.createElement("span",{className:z(t,"notion-page-icon"),role:"img","aria-label":n},n)):r||(p=!0,d=a.createElement(H,{className:z(t,"notion-page-icon"),alt:h||"page icon"}))}var h;return d?a.createElement("div",{className:z(n?"notion-page-icon-inline":"notion-page-icon-hero",p?"notion-page-icon-image":"notion-page-icon-span")},d):null})),V=a.memo((e=>{var t,n,r=e,{block:l,className:o,defaultIcon:i}=r,c=I(r,["block","className","defaultIcon"]);const{recordMap:m}=pe();if(!l)return null;if("collection_view_page"===l.type||"collection_view"===l.type){const e=(0,s.Ho)(l,m);if(!e)return null;const t=[[e]];return a.createElement("span",x({className:z("notion-page-title",o)},c),a.createElement(F,{block:l,defaultIcon:i,className:"notion-page-title-icon"}),a.createElement("span",{className:"notion-page-title-text"},a.createElement(q,{value:t,block:l})))}return(null==(t=l.properties)?void 0:t.title)?a.createElement("span",x({className:z("notion-page-title",o)},c),a.createElement(F,{block:l,defaultIcon:i,className:"notion-page-title-icon"}),a.createElement("span",{className:"notion-page-title-text"},a.createElement(q,{value:null==(n=l.properties)?void 0:n.title,block:l}))):null})),q=({value:e,block:t,linkProps:n,linkProtocol:r})=>{const{components:l,recordMap:o,mapPageUrl:i,mapImageUrl:c,rootDomain:m}=pe();return a.createElement(a.Fragment,null,null==e?void 0:e.map((([e,u],p)=>{if(!u)return","===e?a.createElement("span",{key:p,style:{padding:"0.5em"}}):a.createElement(a.Fragment,{key:p},e);const d=u.reduce(((e,u)=>{var p,d,h,g,f,v;switch(u[0]){case"p":{const e=u[1],t=null==(p=o.block[e])?void 0:p.value;return t?a.createElement(l.PageLink,{className:"notion-link",href:i(e)},a.createElement(V,{block:t})):(console.log('"p" missing block',e),null)}case"\u2023":{const e=u[1][0],r=u[1][1];if("u"===e){const e=null==(d=o.notion_user[r])?void 0:d.value;if(!e)return console.log('"\u2023" missing user',r),null;const n=[e.given_name,e.family_name].filter(Boolean).join(" ");return a.createElement(B,{className:"notion-user",src:c(e.profile_photo,t),alt:n})}{const t=null==(h=o.block[r])?void 0:h.value;return t?a.createElement(l.PageLink,P(x({className:"notion-link",href:i(r)},n),{target:"_blank",rel:"noopener noreferrer"}),a.createElement(V,{block:t})):(console.log('"\u2023" missing block',e,r),null)}}case"h":return a.createElement("span",{className:`notion-${u[1]}`},e);case"c":return a.createElement("code",{className:"notion-inline-code"},e);case"b":return a.createElement("b",null,e);case"i":return a.createElement("em",null,e);case"s":return a.createElement("s",null,e);case"_":return a.createElement("span",{className:"notion-inline-underscore"},e);case"e":return a.createElement(l.Equation,{math:u[1],inline:!0});case"m":return e;case"a":{const t=u[1],o=t.substr(1),c=(0,s.q5)(o,{uuid:!0});if(("/"===t[0]||t.includes(m))&&c){const r=t.includes(m)?t:`${i(c)}${v=t,v.includes("#")?v.replace(/^.+(#.+)$/,"$1"):""}`;return a.createElement(l.PageLink,x({className:"notion-link",href:r},n),e)}return a.createElement(l.Link,x({className:"notion-link",href:r?`${r}:${u[1]}`:u[1]},n),e)}case"d":{const t=u[1],n=null==t?void 0:t.type;if("date"===n){const e=t.start_date;return(0,s.p6)(e)}if("daterange"===n){const e=t.start_date,n=t.end_date;return`${(0,s.p6)(e)} \u2192 ${(0,s.p6)(n)}`}return e}case"u":{const e=u[1],n=null==(g=o.notion_user[e])?void 0:g.value;if(!n)return console.log("missing user",e),null;const r=[n.given_name,n.family_name].filter(Boolean).join(" ");return a.createElement(B,{className:"notion-user",src:c(n.profile_photo,t),alt:r})}case"eoi":{const e=u[1],t=null==(f=o.block[e])?void 0:f.value;return a.createElement($,{block:t,inline:!0})}default:return console.log("unsupported text format",u),e}}),a.createElement(a.Fragment,null,e));return a.createElement(a.Fragment,{key:p},d)})))},W=e=>{const t=e,{className:n}=t,r=I(t,["className"]);return a.createElement("svg",x({className:z("notion-icon",n),viewBox:"0 0 17 17"},r),a.createElement("path",{d:"M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"}))},D=((e,t,n)=>(n=null!=e?g(w(e)):{},((e,t,n,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let r of E(t))C.call(e,r)||r===n||f(e,r,{get:()=>t[r],enumerable:!(a=y(t,r))||a.enumerable});return e})(!t&&e&&e.__esModule?n:f(n,"default",{value:e,enumerable:!0}),e)))(L(),1),Z=e=>{const t=e,{className:n}=t,r=I(t,["className"]);return a.createElement("svg",P(x({className:z("notion-icon",n)},r),{viewBox:"0 0 30 30"}),a.createElement("path",{d:"M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z"}))},A=e=>{const t=e,{className:n}=t,r=I(t,["className"]);return a.createElement("svg",P(x({className:z("notion-icon",n)},r),{viewBox:"0 0 24 24"}),a.createElement("defs",null,a.createElement("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1"},a.createElement("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),a.createElement("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"}))),a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none"},a.createElement("g",{transform:"translate(-236.000000, -286.000000)"},a.createElement("g",{transform:"translate(238.000000, 286.000000)"},a.createElement("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),a.createElement("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),a.createElement("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})))))},G=class extends a.Component{constructor(e){super(e),this.state={isLoading:!1,query:"",searchResult:null,searchError:null},this._onAfterOpen=()=>{this._inputRef.current&&this._inputRef.current.focus()},this._onChangeQuery=e=>{const t=e.target.value;this.setState({query:t}),t.trim()?this._search():this.setState({isLoading:!1,searchResult:null,searchError:null})},this._onClearQuery=()=>{this._onChangeQuery({target:{value:""}})},this._warmupSearch=()=>O(this,null,(function*(){const{searchNotion:e,rootBlockId:t}=this.props;yield e({query:"",ancestorId:t})})),this._searchImpl=()=>O(this,null,(function*(){const{searchNotion:e,rootBlockId:t}=this.props,{query:n}=this.state;if(!n.trim())return void this.setState({isLoading:!1,searchResult:null,searchError:null});this.setState({isLoading:!0});const a=yield e({query:n,ancestorId:t});console.log("search",n,a);let r=null,l=null;if(a.error||a.errorId)l=a;else{r=x({},a);const e=r.results.map((e=>{var t,n;const a=null==(t=r.recordMap.block[e.id])?void 0:t.value;if(!a)return;const l=(0,s.Ho)(a,r.recordMap);return l&&(e.title=l,e.block=a,e.recordMap=r.recordMap,e.page=(0,s.cj)(a,r.recordMap,{inclusive:!0})||a,e.page.id)?((null==(n=e.highlight)?void 0:n.text)&&(e.highlight.html=e.highlight.text.replace(/<gzkNfoUU>/gi,"<b>").replace(/<\/gzkNfoUU>/gi,"</b>")),e):void 0})).filter(Boolean).reduce(((e,t)=>P(x({},e),{[t.page.id]:t})),{});r.results=Object.values(e)}this.state.query===n&&this.setState({isLoading:!1,searchResult:r,searchError:l})})),this._inputRef=a.createRef()}componentDidMount(){this._search=(0,D.default)(this._searchImpl.bind(this),1e3),this._warmupSearch()}render(){const{isOpen:e,onClose:t}=this.props,{isLoading:n,query:r,searchResult:l,searchError:o}=this.state,i=!!r.trim();return a.createElement(ue,null,(c=>{const{components:s,defaultPageIcon:m,mapPageUrl:u}=c;return a.createElement(s.Modal,{isOpen:e,contentLabel:"Search",className:"notion-search",overlayClassName:"notion-search-overlay",onRequestClose:t,onAfterOpen:this._onAfterOpen},a.createElement("div",{className:"quickFindMenu"},a.createElement("div",{className:"searchBar"},a.createElement("div",{className:"inlineIcon"},n?a.createElement(A,{className:"loadingIcon"}):a.createElement(W,null)),a.createElement("input",{className:"searchInput",placeholder:"Search",value:r,ref:this._inputRef,onChange:this._onChangeQuery}),r&&a.createElement("div",{role:"button",className:"clearButton",onClick:this._onClearQuery},a.createElement(Z,{className:"clearIcon"}))),i&&l&&a.createElement(a.Fragment,null,l.results.length?a.createElement(me,P(x({},c),{recordMap:l.recordMap}),a.createElement("div",{className:"resultsPane"},l.results.map((e=>{var t;return a.createElement(s.PageLink,{key:e.id,className:z("result","notion-page-link"),href:u(e.page.id,l.recordMap)},a.createElement(V,{block:e.page,defaultIcon:m}),(null==(t=e.highlight)?void 0:t.html)&&a.createElement("div",{className:"notion-search-result-highlight",dangerouslySetInnerHTML:{__html:e.highlight.html}}))}))),a.createElement("footer",{className:"resultsFooter"},a.createElement("div",null,a.createElement("span",{className:"resultsCount"},l.total),1===l.total?" result":" results"))):a.createElement("div",{className:"noResultsPane"},a.createElement("div",{className:"noResults"},"No results"),a.createElement("div",{className:"noResultsDetail"},"Try different search terms"))),i&&!l&&o&&a.createElement("div",{className:"noResultsPane"},a.createElement("div",{className:"noResults"},"Search error"))))}))}},Q=({block:e,rootOnly:t=!1})=>{const{recordMap:n,mapPageUrl:r,components:l}=pe(),o=a.useMemo((()=>{const a=(0,s.Kl)(n,e.id);return t?[a[0]].filter(Boolean):a}),[n,e.id,t]);return a.createElement("div",{className:"breadcrumbs",key:"breadcrumbs"},o.map(((e,t)=>{if(!e)return null;const n={},i={pageLink:l.PageLink};return e.active?i.pageLink=e=>a.createElement("div",x({},e)):n.href=r(e.pageId),a.createElement(a.Fragment,{key:e.pageId},a.createElement(i.pageLink,x({className:z("breadcrumb",e.active&&"active")},n),e.icon&&a.createElement(F,{className:"icon",block:e.block}),e.title&&a.createElement("span",{className:"title"},e.title)),t<o.length-1&&a.createElement("span",{className:"spacer"},"/"))})))},X=({block:e,search:t,title:n="Search"})=>{const{searchNotion:r,rootPageId:l,isShowingSearch:o,onHideSearch:i}=pe(),c=t||r,[s,m]=a.useState(o);a.useEffect((()=>{m(o)}),[o]);const u=a.useCallback((()=>{m(!0)}),[]),p=a.useCallback((()=>{m(!1),i&&i()}),[i]);(0,d.y1)("cmd+p",(e=>{u(),e.preventDefault(),e.stopPropagation()})),(0,d.y1)("cmd+k",(e=>{u(),e.preventDefault(),e.stopPropagation()}));const h=!!c;return a.createElement(a.Fragment,null,h&&a.createElement("div",{role:"button",className:z("breadcrumb","button","notion-search-button"),onClick:u},a.createElement(W,{className:"searchIcon"}),n&&a.createElement("span",{className:"title"},n)),s&&h&&a.createElement(G,{isOpen:s,rootBlockId:l||(null==e?void 0:e.id),onClose:p,searchNotion:c}))},J=({id:e,defaultPlay:t=!1,mute:n=!1,lazyImage:r=!1,iframeTitle:l="YouTube video",alt:o="Video preview",params:i={},adLinksPreconnect:c=!0,style:s,className:m})=>{const u=n||t?"1":"0",p=`https://i.ytimg.com/vi/${e}/hqdefault.jpg`,d="https://www.youtube-nocookie.com",h=`${d}/embed/${e}?${a.useMemo((()=>(e=>Object.keys(e).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&"))(x({autoplay:"1",mute:u},i))),[u,i])}`,[g,f]=a.useState(!1),[v,y]=a.useState(t),[b,E]=a.useState(!1),k=a.useCallback((()=>{g||f(!0)}),[g]),w=a.useCallback((()=>{v||y(!0)}),[v]),C=a.useCallback((()=>{E(!0)}),[]);return a.createElement(a.Fragment,null,a.createElement("link",{rel:"preload",href:p,as:"image"}),g&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:d}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"})),g&&c&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})),a.createElement("div",{onClick:w,onPointerOver:k,className:z("notion-yt-lite",b&&"notion-yt-loaded",v&&"notion-yt-initialized",m),style:s},a.createElement("img",{src:p,className:"notion-yt-thumbnail",loading:r?"lazy":void 0,alt:o}),a.createElement("div",{className:"notion-yt-playbtn"}),v&&a.createElement("iframe",{width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:l,src:h,onLoad:C})))},K="undefined"===typeof window,Y=["video","image","embed","figma","typeform","excalidraw","maps","tweet","pdf","gist","codepen","drive"],ee=({block:e,zoomable:t=!0,children:n})=>{var r,l,o,i,c,m,u;const{recordMap:p,mapImageUrl:d,components:h}=pe();if(!e||!Y.includes(e.type))return null;const g={position:"relative",display:"flex",justifyContent:"center",alignSelf:"center",width:"100%",maxWidth:"100%",flexDirection:"column"},f={};if(e.format){const{block_aspect_ratio:t,block_height:n,block_width:a,block_full_width:l,block_page_width:o,block_preserve_scale:i}=e.format;if(l||o)g.width=l?"100vw":"100%","video"===e.type?n?g.height=n:t?g.paddingBottom=100*t+"%":i&&(g.objectFit="contain"):t&&"image"!==e.type?g.paddingBottom=100*t+"%":n?g.height=n:i&&("image"===e.type?g.height="100%":(g.paddingBottom="75%",g.minHeight=100));else{switch(null==(r=e.format)?void 0:r.block_alignment){case"center":g.alignSelf="center";break;case"left":g.alignSelf="start";break;case"right":g.alignSelf="end"}a&&(g.width=a),i&&"image"!==e.type?(g.paddingBottom="50%",g.minHeight=100):n&&"image"!==e.type&&(g.height=n)}"image"===e.type?f.objectFit="cover":i&&(f.objectFit="contain")}const v=(null==(l=p.signed_urls)?void 0:l[e.id])||(null==(c=null==(i=null==(o=e.properties)?void 0:o.source)?void 0:i[0])?void 0:c[0]);let y=null;if(!v)return null;if("tweet"===e.type){if(!v)return null;const e=v.split("?")[0].split("/").pop();if(!e)return null;y=a.createElement("div",{style:P(x({},f),{maxWidth:420,width:"100%",marginLeft:"auto",marginRight:"auto"})},a.createElement(h.Tweet,{id:e}))}else if("pdf"===e.type)g.overflow="auto",g.background="rgb(226, 226, 226)",g.padding||(g.padding="8px 16px"),K||(y=a.createElement(h.Pdf,{file:v}));else if("embed"===e.type||"video"===e.type||"figma"===e.type||"typeform"===e.type||"gist"===e.type||"maps"===e.type||"excalidraw"===e.type||"codepen"===e.type||"drive"===e.type)if("video"===e.type&&v&&v.indexOf("youtube")<0&&v.indexOf("youtu.be")<0&&v.indexOf("vimeo")<0&&v.indexOf("wistia")<0&&v.indexOf("loom")<0&&v.indexOf("videoask")<0&&v.indexOf("getcloudapp")<0)g.paddingBottom=void 0,y=a.createElement("video",{playsInline:!0,controls:!0,preload:"metadata",style:f,src:v,title:e.type});else{let t=(null==(m=e.format)?void 0:m.display_source)||v;if(t){const n="video"===e.type?(e=>{try{const{hostname:t}=new URL(e);if(!U.has(t))return null;const n=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i,a=e.match(n);if(a&&11==a[2].length)return a[2]}catch(t){}return null})(t):null;n?y=a.createElement(J,{id:n,style:f,className:"notion-asset-object-fit"}):"gist"===e.type?(t.endsWith(".pibb")||(t=`${t}.pibb`),f.width="100%",g.paddingBottom="50%",y=a.createElement("iframe",{style:f,className:"notion-asset-object-fit",src:t,title:"GitHub Gist",frameBorder:"0",loading:"lazy",scrolling:"auto"})):y=a.createElement("iframe",{className:"notion-asset-object-fit",style:f,src:t,title:`iframe ${e.type}`,frameBorder:"0",allowFullScreen:!0,loading:"lazy",scrolling:"auto"})}}else if("image"===e.type){const n=d(v,e),r=(0,s.FB)(null==(u=e.properties)?void 0:u.caption)||"notion image";y=a.createElement(T,{src:n,alt:r,zoomable:t,height:g.height,style:f})}return a.createElement(a.Fragment,null,a.createElement("div",{style:g},y,"image"===e.type&&n),"image"!==e.type&&n)},te={width:"100%"},ne=({blockId:e,block:t})=>{var n,r,l,o,i,c;const m=t,{components:u,mapPageUrl:p,rootDomain:d,zoom:h}=pe();let g=!1;if("image"===t.type){const e=null==(l=null==(r=null==(n=null==m?void 0:m.properties)?void 0:n.caption)?void 0:r[0])?void 0:l[0];if(e){const t=(0,s.q5)(e,{uuid:!0});("/"===e.charAt(0)&&t||(f=e,new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(f)))&&(g=!0)}}var f;const v=a.createElement("figure",{className:z("notion-asset-wrapper",`notion-asset-wrapper-${t.type}`,(null==(o=m.format)?void 0:o.block_full_width)&&"notion-asset-wrapper-full",e)},a.createElement(ee,{block:m,zoomable:h&&!g},(null==(i=null==m?void 0:m.properties)?void 0:i.caption)&&!g&&a.createElement("figcaption",{className:"notion-asset-caption"},a.createElement(q,{value:m.properties.caption,block:t}))));if(g){const e=null==(c=null==m?void 0:m.properties)?void 0:c.caption[0][0],t=(0,s.q5)(e,{uuid:!0}),n="/"===e.charAt(0)&&t,r=function(e){try{return new URL(e).hostname}catch(t){return""}}(e);return a.createElement(u.PageLink,{style:te,href:n?p(t):e,target:r&&r!==d&&!e.startsWith("/")?"blank_":null},v)}return v};var ae=function(e){return a.createElement("svg",x({viewBox:"0 0 14 14"},e),a.createElement("path",{d:"M5.5 12L14 3.5 12.5 2l-7 7-4-4.003L0 6.499z"}))},re=({block:e})=>a.createElement("header",{className:"notion-header"},a.createElement("div",{className:"notion-nav-header"},a.createElement(Q,{block:e}),a.createElement(X,{block:e}))),le=e=>()=>(console.warn(`Warning: using empty component "${e}" (you should override this in NotionRenderer.components)`),null),oe=(e,t)=>t(),ie={Image:null,Link:a.memo((e=>a.createElement("a",x({target:"_blank",rel:"noopener noreferrer"},e)))),PageLink:a.memo((e=>a.createElement("a",x({},e)))),Checkbox:({isChecked:e})=>{let t=null;return t=e?a.createElement("div",{className:"notion-property-checkbox-checked"},a.createElement(ae,null)):a.createElement("div",{className:"notion-property-checkbox-unchecked"}),a.createElement("span",{className:"notion-property notion-property-checkbox"},t)},Callout:void 0,Code:le("Code"),Equation:le("Equation"),Collection:le("Collection"),Property:void 0,propertyTextValue:oe,propertySelectValue:oe,propertyRelationValue:oe,propertyFormulaValue:oe,propertyTitleValue:oe,propertyPersonValue:oe,propertyFileValue:oe,propertyCheckboxValue:oe,propertyUrlValue:oe,propertyEmailValue:oe,propertyPhoneNumberValue:oe,propertyNumberValue:oe,propertyLastEditedTimeValue:oe,propertyCreatedTimeValue:oe,propertyDateValue:oe,Pdf:le("Pdf"),Tweet:le("Tweet"),Modal:le("Modal"),Header:re,Embed:e=>a.createElement(ne,x({},e))},ce={recordMap:{block:{},collection:{},collection_view:{},collection_query:{},notion_user:{},signed_urls:{}},components:ie,mapPageUrl:j(),mapImageUrl:M,searchNotion:null,isShowingSearch:!1,onHideSearch:null,fullPage:!1,darkMode:!1,previewImages:!1,forceCustomImages:!1,showCollectionViewDropdown:!0,linkTableTitleProperties:!0,isLinkCollectionToUrlProperty:!1,showTableOfContents:!1,minTableOfContentsItems:3,defaultPageIcon:null,defaultPageCover:null,defaultPageCoverPosition:.5,zoom:null},se=a.createContext(ce),me=e=>{var t=e,{components:n={},children:r,mapPageUrl:l,mapImageUrl:o,rootPageId:i}=t,c=I(t,["components","children","mapPageUrl","mapImageUrl","rootPageId"]);for(const a of Object.keys(c))void 0===c[a]&&delete c[a];const s=a.useMemo((()=>x({},n)),[n]);var m,u;s.nextImage&&(s.Image=(m=n.nextImage,a.memo((function(e){var t=e,{src:n,alt:r,width:l,height:o,className:i,style:c,layout:s}=t,u=I(t,["src","alt","width","height","className","style","layout"]);return s||(s=l&&o?"intrinsic":"fill"),a.createElement(m,x({className:i,src:n,alt:r,width:"intrinsic"===s&&l,height:"intrinsic"===s&&o,objectFit:null==c?void 0:c.objectFit,objectPosition:null==c?void 0:c.objectPosition,layout:s},u))}),h))),s.nextLink&&(s.nextLink=(u=n.nextLink,function(e){var t=e,{href:n,as:r,passHref:l,prefetch:o,replace:i,scroll:c,shallow:s,locale:m}=t,p=I(t,["href","as","passHref","prefetch","replace","scroll","shallow","locale"]);return a.createElement(u,{href:n,as:r,passHref:l,prefetch:o,replace:i,scroll:c,shallow:s,locale:m},a.createElement("a",x({},p)))}));for(const a of Object.keys(s))s[a]||delete s[a];const p=a.useMemo((()=>P(x(x({},ce),c),{rootPageId:i,mapPageUrl:null!=l?l:j(i),mapImageUrl:null!=o?o:M,components:x(x({},ie),s)})),[o,l,s,i,c]);return a.createElement(se.Provider,{value:p},r)},ue=se.Consumer,pe=()=>a.useContext(se),de={throwOnError:!1,strict:!1},he=e=>{var t=e,{block:n,math:r,inline:l=!1,className:o}=t,i=I(t,["block","math","inline","className"]);const{recordMap:m}=pe();return(r=r||(0,s.Ho)(n,m))?a.createElement("span",{role:"button",tabIndex:0,className:z("notion-equation",l?"notion-equation-inline":"notion-equation-block",o)},a.createElement(c,x({math:r,settings:de},i))):null}}}]);