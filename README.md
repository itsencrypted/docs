# Running a node on LUKSO Mainet

To be part of Lukso's network as a validator one should understand the concept of staking. 
Staking is the process of creating and maintaining one (or more) of these validators on the [Beacon Chain]{https://ethereum.org/en/upgrades/beacon-chain/} to help the network maintain the consistency and security of the Lukso blockchain. Validators do this by listening for transactions and new block proposals, and attesting that the proposed block contains legal, valid transactions by doing some number crunching and verification behind the scenes. Occasionally, they get to propose new blocks themselves.

To ensure that the network is resilient against malicious validators that lie about the current state of the chain, each validator is required to lock exactly ~~100 LYX~~ up as a "stake" in the networks. Performing their duties correctly and agreeing with the majority of the other validators will earn them rewards; performing incorrectly and attacking the chain will cost them some of their locked ~~100 LYX~~ balance. The amount taken depends on the severity of the attack and the number of validators that participated in it.

To earn staking rewards for the Lukso Network, the job is straightforward, but crucially important: run validators with the highest quality possible, and maximize staking rewards.

Node operators are responsible for:

Setting up a computer (either physical or virtual)
Configuring it correctly, including their home network if applicable
Installing the Lukso cli to perform validation
Securing it, both from outside and inside threats
Maintaining it for the life of their validators
It's a big responsibility, and not a simple set-it-and-forget-it kind of job; you need to care for your node for as long as it's staking. 




===================================================================================================================================================

## Tool documentations

**When the docs pages are built, documentation of the following repositories will be pulled in from the respective repos and updated automatically:**

- [lsp-factory.js](https://github.com/lukso-network/tools-lsp-factory/tree/develop/docs)
- [erc725.js](https://github.com/ERC725Alliance/erc725.js/tree/develop/docs)

**NOTE:**
Make sure to edit these tools in their respective repos, otherwise changes in the docs here will be overwritten.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### How to generate documentation for erc725.js

1. Run `docs:tools:sync` to pull documentation from tool repositories ([`erc725.js`](https://github.com/ERC725Alliance/erc725.js)).

```sh
npm run docs:tools:sync
```

2. Commit and push generated changes
