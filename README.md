
# Decentralized Star Notary

This is a class project to implement a blockchain-based notarization service, also known as proof-of-existence (POE).  This system allows a user to claim a star in the sky based on it's coordinates (right ascension, RA & declination, DEC) and magnitude (MAG).  The user is also able to submit a story, which is a free-text string of characters.  

The project is implemented on the Ethereum blockchain under the Rinkeby testnet.

---


## Console Output for Rinkeby Deployment:
```
$ truffle deploy --network rinkeby --reset
Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xe2c6669ca41ef72830da2fb3195e7922170d7e4bf578d459d0dcb151243ddfe8
  Migrations: 0xca10a17423c486b3f4f87b064cf622b924239aad
Saving successful migration to network...
  ... 0xee0edde2796bd02f21fdb58a5eee2b682a36d3fbac2f91b5527b375a23076fdf
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying StarNotary...
  ... 0x1560eb3824e0cfc5258517ace93929691fb781aa90b24199f7263b76f4e42704
  StarNotary: 0xe757c17bdc5a0decc59eb31f3e1fa29c266387d3
Saving successful migration to network...
  ... 0x269ce954b232592a9b5f1643b17499dc08cb5d2d79eb4126725e51acc661e34d
Saving artifacts...
```

## Contract Address on Rinkeby:

[0xe757c17bdc5a0decc59eb31f3e1fa29c266387d3](https://rinkeby.etherscan.io/address/0xe757c17bdc5a0decc59eb31f3e1fa29c266387d3)

## Contract Creation Hash:
[0x1560eb3824e0cfc5258517ace93929691fb781aa90b24199f7263b76f4e42704](https://rinkeby.etherscan.io/tx/0x1560eb3824e0cfc5258517ace93929691fb781aa90b24199f7263b76f4e42704)


## Transaction Hash of createStar()

[0x8ab5c81aa5f417d86217b0226dd93d616dc5521c0cceb5b2d34b6da0dc295bd5](https://rinkeby.etherscan.io/tx/0x8ab5c81aa5f417d86217b0226dd93d616dc5521c0cceb5b2d34b6da0dc295bd5)

## Star tokenId:

### 1



---

## Truffle Testing

* Make the ./smart_contracts folder the working directory
* The js tests must be in the ./test folder
* Run the Ganache test blockchain from bash, recommended to use the -m flag with a consistent mnemonic seed phrase in a string
* Verify the port of the host in the ganache blockchain (such as 8545)

```
ganache-cli
```
Compile the *.sol smart contract and launch js unit tests:

```
truffle test 
```

Requirements: <br>
* node.js - javascript runtime
* IDE  - such as VS code with the Solidty extension by Juan Blanco
* Truffle - smart contract test environment
* Ganache - local ethereum blockchain for testing
* OpenZeppelin - standard set of tools for Solidity
* web3.js
* Infura - full node service

## Preparing Truffle

Install truffle:
```
npm install --global truffle
```
Navigate to smart_contracts folder and if empty, then:
```
truffle init
```
If on windows, delete the newly created truffle.js file in the smart_contracts folder.  Modify the truffle-config.js as in the repo.

## Installing OpenZeppelin
```
npm init -y 
npm install --save-exact openzeppelin-solidity@2.0.0-rc.1
```

## Installing Ganache CLI
```
npm install -g ganache-cli
```

## Installing web3.js
```
npm install web3 --save
```

---

## Credits

[Hackernoon Article on Deployment](https://hackernoon.com/ethereum-development-walkthrough-part-2-truffle-ganache-geth-and-mist-8d6320e12269)








