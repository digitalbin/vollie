if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),t={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.930d0314.css",revision:null},{url:"assets/index.ae330d49.js",revision:null},{url:"assets/index.b4e0b9e4.css",revision:null},{url:"assets/index.f716a352.js",revision:null},{url:"assets/vendor.7d0a46c0.js",revision:null},{url:"index.html",revision:"592a9c027ecf73178c44760a5c5ba4ac"},{url:"favicon.ico",revision:"68a319f6b17f4c7686cf160451e97dc7"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"a5c3819d439205c24ec66852c7bfd0ed"},{url:"pwa-192x192.png",revision:"e4cbcc3413fab8a8bfe8b8af064128a5"},{url:"pwa-512x512.png",revision:"1b9a4fa7f42458cc44c8c16703f598f4"},{url:"manifest.webmanifest",revision:"ac5c90b894b472aad4dd296af5844c60"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
