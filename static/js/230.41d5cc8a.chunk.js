"use strict";(self.webpackChunkmaterialpro_main=self.webpackChunkmaterialpro_main||[]).push([[230],{977:(e,t,n)=>{n.d(t,{F:()=>a,Z:()=>s});n(2791);var i=n(5218),r=n(184);const a=()=>(0,r.jsx)(i.x7,{toastOptions:{className:"",style:{}}}),s=(e,t)=>{((e,t)=>{"success"===e?i.ZP.success(t):"create"===e?(0,i.ZP)(t,{icon:"\ud83e\udd17"}):"start"===e?(0,i.ZP)("Lets get started, cheer up!",{icon:"\ud83d\udcaa"}):"done"===e?(0,i.ZP)("Horeee, task done!",{icon:"\ud83d\udc4f"}):i.ZP.error(t)})(e,t)}},2230:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var i=n(690),r=n.n(i),a=n(2791),s=n(7689),o=n(1087),l=n(3464),c=n(9037),d=n(3009),u=n(9773),m=n(4448),p=n(9399),f=n(6167),h=n(2976),b=n(8118),j=n(9127),y=n(4828),x=n(8404),g=n(4323),v=n(977),k=n(7493),_=n(184);const Z=[{id:0,title:"Surat Penyampaian Penawaran",name:"dok_surat_penyampaian_penawaran",template:!0},{id:1,title:"Formulir Isian Kualifikasi",name:"dok_formulir_isian_kualifikasi",template:!0},{id:2,title:"Fakta Integritas",name:"dok_fakta_integritas",template:!0},{id:3,title:"HSE Plan",name:"dok_hse_plan"},{id:4,title:"Jaminan Penawaran",name:"dok_jaminan_penawaran"},{id:5,title:"Kelengkapan Izin Usaha",name:"dok_kelengkapan_izin_usaha"},{id:6,title:"List Peralatan",name:"dok_list_peralatan"},{id:7,title:"List Man Power + CV",name:"dok_listmanpower_plus_cv"},{id:8,title:"Metode Pelaksanaan (Jasa)",name:"dok_metode_pelaksanaan"},{id:9,title:"Surat Penawaran Komersial",name:"dok_penawaran_komersial"},{id:10,title:"Perhitungan TKDN",name:"dok_perhitungan_tkdn"},{id:11,title:"QA/QC Plan",name:"dok_qaqc_plan"},{id:12,title:"Schedule Pekerjaan",name:"dok_schedule_pekerjaan"},{id:13,title:"Struktur Organisasi Pekerjaan",name:"dok_struktur_organisasi_pekerjaan"},{id:14,title:"*Dokumen Wajib Lainnya",name:"dok_wajib_lainnya"}],O=()=>{const{slug:e}=(0,s.UO)(),[t,n]=(0,a.useState)(),[i,O]=(0,a.useState)({}),[w,S]=(0,a.useState)([]),[N,P]=(0,a.useState)(),[R,z]=(0,a.useState)(),[C,E]=(0,a.useState)(),[D,U]=(0,a.useState)(!1),[M,F]=(0,a.useState)(!1),[T,q]=(0,a.useState)(!1),[I,J]=(0,a.useState)(!1),K=(0,g.Z)(),{data:L,refetch:A}=(0,x.a)({queryKey:["tender-detail"],queryFn:()=>K.get("vapi/tender/peserta/".concat(e)).then((e=>e.data.data))});(0,a.useEffect)((()=>{O((null===L||void 0===L?void 0:L.centang_dok_wajib)&&JSON.parse(null===L||void 0===L?void 0:L.centang_dok_wajib)),n(null===L||void 0===L?void 0:L.id_tender)}),[L]),(0,a.useEffect)((()=>{S(i&&Object.keys(i))}),[i]),(0,a.useEffect)((()=>{const e=null===w||void 0===w?void 0:w.filter((e=>null!==L[e])),t=null===w||void 0===w?void 0:w.filter((e=>!0===i[e]));q(JSON.stringify(e)===JSON.stringify(t))}),[w,i]);const B=(e,t,n)=>{P(t),z(n),(0,k.Z)(e.target.files[0]).then((t=>E({key:e.target.id,file:t.split(",")[1]}))).catch((()=>E()))},H=async e=>{e.preventDefault(),U(!0),void 0!==C?(C.tender_id=t,await K.post("vapi/tender/upload/dokumen",C).then((()=>{A(),(0,v.Z)("success","Dokumen ".concat(R," berhasil diupload."))})).catch((()=>{(0,v.Z)("error","Something went wrong.")}))):(0,v.Z)("error","Tidak ada file yang dipilih."),E(),P(),U(!1)};return(0,_.jsx)(l.Z,{className:"rounded-4",children:(0,_.jsxs)(c.Z,{children:[(0,_.jsxs)(d.Z,{children:[(0,_.jsx)(u.Z,{md:"8",children:(0,_.jsx)(m.Z,{tag:"h4",children:null===L||void 0===L?void 0:L.nama_tender})}),(0,_.jsx)(u.Z,{md:"4"})]}),(0,_.jsx)("small",{children:null===L||void 0===L?void 0:L.sistem_kualifikasi}),null===Z||void 0===Z?void 0:Z.map((e=>(0,_.jsx)(d.Z,{children:(0,_.jsx)(p.Z,{onSubmit:H,children:null===w||void 0===w?void 0:w.map((t=>!0===i[t]&&e.name===t&&(null===L[t]?(0,_.jsx)(f.Z,{children:(0,_.jsxs)(d.Z,{className:"mt-3",children:[(0,_.jsxs)(u.Z,{md:"10",children:[(0,_.jsx)(h.Z,{htmlFor:t,children:e.title}),(0,_.jsx)(b.Z,{type:"file",id:t,name:t,onChange:t=>B(t,e.id,e.title),accept:"application/pdf"}),(0,_.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,_.jsx)("small",{className:"text-muted",children:"Upload file (max. 10mb)"}),(0,_.jsx)("i",{children:e.template&&(0,_.jsx)(o.rU,{to:"/",className:"text-decoration-none",children:(0,_.jsx)("small",{children:"*Download template"})})})]})]}),(0,_.jsx)(u.Z,{md:"2 d-flex align-items-center pt-2",children:D&&e.id===N?(0,_.jsx)(j.Z,{type:"button",color:"dark",size:"sm",disabled:!0,children:(0,_.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,_.jsx)(y.Z,{size:"sm"}),"Uploading.."]})}):(0,_.jsx)(j.Z,{type:"submit",size:"sm",color:"dark",required:!0,disabled:e.id!==N,children:"Upload"})})]})},t):N===e.id&&M?(0,_.jsx)(f.Z,{children:(0,_.jsxs)(d.Z,{className:"mt-3",children:[(0,_.jsxs)(u.Z,{md:"10",children:[(0,_.jsxs)(h.Z,{htmlFor:t,children:["Edit Dokumen ",e.title]}),(0,_.jsx)(b.Z,{type:"file",id:t,name:t,onChange:t=>B(t,e.id,e.title),accept:"application/pdf"}),(0,_.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,_.jsx)("small",{className:"text-muted",children:"Upload file (max. 10mb)"}),(0,_.jsx)("i",{children:e.template&&(0,_.jsx)(o.rU,{to:"/",className:"text-decoration-none",children:(0,_.jsx)("small",{children:"*Download template"})})})]})]}),(0,_.jsx)(u.Z,{md:"2 d-flex align-items-center pt-2",children:D&&e.id===N?(0,_.jsx)(j.Z,{type:"button",color:"dark",size:"sm",disabled:!0,children:(0,_.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,_.jsx)(y.Z,{size:"sm"}),"Uploading.."]})}):(0,_.jsxs)("div",{className:"d-flex gap-2",children:[(0,_.jsx)(j.Z,{type:"submit",size:"sm",color:"secondary",outline:!0,onClick:()=>{F(!1),P()},children:"Cancel"}),(0,_.jsx)(j.Z,{type:"submit",size:"sm",color:"dark",required:!0,disabled:e.id!==N,children:"Upload"})]})})]})},t):(0,_.jsx)(f.Z,{className:"bg-light rounded-4 px-3 pb-2 pt-1",children:(0,_.jsx)(d.Z,{className:"mt-3",children:(0,_.jsxs)(u.Z,{md:"10",children:[(0,_.jsx)(h.Z,{htmlFor:t,children:e.title}),(0,_.jsxs)("div",{className:"d-flex gap-4",children:[(0,_.jsx)(o.rU,{to:"",children:L[t].split("/")[3]}),"submit_dokumen"!==(null===L||void 0===L?void 0:L.status)&&(0,_.jsx)("abbr",{title:"Edit Dokumen",children:(0,_.jsx)("button",{className:"text-muted",type:"button",style:{border:"none",background:"none"},onClick:()=>{F(!0),P(e.id)},children:(0,_.jsx)(r(),{icon:"edit",style:{fontSize:"20px"}})})})]})]})})},t))))})},e.id))),(0,_.jsx)("hr",{}),(0,_.jsx)(f.Z,{className:"d-flex justify-content-end",children:I?(0,_.jsx)(j.Z,{type:"button",color:"primary",size:"sm",children:(0,_.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,_.jsx)(y.Z,{size:"sm"}),"Mengirim.."]})}):"submit_dokumen"===(null===L||void 0===L?void 0:L.status)?(0,_.jsxs)(j.Z,{type:"button",color:"success",className:"me-2 d-flex gap-2 align-items-center",size:"sm",disabled:!0,children:[(0,_.jsx)(r(),{icon:"check"}),"Submitted"]}):(0,_.jsxs)(j.Z,{type:"button",color:"primary",className:"me-2 d-flex gap-2 align-items-center",size:"sm",disabled:!T,onClick:async()=>{J(!0),await K.get("vapi/tender/submit-dokumen/".concat(null===L||void 0===L?void 0:L.id_peserta)).then((()=>{A(),(0,v.Z)("success","Dokumen tender berhasil dikirim.")})).catch((()=>{(0,v.Z)("error","Something went wrong.")})),J(!1)},children:[(0,_.jsx)(r(),{icon:"send"}),"Submit Dokumen"]})})]})})}},7493:(e,t,n)=>{n.d(t,{Z:()=>i});const i=e=>new Promise((t=>{let n="";const i=new FileReader;i.readAsDataURL(e),i.onload=()=>{n=i.result,t(n)}}))},4448:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(2791),r=n(2007),a=n.n(r),s=n(1418),o=n.n(s),l=n(9622),c=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={className:a().string,cssModule:a().object,tag:l.iC};function p(e){var t=e.className,n=e.cssModule,r=e.tag,a=void 0===r?"div":r,s=u(e,c),m=(0,l.mx)(o()(t,"card-title"),n);return i.createElement(a,d({},s,{className:m}))}p.propTypes=m;const f=p},9399:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(2791),r=n(2007),a=n.n(r),s=n(9622);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var l=["className","cssModule","tag","innerRef"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b={children:a().node,tag:s.iC,innerRef:a().oneOfType([a().object,a().func,a().string]),className:a().string,cssModule:a().object},j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(o,e);var t,n,r,a=p(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).getRef=t.getRef.bind(f(t)),t.submit=t.submit.bind(f(t)),t}return t=o,(n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,r=e.tag,a=void 0===r?"form":r,o=e.innerRef,u=d(e,l),m=(0,s.mx)(t,n);return i.createElement(a,c({},u,{ref:o,className:m}))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(i.Component);j.propTypes=b;const y=j}}]);
//# sourceMappingURL=230.41d5cc8a.chunk.js.map