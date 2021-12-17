"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8321],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=s(n),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(u,o(o({ref:e},p),{},{components:n})):r.createElement(u,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7129:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Interfaces ID",sidebar_position:7},c="Interfaces ID",s={unversionedId:"contracts/interface-ids",id:"contracts/interface-ids",isDocsHomePage:!1,title:"Interfaces ID",description:"Interfaces ID helps to check if a contract supports an interface, it's a meta-interface so to say. This is useful if we want to interact with a contract but we don't know if it supports an interface such as ERC725Y or LSP1 , etc .",source:"@site/docs/contracts/interface-ids.md",sourceDirName:"contracts",slug:"/contracts/interface-ids",permalink:"/contracts/interface-ids",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/contracts/interface-ids.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Interfaces ID",sidebar_position:7},sidebar:"contractsSidebar",previous:{title:"LSP8 Identifiable Digital Asset",permalink:"/contracts/identifiable-digital-asset"}},p=[],d={toc:p};function f(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interfaces-id"},"Interfaces ID"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interfaces ID")," helps to check if a contract supports an interface, it's a meta-interface so to say. This is useful if we want to interact with a contract but we don't know if it supports an interface such as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md#erc725y"},"ERC725Y"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-1-UniversalReceiver.md"},"LSP1"))," , etc ."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"supportsInterface")," function for ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 Standard"))," returns ",(0,i.kt)("strong",{parentName:"p"},"TRUE")," if the standard is supported, ",(0,i.kt)("strong",{parentName:"p"},"FALSE")," otherwise."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Contract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"InterfaceId"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ERC725X"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x44c028fe")),(0,i.kt)("td",{parentName:"tr",align:"left"},"General executor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ERC725Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x5a988c0f")),(0,i.kt)("td",{parentName:"tr",align:"left"},"General key-value store.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP1-UniversalReceiver"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x6bb56a14")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Universal Receiver entry function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ERC1271"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x1626ba7e")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard Signature Validation Method for Contracts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP0-ERC725Account"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x63cb749b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Base to ",(0,i.kt)("strong",{parentName:"td"},"UniversalProfile")," containing ",(0,i.kt)("inlineCode",{parentName:"td"},"ERC725X")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"ERC725Y")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"LSP1-UniversalReceiver")," + ",(0,i.kt)("inlineCode",{parentName:"td"},"ERC1271"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP6-KeyManager"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x6f4df48b")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Controller for the ",(0,i.kt)("strong",{parentName:"td"},"ERC725Account"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP1-UniversalReceiverDelegate"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xc2d7bcc1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Universal Receiver delegated to an other smart contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP7-DigitalAsset"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0xe33f65c3")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Digital Assets either fungible or non-fungible. ",(0,i.kt)("em",{parentName:"td"},"ERC20 A-like"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LSP8-IdentifiableDigitalAsset"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0x49399145")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identifiable Digital Assets (NFT). ",(0,i.kt)("em",{parentName:"td"},"ERC721 A-like"))))))}f.isMDXComponent=!0}}]);