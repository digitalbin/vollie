if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>i(e,r),l={module:{uri:r},exports:o,require:t};s[r]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.13579dfb.css",revision:null},{url:"assets/index.61c90394.js",revision:null},{url:"assets/index.91e0c7f4.js",revision:null},{url:"assets/index.e28119e8.css",revision:null},{url:"assets/vendor.4ebc75e4.js",revision:null},{url:"index.html",revision:"1c0b6cf3585820acf12472900ec76699"},{url:"favicon.ico",revision:"68a319f6b17f4c7686cf160451e97dc7"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"a5c3819d439205c24ec66852c7bfd0ed"},{url:"pwa-192x192.png",revision:"e4cbcc3413fab8a8bfe8b8af064128a5"},{url:"pwa-512x512.png",revision:"1b9a4fa7f42458cc44c8c16703f598f4"},{url:"manifest.webmanifest",revision:"ac5c90b894b472aad4dd296af5844c60"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
