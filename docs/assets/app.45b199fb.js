import{O as E,Z as R,x as j,M as P,h as m,g as w,Y as O,U as D,d as v,$ as I,o as _,c as S,k as z,F,D as K,l as u,r as A,t as L,e as N,_ as B,s as h,a0 as U,a1 as J,a2 as M,a3 as G,a4 as H,a5 as W,a6 as Y,a7 as Z,a8 as q,a9 as Q,aa as X,u as ee,j as te,y as ae,ab as ne,ac as se,ad as oe,ae as re}from"./chunks/framework.b3c573de.js";import{t as le}from"./chunks/theme.cdc3a45d.js";const ie=e=>{if(typeof document>"u")return{stabilizeScrollPosition:s=>async(...l)=>s(...l)};const t=document.documentElement;return{stabilizeScrollPosition:n=>async(...s)=>{const l=n(...s),o=e.value;if(!o)return l;const i=o.offsetTop-t.scrollTop;return await E(),t.scrollTop=o.offsetTop-i,l}}},$="vitepress:tabSharedState",f=typeof localStorage<"u"?localStorage:null,k="vitepress:tabsSharedState",ce=()=>{const e=f==null?void 0:f.getItem(k);if(e)try{return JSON.parse(e)}catch{}return{}},ue=e=>{f&&f.setItem(k,JSON.stringify(e))},pe=e=>{const t=R(ce());j(t,a=>{ue(a)}),e.provide($,t)},de=(e,t)=>{const a=P($);if(!a)throw new Error("[vitepress-plugin-tabs] TabsSharedState should be injected");const n=m(),s=w({get(){const o=t.value,i=e.value;if(o){const c=a[o];if(c&&i.includes(c))return c}else{const c=n.value;if(c)return c}return i[0]},set(o){const i=t.value;i?a[i]=o:n.value=o}});return{selected:s,select:o=>{s.value=o}}};let T=0;const fe=()=>(T++,""+T);function be(){const e=O();return w(()=>{var n;const a=(n=e.default)==null?void 0:n.call(e);return a?a.filter(s=>typeof s.type=="object"&&"__name"in s.type&&s.type.__name==="PluginTabsTab"&&s.props).map(s=>{var l;return(l=s.props)==null?void 0:l.label}):[]})}const V="vitepress:tabSingleState",_e=e=>{D(V,e)},Se=()=>{const e=P(V);if(!e)throw new Error("[vitepress-plugin-tabs] TabsSingleState should be injected");return e},ge={class:"plugin-tabs"},me=["id","aria-selected","aria-controls","tabindex","onClick"],he=v({__name:"PluginTabs",props:{sharedStateKey:{}},setup(e){const t=e,a=be(),{selected:n,select:s}=de(a,I(t,"sharedStateKey")),l=m(),{stabilizeScrollPosition:o}=ie(l),i=o(s),c=m([]),C=b=>{var y;const d=a.value.indexOf(n.value);let r;b.key==="ArrowLeft"?r=d>=1?d-1:a.value.length-1:b.key==="ArrowRight"&&(r=d<a.value.length-1?d+1:0),r!==void 0&&(i(a.value[r]),(y=c.value[r])==null||y.focus())},g=fe();return _e({uid:g,selected:n}),(b,d)=>(_(),S("div",ge,[z("div",{ref_key:"tablist",ref:l,class:"plugin-tabs--tab-list",role:"tablist",onKeydown:C},[(_(!0),S(F,null,K(u(a),r=>(_(),S("button",{id:`tab-${r}-${u(g)}`,ref_for:!0,ref_key:"buttonRefs",ref:c,key:r,role:"tab",class:"plugin-tabs--tab","aria-selected":r===u(n),"aria-controls":`panel-${r}-${u(g)}`,tabindex:r===u(n)?0:-1,onClick:()=>u(i)(r)},L(r),9,me))),128))],544),A(b.$slots,"default")]))}});const ve=["id","aria-labelledby"],ye=v({__name:"PluginTabsTab",props:{label:{}},setup(e){const{uid:t,selected:a}=Se();return(n,s)=>u(a)===n.label?(_(),S("div",{key:0,id:`panel-${n.label}-${u(t)}`,class:"plugin-tabs--content",role:"tabpanel",tabindex:"0","aria-labelledby":`tab-${n.label}-${u(t)}`},[A(n.$slots,"default",{},void 0,!0)],8,ve)):N("",!0)}});const Te=B(ye,[["__scopeId","data-v-e831521a"]]),Pe=e=>{pe(e),e.component("PluginTabs",he),e.component("PluginTabsTab",Te)};const we={...le,enhanceApp({app:e}){Pe(e)}};function x(e){if(e.extends){const t=x(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const p=x(we),Ae=v({name:"VitePressApp",setup(){const{site:e}=ee();return te(()=>{ae(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ne(),se(),oe(),p.setup&&p.setup(),()=>re(p.Layout)}});async function $e(){const e=Ve(),t=ke();t.provide(J,e);const a=M(e.route);return t.provide(G,a),t.component("Content",H),t.component("ClientOnly",W),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:Y}),{app:t,router:e,data:a}}function ke(){return Z(Ae)}function Ve(){let e=h,t;return q(a=>{let n=Q(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),h&&(e=!1),X(()=>import(n),[])):null},p.NotFound)}h&&$e().then(({app:e,router:t,data:a})=>{t.go().then(()=>{U(t.route,a.site),e.mount("#app")})});export{$e as createApp};
