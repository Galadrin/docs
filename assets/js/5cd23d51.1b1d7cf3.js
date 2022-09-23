"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8209],{3905:(t,n,l)=>{l.d(n,{Zo:()=>c,kt:()=>s});var e=l(67294);function r(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function o(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function u(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){r(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function i(t,n){if(null==t)return{};var l,e,r=function(t,n){if(null==t)return{};var l,e,r={},o=Object.keys(t);for(e=0;e<o.length;e++)l=o[e],n.indexOf(l)>=0||(r[l]=t[l]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)l=o[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var a=e.createContext({}),C=function(t){var n=e.useContext(a),l=n;return t&&(l="function"==typeof t?t(n):u(u({},n),t)),l},c=function(t){var n=C(t.components);return e.createElement(a.Provider,{value:n},t.children)},B={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},d=e.forwardRef((function(t,n){var l=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=C(l),s=r,k=d["".concat(a,".").concat(s)]||d[s]||B[s]||o;return l?e.createElement(k,u(u({ref:n},c),{},{components:l})):e.createElement(k,u({ref:n},c))}));function s(t,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=l.length,u=new Array(o);u[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var C=2;C<o;C++)u[C]=l[C];return e.createElement.apply(null,u)}return e.createElement.apply(null,l)}d.displayName="MDXCreateElement"},51575:(t,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>B,frontMatter:()=>o,metadata:()=>i,toc:()=>C});var e=l(87462),r=(l(67294),l(3905));const o={title:"Asset Info",sidebar_position:5},u="Asset Info",i={unversionedId:"asset-info",id:"asset-info",title:"Asset Info",description:"The following are all the assets currently supported by the Osmosis frontend along with their corresponding IBC denomination and channel. When assets are transferred through IBC, they lose their original denomination (i.e ATOM) and obtain a new IBC denomination (i.e. ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2)",source:"@site/docs/osmosis-core/asset-info.md",sourceDirName:".",slug:"/asset-info",permalink:"/osmosis-core/asset-info",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-core/asset-info.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Asset Info",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Txfees",permalink:"/osmosis-core/modules/spec-txfees"},next:{title:"Keys Management",permalink:"/osmosis-core/category/keys-management"}},a={},C=[],c={toc:C};function B(t){let{components:n,...l}=t;return(0,r.kt)("wrapper",(0,e.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asset-info"},"Asset Info"),(0,r.kt)("p",null,"The following are all the assets currently supported by the Osmosis frontend along with their corresponding IBC denomination and channel. When assets are transferred through IBC, they lose their original denomination (i.e ATOM) and obtain a new IBC denomination (i.e. ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2)"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("code",null,"Asset")),(0,r.kt)("th",null,(0,r.kt)("code",null,"IBC Denom")),(0,r.kt)("th",null,(0,r.kt)("code",null,"Channel"))))," ",(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Cosmos Hub (ATOM)"),(0,r.kt)("td",null,"ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),(0,r.kt)("td",null,"channel-0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Terra (LUNA)"),(0,r.kt)("td",null,"ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0 "),(0,r.kt)("td",null,"channel-72")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Crypto.org (CRO)"),(0,r.kt)("td",null,"ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1"),(0,r.kt)("td",null,"channel-5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Terra (UST)"),(0,r.kt)("td",null,"ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC"),(0,r.kt)("td",null,"channel-72")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Secret Network (SCRT)"),(0,r.kt)("td",null,"ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A"),(0,r.kt)("td",null,"channel-88")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Juno (JUNO)"),(0,r.kt)("td",null,"ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED"),(0,r.kt)("td",null,"channel-42")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Persistence (XPRT)"),(0,r.kt)("td",null,"ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293 "),(0,r.kt)("td",null,"channel-4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Terra (KRT)"),(0,r.kt)("td",null,"ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780"),(0,r.kt)("td",null,"channel-72")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Akash (AKT)"),(0,r.kt)("td",null,"ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4"),(0,r.kt)("td",null,"channel-1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Regen Network (REGEN)"),(0,r.kt)("td",null,"ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076"),(0,r.kt)("td",null,"channel-8")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Sentinel (DVPN)"),(0,r.kt)("td",null,"ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84"),(0,r.kt)("td",null,"channel-2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IRISnet (IRIS)"),(0,r.kt)("td",null,"ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0 "),(0,r.kt)("td",null,"channel-6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Starname (IOV)"),(0,r.kt)("td",null,"ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC"),(0,r.kt)("td",null,"channel-15")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"e-Money (NGM)"),(0,r.kt)("td",null,"ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59"),(0,r.kt)("td",null,"channel-37")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"e-Money (EEUR)"),(0,r.kt)("td",null,"ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F"),(0,r.kt)("td",null,"channel-37")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Microtick (TICK)"),(0,r.kt)("td",null,"ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8"),(0,r.kt)("td",null,"channel-39")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LikeCoin (LIKE)"),(0,r.kt)("td",null,"ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525 "),(0,r.kt)("td",null,"channel-53")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IXO (IXO)"),(0,r.kt)("td",null,"ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B"),(0,r.kt)("td",null,"channel-38")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BitCanna (BCNA)"),(0,r.kt)("td",null,"ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5"),(0,r.kt)("td",null,"channel-51")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BitSong (BTSG)"),(0,r.kt)("td",null,"ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452"),(0,r.kt)("td",null,"channel-73")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Ki (XKI)"),(0,r.kt)("td",null,"ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E"),(0,r.kt)("td",null,"channel-77")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"MediBloc (MED)"),(0,r.kt)("td",null,"ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB "),(0,r.kt)("td",null,"channel-82")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Bostrom (BOOT)"),(0,r.kt)("td",null,"ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4"),(0,r.kt)("td",null,"channel-95")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Comdex (CMDX)"),(0,r.kt)("td",null,"ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4"),(0,r.kt)("td",null,"channel-87")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cheqd (CHEQ)"),(0,r.kt)("td",null,"ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA"),(0,r.kt)("td",null,"channel-108")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Stargaze (STARS)"),(0,r.kt)("td",null,"ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4"),(0,r.kt)("td",null,"channel-75")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Chihuahua (HUAHUA)"),(0,r.kt)("td",null,"ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228"),(0,r.kt)("td",null,"channel-113")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Lum Network (LUM)"),(0,r.kt)("td",null,"ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2"),(0,r.kt)("td",null,"channel-115")))))}B.isMDXComponent=!0}}]);