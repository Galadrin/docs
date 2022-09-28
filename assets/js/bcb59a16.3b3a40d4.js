"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,c=h["".concat(s,".").concat(d)]||h[d]||m[d]||n;return a?i.createElement(c,r(r({ref:t},u),{},{components:a})):i.createElement(c,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(87462),o=(a(67294),a(3905));const n={},r="Liquidity",l={unversionedId:"integrate/liquidity",id:"integrate/liquidity",title:"Liquidity",description:"Options for Intial Liquidity",source:"@site/docs/overview/integrate/liquidity.md",sourceDirName:"integrate",slug:"/integrate/liquidity",permalink:"/overview/integrate/liquidity",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/liquidity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a LBP",permalink:"/overview/integrate/lbp"},next:{title:"Marketing",permalink:"/overview/integrate/marketing"}},s={},p=[{value:"Options for Intial Liquidity",id:"options-for-intial-liquidity",level:2},{value:"Additional Liquidity",id:"additional-liquidity",level:2},{value:"Creating a Liquidity Bootstrapping Pool",id:"creating-a-liquidity-bootstrapping-pool",level:2},{value:"Example Pool Files",id:"example-pool-files",level:3},{value:"Example CLI TX",id:"example-cli-tx",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"liquidity"},"Liquidity"),(0,o.kt)("h2",{id:"options-for-intial-liquidity"},"Options for Intial Liquidity"),(0,o.kt)("p",null,"When integrating a new asset, Osmosis Zone recommends at least USD $1000-worth of liquidity in a pool before it is listed onto ",(0,o.kt)("a",{parentName:"p",href:"https://frontier.osmosis.zone"},"frontier.osmosis.zone"),"; there are a few ways to go about setting up the minimum liquidity requirement."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that the Osmosis Foundation will ",(0,o.kt)("strong",{parentName:"em"},"not")," consider any OTC token transfers or loans")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add your own liquidity",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Simply buy at least USD $500-worth of OSMO (recommended), ATOM, and/or UST to pair with USD $500-worth of the new asset to create a 50/50 pool",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Recommended criteria for a new pool: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Contains only 2 tokens"),(0,o.kt)("li",{parentName:"ul"},"50/50 weighting"),(0,o.kt)("li",{parentName:"ul"},"Contains a common Base Asset (i.e., OSMO, ATOM, or UST)"),(0,o.kt)("li",{parentName:"ul"},"0.2 for OSMO pools, 0.3% swap fee for ATOM or UST pools"),(0,o.kt)("li",{parentName:"ul"},"0% exit fee"),(0,o.kt)("li",{parentName:"ul"},'No future governor (set to blank (""))'),(0,o.kt)("li",{parentName:"ul"},"Sufficient liquidity (at least USD $1000-worth)"))))),(0,o.kt)("li",{parentName:"ul"},"Alternatively, find some partners who would be willing to provide the base asset (e.g., OSMO, ATOM, UST, etc.) portion of the liquidity (this is assuming you can provide the pair asset portion (i.e., the new asset))"),(0,o.kt)("li",{parentName:"ul"},"Alternatively, it is possible to create an asymmetrically-weighted liquidity pool to reduce the requirement for the base asset (e.g., 80% FOO::20% OSMO). However, Osmosis Foundation recommends only creating 50/50 pools"),(0,o.kt)("li",{parentName:"ul"},"See: ",(0,o.kt)("a",{parentName:"li",href:"../../osmosis-core/modules/gamm/#create-pool"},"GAMM Module: Create pool")," for the CLI command to create a pool"),(0,o.kt)("li",{parentName:"ul"},"If the asset has already been ",(0,o.kt)("a",{parentName:"li",href:"/overview/integrate/frontend#how-to-add-an-asset-onto-the-osmosis-assets-page"},"added onto the Osmosis Zone Frontier Assets page"),", then a new pool can be created using the ",(0,o.kt)("a",{parentName:"li",href:"https://frontier.osmosis.zone/pools"},"Osmosis Zone Frontier Pools page"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See: ",(0,o.kt)("a",{parentName:"li",href:"/overview/getting-started#create-a-new-pool"},"Create a new pool")))))),(0,o.kt)("li",{parentName:"ul"},"Initiate a Liquidity Bootstrapping Pool (LBP)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A Liquidity Bootstrapping Pool (LBP) is a Liquidity Pool that is initiated with a phase of linear weight change.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Choose any starting weights (e.g., 90:10), ending weights (e.g., 50:50), and weight change duration (e.g., 3 days)"))),(0,o.kt)("li",{parentName:"ul"},"The primary purpose of an LBP is to be able to initiate a liquidity pool with relatively low amounts of the base asset (e.g., 10% OSMO), and high amounts on the new pair asset (e.g., 90% FOO). Throughout the weight change, as the new pair assets gets cheaper, the market is incentivized to bootstrap the pool with more of the base asset over time.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Because you'll be providing a low amount of the base asset (e.g., OSMO), it is expected to be able to provide a large amount of the pair asset (e.g., FOO)"),(0,o.kt)("li",{parentName:"ul"},"The benefit of being able to bootstrap a liquidity pool with more of the base asset from the market comes at the cost of the GAMM/LP token losing value throughout the weight change",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Some (unverified) examples, where the pool is intially created with a fiar price, and where the prices of the assets do not change throughout the LBP:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"80 FOO/20 OSMO -> 50 FOO/50 OSMO, means a 2x of the OSMO-side, but a 20% decrease in value of GAMM/LP token"),(0,o.kt)("li",{parentName:"ul"},"90 FOO/10 OSMO -> 50 FOO/50 OSMO, means a 3x of the OSMO-side, but a 40% decrease in value of GAMM/LP token"),(0,o.kt)("li",{parentName:"ul"},"95 FOO/ 5 OSMO -> 50 FOO/50 OSMO, means a ~4.36x of the OSMO-side, but a ~56.4% decrease in value of GAMM/LP token"))),(0,o.kt)("li",{parentName:"ul"},"Note that if the price of the pair asset (FOO) increases or decreases throughout the LBP, that can mitigate or exacerbate the loss of value of the GAMM/LP token"))))),(0,o.kt)("li",{parentName:"ul"},"The secondary purpose of an LBP is natural price discovery for the new asset.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Although it can be a strategic way to establish a price for the token, an LBP is still possible to conduct with an already established price, even while arbitrage opportunities would exist. However, the GAMM/LP tokens will lose value of the duration of the weight change, and is therefore generally not recommended"))),(0,o.kt)("li",{parentName:"ul"},"To learn more about LBPs, see: ",(0,o.kt)("a",{parentName:"li",href:"/overview/getting-started#liquidity-bootstrapping-pools"},"Learn More: Liquidity Bootstrapping Pools"),"."),(0,o.kt)("li",{parentName:"ul"},"To create an LBP, see: ",(0,o.kt)("a",{parentName:"li",href:"/overview/integrate/liquidity#creating-a-liquidity-bootstrapping-pool"},"Creating an LBP")),(0,o.kt)("li",{parentName:"ul"},"When creating an LBP, be sure to request the appropriate changes on the Osmosis Zone Frontier Front End to ensure the LBP page is displayed"),(0,o.kt)("li",{parentName:"ul"},"Note: It is highly recommended to postpone any aridrops until after the LBP has fully completed. The potential for users dumping an airdropped token during such a sensitive phase of price discovery can significantly negatively impact the final price of the asset--much moreso than an airdrop that is released afterward."),(0,o.kt)("li",{parentName:"ul"},"Note: LBP 2.0 is still being developed, and will likely be at least a few more months before the front end interface is implemented for it"))),(0,o.kt)("li",{parentName:"ul"},"Request a loan from the Osmosis Community Pool (OCP)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Osmosis has now seen a successful case of a new project propsing a loan of OSMO from the OCP, which would later be repaid in the form of the new pair token",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The loaned OSMO was sent to a multisig wallet, added to an LBP, and then the pair asset (STARS) was repaid to the OCP by the same multisig wallet after the completion of the LBP"))),(0,o.kt)("li",{parentName:"ul"},"Example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Stargaze Network (loaned 135,000 OSMO, repaid equivalent value of STARS)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On-chain Proposal: ",(0,o.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/99"},"Mintscan Osmosis Proposal 99")),(0,o.kt)("li",{parentName:"ul"},"Commonwealth Posts: ",(0,o.kt)("a",{parentName:"li",href:"https://commonwealth.im/osmosis/discussion/2882-details-and-parameters-of-stargaze-lbp-on-osmosis"},"1"),", ",(0,o.kt)("a",{parentName:"li",href:"https://commonwealth.im/osmosis/discussion/2494-signaling-proposal-for-osmo-for-stars-token-swap"},"2"))))))))),(0,o.kt)("h2",{id:"additional-liquidity"},"Additional Liquidity"),(0,o.kt)("p",null,"As more liquidity becomes available to users, either through mining, airdrops, or giveaways, it could be strategic to incentivize more liquidity to be added to Osmosis liquidity pools to ensure there is a healthy, consistent market for the new asset. See the ",(0,o.kt)("a",{parentName:"p",href:"/overview/integrate/incentives"},"Liquidity Mining Incentives Docs page")," to learn more about Osmosis Liquidity Mining Rewards, External Gauge Incentives, and Superfluid Staking."),(0,o.kt)("h2",{id:"creating-a-liquidity-bootstrapping-pool"},"Creating a Liquidity Bootstrapping Pool"),(0,o.kt)("p",null,"The below is an example of the pool.json file for a ",(0,o.kt)("a",{parentName:"p",href:"/overview/getting-started#liquidity-bootstrapping-pools"},"liquidity bootstrapping pool"),"."),(0,o.kt)("p",null,"A liquidity bootstrapping pool's weight begins at the weight set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"weights")," parameter and linearly shifts the weights until ",(0,o.kt)("inlineCode",{parentName:"p"},"target-pool-weights")," is reached over a time period set by the ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," parameter upon pool creation."),(0,o.kt)("p",null,"Typically, weights begin at an unbalanced ratio with more weight given to the token that is to be sold and shifts to a 1:1 weight (or a weight favoring the counter-party token that the pool is aiming to accrue). The changing of the weight affects the exchange price of the tokens even when the tokens within the pools remain the same. Note that linear change in weight does ",(0,o.kt)("strong",{parentName:"p"},"not")," mean linear change in price (it is highly recommend to play around with the various parameters on this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1t6VsMJF8lh4xuH_rfPNdT5DM3nY4orF9KFOj2HdMmuY/edit#gid=1392289526"},"basic LBP simulator")," to make sure you understand how the pool will act with different parameters and market demand)."),(0,o.kt)("p",null,"The pool creator can designate when the weight change begins by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"start-time"),". While the pool will be live and available for trade at the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"weights"),", pool weight shift will not begin until ",(0,o.kt)("inlineCode",{parentName:"p"},"start-time")," is reached."),(0,o.kt)("h3",{id:"example-pool-files"},"Example Pool Files"),(0,o.kt)("p",null,"The following is an example of a liquidity bootstrapping pool.\nThe weights linearly change between the initial weights provided, and the target weights over 72 hrs (3 days)\nIf no start time is provided, it defaults to time the tx was successfully executed on chain."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "weights": "10akt,1atom",\n    "initial-deposit": "1000akt,100atom",\n    "swap-fee": "0.001",\n    "exit-fee": "0.001",\n    "lbp-params": {\n        "duration": "72h",\n        "target-pool-weights": "1akt,1atom"\n    }\n}\n')),(0,o.kt)("p",null,"Instead with start time included:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "weights": "10akt,1atom",\n    "initial-deposit": "1000akt,100atom",\n    "swap-fee": "0.001",\n    "exit-fee": "0.001",\n    "lbp-params": {\n        "duration": "72h",\n        "target-pool-weights": "1akt,1atom",\n        "start-time": "2006-01-02T15:04:05Z"\n    }\n}\n')),(0,o.kt)("h3",{id:"example-cli-tx"},"Example CLI TX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'osmosisd tx gamm create-pool --pool-file="path/to/lbp-pool.json" --from myKey\n')),(0,o.kt)("p",null,"Note: The command to create a liquidity bootstrapping pool is the same as creating a normal pool. However, if the pool has valid ",(0,o.kt)("inlineCode",{parentName:"p"},"lbp-params")," in the pool file (json), it will be created as a liquidity bootstrapping pool."))}m.isMDXComponent=!0}}]);