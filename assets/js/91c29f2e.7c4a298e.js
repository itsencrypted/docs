"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[171],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,h=d["".concat(i,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],s={sidebar_position:4},i="L14 Public Testnet",u={unversionedId:"networks/l14-testnet",id:"networks/l14-testnet",isDocsHomePage:!1,title:"L14 Public Testnet",description:"We currently have our L14 test-network running, that you can connect to, run a node and build upon. L14 is up-to-date with the latest Ethereum forks until Constantinople.",source:"@site/docs/networks/l14-testnet.md",sourceDirName:"networks",slug:"/networks/l14-testnet",permalink:"/networks/l14-testnet",editUrl:"https://github.com/lukso-network/docs-website/tree/main/docs/networks/l14-testnet.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"networksSidebar",previous:{title:"L15 Public Testnet",permalink:"/networks/l15-testnet"},next:{title:"LUKSO CLI",permalink:"/networks/lukso-cli"}},c=[{value:"How to run a L14 testnet node",id:"how-to-run-a-l14-testnet-node",children:[{value:"Installing the node",id:"installing-the-node",children:[]},{value:"Running the node",id:"running-the-node",children:[]}]},{value:"Repositories",id:"repositories",children:[]},{value:"Ressources",id:"ressources",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"l14-public-testnet"},"L14 Public Testnet"),(0,l.kt)("p",null,"We currently have our ",(0,l.kt)("a",{parentName:"p",href:"http://explorer.l14.lukso.network/"},"L14 test-network")," running, that you can connect to, run a node and build upon. L14 is up-to-date with the latest Ethereum forks until Constantinople."),(0,l.kt)("p",null,"Network ID: ",(0,l.kt)("inlineCode",{parentName:"p"},"22 (0x16)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RPC Endpoint: ",(0,l.kt)("a",{parentName:"li",href:"https://rpc.l14.lukso.network"},"https://rpc.l14.lukso.network")),(0,l.kt)("li",{parentName:"ul"},"Explorer: ",(0,l.kt)("a",{parentName:"li",href:"https://blockscout.com/lukso/l14"},"https://blockscout.com/lukso/l14")),(0,l.kt)("li",{parentName:"ul"},"Faucet: ",(0,l.kt)("a",{parentName:"li",href:"http://faucet.l14.lukso.network/"},"http://faucet.l14.lukso.network/"))),(0,l.kt)("h2",{id:"how-to-run-a-l14-testnet-node"},"How to run a L14 testnet node"),(0,l.kt)("h3",{id:"installing-the-node"},"Installing the node"),(0,l.kt)("p",null,"Install a parity node ",(0,l.kt)("inlineCode",{parentName:"p"},"> 2.2.7-stable")," as ",(0,l.kt)("a",{parentName:"p",href:"https://openethereum.github.io/Setup.html"},"described here"),"."),(0,l.kt)("p",null,"LUKSO L14 test-network requires most of ",(0,l.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement/"},"Constantinople transitions"),", this means you need to at least run parity > 2.2.7-stable."),(0,l.kt)("h3",{id:"running-the-node"},"Running the node"),(0,l.kt)("p",null,"Run your parity node and connect to the LUKSO L14 test network using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ parity --chain spec.json --bootnodes enode://6a6b0b286e3f96dee993d995f3fd435a065388664e211f02533e28c9ddc31089eb90f71d1386c3c74ee60f79df86cacdb10992c38e2f9cccac4881cb84526415@35.195.116.26:30303\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-chain-spec/blob/l14/spec.json"},"spec.json")," is in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-chain-spec/tree/l14"},"l14")," branch of the ",(0,l.kt)("inlineCode",{parentName:"p"},"lukso-chain-spec")," repository."),(0,l.kt)("p",null,"Should the above boot-node not work, you can find the current boot-node ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lukso-chain-spec/blob/l14/bootnodes.txt"},"here"),"."),(0,l.kt)("h2",{id:"repositories"},"Repositories"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/l14-deploy-node-gcloud"},"https://github.com/lukso-network/l14-deploy-node-gcloud")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/l14-chain-spec"},"https://github.com/lukso-network/l14-chain-spec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/l14-dapps-validators"},"https://github.com/lukso-network/l14-dapps-validators"))),(0,l.kt)("h2",{id:"ressources"},"Ressources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/lukso/announcing-the-l14-test-network-38d7c622c6cb"},"https://medium.com/lukso/announcing-the-l14-test-network-38d7c622c6cb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/l14-deploy-node-gcloud"},"https://github.com/lukso-network/l14-deploy-node-gcloud"))))}d.isMDXComponent=!0}}]);