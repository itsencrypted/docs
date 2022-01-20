"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[1141],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),v=a,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),s=["components"],o={sidebar_label:"LSP1 - Universal Receiver Delegate",sidebar_position:3},l="LSP1 - Universal Receiver Delegate",c={unversionedId:"standards/universal-profile/lsp1-universal-receiver-delegate",id:"standards/universal-profile/lsp1-universal-receiver-delegate",title:"LSP1 - Universal Receiver Delegate",description:"LSP1 - Universal Receiver Delegate",source:"@site/docs/standards/universal-profile/02-lsp1-universal-receiver-delegate.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp1-universal-receiver-delegate",permalink:"/standards/universal-profile/lsp1-universal-receiver-delegate",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/02-lsp1-universal-receiver-delegate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"LSP1 - Universal Receiver Delegate",sidebar_position:3},sidebar:"standardsSidebar",previous:{title:"LSP0 - ERC725 Account",permalink:"/standards/universal-profile/lsp0-erc725account"},next:{title:"LSP3 - Universal Profile",permalink:"/standards/universal-profile/lsp3-universal-profile"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",children:[{value:"Specification",id:"specification",children:[],level:3},{value:"How Delegation works",id:"how-delegation-works",children:[],level:3}],level:2},{value:"Implementations",id:"implementations",children:[{value:"Token transfer scenario",id:"token-transfer-scenario",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:d};function u(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp1---universal-receiver-delegate"},"LSP1 - Universal Receiver Delegate"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Standard Document")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md#specification-of-the-universalreceiverdelegate"},"LSP1 - Universal Receiver Delegate")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"As the code of the smart contract ",(0,i.kt)("strong",{parentName:"p"},"can't be changed"),", and the reaction of a smart contract implementing the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function could change and evolve in the future, it's advised to not hardcode how the smart contract should handle and react to certain calls inside of the universalReceiver function but to delegate the response to another contract that could be customized to implement a specific logic and could be changed anytime."),(0,i.kt)("p",null,"People wishing to understand this standard, will be ",(0,i.kt)("strong",{parentName:"p"},"well-advised")," to check the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver"},"LSP1-UniversalReceiver Standard"))," as its the origin of this standard."),(0,i.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("p",null,"This standard represents a delegate contract to the initial ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function, when an address wants to delegate its universalReceiver functionality to another smart contract. It contains a single function named ",(0,i.kt)("strong",{parentName:"p"},"universalReceiverDelegate")," that takes the same parameters as the universalReceiver function with an additional parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"address ",(0,i.kt)("inlineCode",{parentName:"li"},"sender"),": Representing the address calling the initial universalReceiver function.")),(0,i.kt)("h3",{id:"how-delegation-works"},"How Delegation works"),(0,i.kt)("p",null,"In order to let the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function forward the call to the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiverDelegate")," function, the ",(0,i.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," contract address should be set in the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ERC725Alliance/erc725/blob/main/docs/ERC-725.md#erc725y"},"ERC725Y Key value store"))," of the calling smart contract (contract implementing the universalReceiver function) as value to the pre-defined ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver#extension"},"LSP1UniversalReceiver"))," Key, and the UniversalReceiverDelegate contract should implement the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/interface-ids"},"LSP1UniversalReceiverDelegate InterfaceId"))," using ERC165.\n",(0,i.kt)("img",{alt:"ur-delegate-transaction",src:n(3147).Z})),(0,i.kt)("h2",{id:"implementations"},"Implementations"),(0,i.kt)("p",null,"There is several implementations of the standard, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP"))," contract is one of them that is used as a delegate to the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function of ",(0,i.kt)("strong",{parentName:"p"},"UniversalProfile")," contract."),(0,i.kt)("p",null,"At the moment this contract allows to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"receive and send tokens & vaults"),(0,i.kt)("li",{parentName:"ul"},"register the keys representing them according to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5-ReceivedAssets"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-10-ReceivedVaults.md"},"LSP10-ReceivedVaults"))," Standards.")),(0,i.kt)("h3",{id:"token-transfer-scenario"},"Token transfer scenario"),(0,i.kt)("p",null,"One of the possible scenarios is a token transfer between Alice and Bob. Alice wants to transfer a token owned by her UniversalProfile to the UniversalProfile of her friend Bob."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," It call the ",(0,i.kt)("strong",{parentName:"p"},"transfer")," function on the token contract through the KeyManager."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"executing transfer function",src:n(2745).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," The transfer function on the token contract will directly ",(0,i.kt)("strong",{parentName:"p"},"trigger a hook")," that will call the universalReceiver function on both sender and recipient UniversalProfiles."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"token contract hooks calling universalReceiver function",src:n(6378).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," If the ",(0,i.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," contract is set then it will be called by the ",(0,i.kt)("strong",{parentName:"p"},"universalReceiver")," function and will execute the logic customized in it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"universalReceiver function calling UniversalReceiverDelegate contract",src:n(5791).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.")," The ",(0,i.kt)("strong",{parentName:"p"},"UniversalReceiverDelegate")," of ",(0,i.kt)("strong",{parentName:"p"},"the UniversalProfile")," allows the transfer and set ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-5-ReceivedAssets.md"},"LSP5-ReceivedAssets"))," keys on both Profiles through the KeyManager."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"UniversalReceiverDelegate setting keys on profile",src:n(8195).Z})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LUKSO Standards Proposals: LSP1 - Universal Receiver (Standard Specification, GitHub)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/lsp-universalprofile-smart-contracts/tree/develop/contracts/LSP1UniversalReceiver"},"LSP1 Universal Receiver: Solidity implementations (GitHub)"))))}u.isMDXComponent=!0},2745:function(e,t,n){t.Z=n.p+"assets/images/token-transfer-1-562434a3f4db2f5f0da00daff53e641d.jpg"},6378:function(e,t,n){t.Z=n.p+"assets/images/token-transfer-2-869f736fd80789482b288f754fd65305.jpg"},5791:function(e,t,n){t.Z=n.p+"assets/images/token-transfer-3-cef81d8ed641f488398df3436a910649.jpg"},8195:function(e,t,n){t.Z=n.p+"assets/images/token-transfer-4-8e42db7583b60f3ecfebab8ab51a5875.jpg"},3147:function(e,t,n){t.Z=n.p+"assets/images/ur-delegate-transaction-e65fca514d4dbf223f4942aba201a63d.jpg"}}]);