"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(3117),r=(a(7294),a(3905));const o={id:"execute-transaction",title:"Execute Transaction",sidebar_position:1},i=void 0,s={unversionedId:"tools/relayer-api/execute-transaction",id:"tools/relayer-api/execute-transaction",title:"Execute Transaction",description:"This API is experimental for internal use, and is not the official Relayer API!",source:"@site/docs/tools/relayer-api/execute-transaction.md",sourceDirName:"tools/relayer-api",slug:"/tools/relayer-api/execute-transaction",permalink:"/tools/relayer-api/execute-transaction",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/relayer-api/execute-transaction.md",tags:[],version:"current",lastUpdatedAt:1660035730,formattedLastUpdatedAt:"Aug 9, 2022",sidebarPosition:1,frontMatter:{id:"execute-transaction",title:"Execute Transaction",sidebar_position:1},sidebar:"toolsSidebar",previous:{title:"LSP8IdentifiableDigitalAsset",permalink:"/tools/lsp-factoryjs/classes/lsp8-identifiable-digital-asset"},next:{title:"ERC725 Tools",permalink:"/tools/erc725-tools"}},l={},c=[{value:"Payload",id:"payload",level:3},{value:"Properties",id:"properties",level:4},{value:"Response",id:"response",level:3},{value:"Properties",id:"properties-1",level:4},{value:"Example",id:"example",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This API is experimental for internal use, and is not the official Relayer API!\nThe current draft of the standardised Relayer API can be found ",(0,r.kt)("a",{parentName:"p",href:"https://lukso.notion.site/lukso/Transaction-Relay-Service-API-Standard-2bda58f4f47f4497bb3381654acda8c3"},"in Notion"))),(0,r.kt)("p",null,"To execute a transaction on behalf of a Universal Profile:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-POST-green",alt:"post"})," ",(0,r.kt)("inlineCode",{parentName:"p"},"https://relayer.l16.staging.lukso.dev/api/v1/execute")),(0,r.kt)("p",null,"Once your transaction has been sent to the relayer get the status of your transaction using:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-GET-blue",alt:"get"})," ",(0,r.kt)("inlineCode",{parentName:"p"},"https://relayer.l16.staging.lukso.dev/api/v1/task/{taskId}")),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keyManagerAddress": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD",\n  "transaction": {\n    "abi": "0x7f23690c5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000596f357c6aa5a21984a83b7eef4cb0720ac1fcf5a45e9d84c653d97b71bbe89b7a728c386a697066733a2f2f516d624b43744b4d7573376741524470617744687a32506a4e36616f64346b69794e436851726d3451437858454b00000000000000",\n    "signature": "0x43c958b1729586749169599d7e776f18afc6223c7da21107161477d291d497973b4fc50a724b1b2ab98f3f8cf1d5cdbbbdf3512e4fbfbdc39732229a15beb14a1b",\n    "nonce": 1\n  }\n}\n')),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyManagerAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyManager"))," contract which controls the Universal Profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"abi")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The encoded ABI of the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The transaction signature.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonce")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The nonce of the KeyManager contract.")))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "taskId": "fb0a071d-c526-488d-9f17-b919507fddf2",\n  "keyManagerAddress": "0xBB645D97B0c7D101ca0d73131e521fe89B463BFD",\n  "transaction": {\n    "abi": "0x7f23690c5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000596f357c6aa5a21984a83b7eef4cb0720ac1fcf5a45e9d84c653d97b71bbe89b7a728c386a697066733a2f2f516d624b43744b4d7573376741524470617744687a32506a4e36616f64346b69794e436851726d3451437858454b00000000000000",\n    "signature": "0x43c958b1729586749169599d7e776f18afc6223c7da21107161477d291d497973b4fc50a724b1b2ab98f3f8cf1d5cdbbbdf3512e4fbfbdc39732229a15beb14a1b",\n    "nonce": 1\n  }\n}\n')),(0,r.kt)("h4",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whether the transaction was successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"taskId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"task id used to identify the transaction using the ",(0,r.kt)("inlineCode",{parentName:"td"},"/task/{taskId}")," endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"keyManagerAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-6-KeyManager.md"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyManager"))," contract which controls the Universal Profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"abi")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The encoded ABI of the transaction you sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The transaction signature you sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonce")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The nonce of the KeyManager contract you sent.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example shows how to prepare a transaction for the relayer. We can apply the same logic to any transaction."),(0,r.kt)("p",null,"You will need the address of the UP making the transaction and the private key of the account which controls the UP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const controllingAccountPrivateKey = '0x...';\nconst myUpAddress = '0x...';\n")),(0,r.kt)("p",null,"Then, instantiate a Web3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," object for your UP and KeyManager using the ",(0,r.kt)("strong",{parentName:"p"},"Contract ABIs")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/lsp-smart-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts"))," NPM package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\n\nconst myUniversalProfile = new web3.eth.Contract(\n  UniversalProfileContract.abi,\n  myUpAddress,\n);\n\nconst keyManagerAddress = await myUniversalProfile.methods.owner().call();\nconst KeyManager = new web3.eth.Contract(\n  KeyManagerContract.abi,\n  keyManagerAddress,\n);\n")),(0,r.kt)("p",null,"Now we can get the nonce from the KeyManager for the next transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const controllerAccount =\n  web3.eth.accounts.privateKeyToAccount(controllerPrivateKey);\nconst channelId = 0; // Can be any number that your app will use frequently.\n// Channel IDs prevent nonce conflicts, when many apps send transactions to your keyManager at the same time.\n\nconst nonce = await KeyManager.methods\n  .getNonce(controllerAccount.address, channelId)\n  .call();\n")),(0,r.kt)("p",null,"We need to encode the smart contract call through the execute function of your Universal Profile to be signed and passed to the relayer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Encode transaction ABI"',title:'"Encode',transaction:!0,'ABI"':!0},"const abiPayload = myUniversalProfile.methods.execute(\n    0, // The OPERATION_CALL value. 0 for a LYX transaction\n    '0x...', // Recipient address\n    web3.utils.toWei('100'), // amount of LYX to send in wei\n    '0xxxxxx...' // Call data, to be called on the recipient address, or '0x'\n).encodeABI()) ;\n")),(0,r.kt)("p",null,"Afterward, we sign the transaction from one of the controller keys of your Universal Profile."),(0,r.kt)("p",null,"The message is constructed by signing the ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keyManagerAddress"),", signer ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"abiPayload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Sign the transaction"',title:'"Sign',the:!0,'transaction"':!0},"const chainId = await web3.eth.getChainId(); // will be 2828 on l16\n\nconst message = web3.utils.soliditySha3(chainId, keyManagerAddress, nonce, {\n  t: 'bytes',\n  v: abiPayload,\n});\n\nconst signatureObject = controllerAccount.sign(message);\nconst signature = signatureObject.signature;\n")),(0,r.kt)("p",null,"Now you have everything you need to send your transaction to the relayer for execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const payload = {\n  keyManagerAddress,\n  transaction: {\n    nonce: nonce,\n    abi: abiPayload,\n    signature: signature,\n  },\n};\n\nconst response = await axios.post(\n  `https://relayer.lukso.network/api/v1/execute`,\n  payload,\n);\n")),(0,r.kt)("p",null,"Youn can check the status of your transaction using the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"taskId")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"/task/{ taskId }"),"."),(0,r.kt)("p",null,"The transaction will receive the ",(0,r.kt)("inlineCode",{parentName:"p"},"status:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPLETE")," once it has been sent to the blockchain."))}p.isMDXComponent=!0}}]);