"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="Import a Ledger account",l={unversionedId:"wallets/keplr/import-ledger-account",id:"wallets/keplr/import-ledger-account",title:"Import a Ledger account",description:"If you are setting up Keplr for the first time: In the initial pop-up window, choose Import Existing Account",source:"@site/docs/overview/wallets/keplr/import-ledger-account.md",sourceDirName:"wallets/keplr",slug:"/wallets/keplr/import-ledger-account",permalink:"/overview/wallets/keplr/import-ledger-account",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/wallets/keplr/import-ledger-account.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import a Keplr account",permalink:"/overview/wallets/keplr/import-account"},next:{title:"Install Keplr",permalink:"/overview/wallets/keplr/install-keplr"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-a-ledger-account"},"Import a Ledger account"),(0,o.kt)("p",null,"If you are setting up Keplr for the first time: In the initial pop-up window, choose ",(0,o.kt)("strong",{parentName:"p"},"Import Existing Account")),(0,o.kt)("p",null,"If you have used Keplr before: In the extension, click on the silhouette in the upper-right-hand corner, then the blue box ",(0,o.kt)("strong",{parentName:"p"},"Add Account")," & select ",(0,o.kt)("strong",{parentName:"p"},"Import Existing Account")),(0,o.kt)("p",null,"Enter your mnemonic/seed phrase in the appropriate slot, separating the words by space & taking care to check that they are spelled correctly."),(0,o.kt)("p",null,"Make sure you have imported the account with the correct derivation path, viewable by clicking on ",(0,o.kt)("strong",{parentName:"p"},"Advanced"),"."),(0,o.kt)("p",null,"Normally, the derivation path should be m/44'/\u2026\u2019/0/0/0, but if you see that the Cosmos mainnet address displayed is different from yours when importing the account via mnemonic on Keplr it is possible that the derivation path ends with 1 (or another number) instead of 0. If this is the case, all you have to do is start the process over and replace the last 0 with 1. If you are interested in knowing more about the HD wallet derivation path, you can find more in the Keplr FAQ, section ",(0,o.kt)("strong",{parentName:"p"},"General Questions"),"."),(0,o.kt)("p",null,"If you have just downloaded Keplr extension, it\u2019s time to set your password! Choose carefully, if possible select a password you\u2019re not using in any other application, and then click ",(0,o.kt)("strong",{parentName:"p"},"Confirm"),".\nIf you have used Keplr before, this step will be skipped as you have already set your password when creating/importing your first account."),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"Done"),"."))}u.isMDXComponent=!0}}]);