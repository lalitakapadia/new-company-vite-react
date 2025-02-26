import{r as o,j as r,m as c,L as h}from"./index-DM6zpdKX.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...e)=>e.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:n="",children:a,iconNode:d,...m},p)=>o.createElement("svg",{ref:p,...y,width:t,height:t,stroke:e,strokeWidth:s?Number(i)*24/Number(t):i,className:l("lucide",n),...m},[...d.map(([u,g])=>o.createElement(u,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(e,t)=>{const i=o.forwardRef(({className:s,...n},a)=>o.createElement(v,{ref:a,iconNode:t,className:l(`lucide-${x(e)}`,s),...n}));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],b=k("CircleCheckBig",f),w=[{title:"Independent Quality Assurance",bookmark:"./services#IndependentQualityAssurance",description:"Ensure products meet international standards with rigorous third-party assessments."},{title:"Shipment Integrity Verification",bookmark:"./services#ShipmentIntegrityVerification",description:"Pre-shipment checks to guarantee quality, compliance, and defect-free deliveries."},{title:"Secure Cargo Supervision",bookmark:"./services#SecureCargoSupervision",description:"Monitor container loading to prevent damage, misplacement, or security risks."},{title:"Supplier Compliance Assistance",bookmark:"./services#SupplierComplianceAssistance",description:"Help suppliers align with industry and regulatory requirements for approval."},{title:"Vendor Risk & Quality Assessment",bookmark:"./services#VendorRiskQualityAssessment",description:"Evaluate suppliers' reliability, operational standards, and risk management."},{title:"Strategic Supplier Benchmarking",bookmark:"./services#StrategicSupplierBenchmarking",description:"Assess vendor performance to optimize procurement and sourcing strategies."}];function S(){return r.jsx("div",{className:"inset-2 bottom-0 rounded-3xl mt-4 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[r.jsx(c.h2,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"text-4xl font-extrabold text-center",children:"Our Premium Services"}),r.jsx(c.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},className:"text-center text-gray-300 mt-2",children:"We provide expert inspection and compliance services to safeguard your supply chain."}),r.jsx("div",{className:"mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:w.map((e,t)=>r.jsxs(c.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:t*.2,duration:.5},className:"relative group overflow-hidden rounded-3xl bg-gray-800 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 p-6",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(b,{className:"w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors"}),r.jsx("h3",{className:"text-xl font-semibold",children:r.jsx(h,{to:e.bookmark,children:e.title})})]}),r.jsx("p",{className:"mt-2 text-gray-300",children:e.description}),r.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"})]},t))})]})})}export{S as default};
