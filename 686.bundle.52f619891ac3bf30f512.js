"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[686],{39686:(e,o,t)=>{t.r(o),t.d(o,{default:()=>n});var r=t(43001),s=t(3827),l=t.n(s);function a({displaySets:e}){if(e&&e.length>1)throw new Error("OHIFCornerstoneVideoViewport: only one display set is supported for dicom video right now");const{videoUrl:o}=e[0],t="video/mp4",[s,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{l(await o)})()}),[o]),r.createElement("div",{className:"bg-primary-black h-full w-full"},r.createElement("video",{src:s,controls:!0,controlsList:"nodownload",preload:"auto",className:"h-full w-full",crossOrigin:"anonymous"},r.createElement("source",{src:s,type:t}),r.createElement("source",{src:s,type:t}),"Video src/type not supported:"," ",r.createElement("a",{href:s},s," of type ",t)))}a.propTypes={displaySets:l().arrayOf(l().object).isRequired};const n=a}}]);
//# sourceMappingURL=686.bundle.52f619891ac3bf30f512.js.map