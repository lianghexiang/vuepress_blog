import{h as p,j as v,k as c,s as n,l as g,v as m,m as y,n as a,C as f,g as w}from"./app-281931e0.js";const R=e=>JSON.parse(decodeURIComponent(e));var V=p({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=v(),o=c(!0),t=n(),l=n(),s=g(()=>m({},u,R(e.settings))),i=async()=>{const{ReplStore:r,Repl:d}=await w(()=>import("./vue-repl-84db810d.js"),["assets/vue-repl-84db810d.js","assets/app-281931e0.js"]);t.value=d,l.value=new r({serializedState:decodeURIComponent(e.files)}),s.value.vueVersion&&await l.value.setVueVersion(s.value.vueVersion)};return y(async()=>{await i(),o.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[o.value?a(f,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...s.value,layout:"horizontal"}):null])])]}});export{V as default};
