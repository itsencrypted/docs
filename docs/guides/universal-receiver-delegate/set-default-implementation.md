---
sidebar_label: 'Set the default implementation'
sidebar_position: 1
---

# Set the default implementation

:::note

Users deploying their Universal Profiles using the guides that utilize **[lsp-factory](../universal-profile/create-profile.md)** or the **[Browser Extension](../browser-extension/create-a-universal-profile.md)** can skip this guide, as this contract is already deployed and set for their profiles.

:::

This guide will teach you how to deploy and set the default implementation of the **[Universal Receiver Delegate](../../standards/smart-contracts/lsp1-universal-receiver-delegate-up.md)** (URD) used by the Universal Profile. This contract will register the addresses of the **[received assets](../../standards/universal-profile/lsp5-received-assets.md)** and **[vaults](../../standards/universal-profile/lsp10-received-vaults.md)** and will remove them on a balance equal to 0. This contract requires the [SETDATA Permission](../../standards/universal-profile/lsp6-key-manager.md#permissions) to interact with the profile through the KeyManager.

![UniversalReceiverDelegate setting data keys on profile](/img/standards/lsp1delegate/token-transfer-4.jpg)

## Deploy the default Universal Receiver Delegate contract

```typescript title="Deploying the Universal Receiver Delegate of the Universal Profile"
import Web3 from 'web3';
import LSP1UniversalReceiverDelegateUP from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateUP.json';

const web3 = new Web3('https://rpc.l16.lukso.network');

const PRIVATE_KEY = '0x...'; // your EOA private key
const myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);

// create an instance
let myURD = new web3.eth.Contract(LSP1UniversalReceiverDelegateUP.abi);

// deploy the URD contract
await myURD
  .deploy({
    data: LSP1UniversalReceiverDelegateUP.bytecode,
  })
  .send({
    from: myEOA.address,
    gas: 5_000_000,
    gasPrice: '1000000000',
  });
```

### Set the address of the URD in the storage

After deploying the contract, we need to set its address under the **[LSP1-UniversalReceiverDelegate Data Key](../../standards/generic-standards/lsp1-universal-receiver.md#extension)** and grant it the **[SETDATA](../../standards/universal-profile/lsp6-key-manager.md#permissions)** permission.

```typescript title="Setting address of the URD in the storage"
import Web3 from 'web3';
import { ERC725YDataKeys } from '@lukso/lsp-smart-contracts/constants.js';
import UniversalProfile from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';
import LSP6KeyManager from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';

const web3 = new Web3('https://rpc.l16.lukso.network');

const PRIVATE_KEY = '0x...'; // your EOA private key
const myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);

const URD_DATA_KEY = ERC725YDataKeys.LSP0.LSP1UniversalReceiverDelegate;
const myURDAddress = '0x..'; // address of the URD Deployed in Step 1
const myUniversalProfileAddress = '0x..'; // address of the UP

// create an instance of the UP
const myUP = new web3.eth.Contract(
  UniversalProfile.abi,
  myUniversalProfileAddress,
);

const addressPermissionsOldArrayLengthHex = await myUP.methods[
  'getData(bytes32)'
](ERC725YDataKeys.LSP6['AddressPermissions[]'].length).call();

const addressPermissionsNewArrayLength =
  web3.utils.hexToNumber(addressPermissionsOldArrayLengthHex) + 1;

const addressPermissionsNewArrayLengthHex = web3.utils.padLeft(
  web3.utils.numberToHex(addressPermissionsNewArrayLength),
  64,
);

// bytes16 index `addressPermissionsOldArrayLengthHex` will serve as index
const URDIndexInArrayHex = addressPermissionsOldArrayLengthHex.substring(
  34,
  66,
);

// encode setData Payload on the Vault
const setDataPayload = await myUP.methods['setData(bytes32[],bytes[])'](
  [
    URD_DATA_KEY,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].length,
    ERC725YDataKeys.LSP6['AddressPermissions[]'].index + elementIndexInArrayHex,
    ERC725YDataKeys.LSP6['AddressPermissions:Permissions'] +
      myURDAddress.substring(2),
  ],
  [
    myURDAddress,
    addressPermissionsNewArrayLengthHex,
    myURDAddress,
    PERMISSIONS.SETDATA,
  ],
).encodeABI();

// getting the Key Manager address from UP
const myKeyManagerAddress = await myUP.methods.owner().call();

// create an instance of the KeyManager
let myKM = new web3.eth.Contract(LSP6KeyManager.abi, myKeyManagerAddress);

// execute the executePayload on the KM
await myKM.methods.execute(executePayload).send({
  from: myEOA.address,
  gasLimit: 600_000,
});
```
