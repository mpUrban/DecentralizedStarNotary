
# Decentralized Star Notary

This is a class project to implement a blockchain-based notarization service, also known as proof-of-existence (POE).  This system allows a user to claim a star in the sky based on it's coordinates (right ascension, RA & declination, DEC) and magnitude (MAG).  The user is also able to submit a story, which is a free-text string of characters.  

The project is implemented on the Ethereum blockchain under the Rinkeby testnet.  

## Truffle Testing

* Make the ./smart_contracts folder the working directory
* The js tests must be in the ./test folder
* Run the Ganache test blockchain from bash
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

## Preparing Truffle

Install truffle:
```
npm install --global truffle
```
Navigate to smart_contracts folder and if empty, then:
```
truffle init
```
If on windows, delete the newly created truffle.js file in the smart_contracts folder.  Modify the truffle-config.js as:
```
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545, // ganache-cli
      network_id: "*" // Match any network id
    }
  }
};
```

## Installing OpenZeppelin
```
npm init -y 
npm install --save-exact openzeppelin-solidity@2.0.0-rc.1
```

## Installing Ganache CLI
```
npm install -g ganache-cli
```


node node-scrypt-preinstall.js

truffle compile
truffle migrate --network development









https://truffleframework.com/tutorials/using-infura-custom-provider

Note: If you are on Windows and get an MSBUILD error, you may need to install the Windows build tools. In a terminal with Administrator rights, run npm install -g windows-build-tools and then try installation again.

npm install -g windows-build-tools

npm install scrypt --save



ganache-cli -m 'conduct shop dumb crash pretty movie gesture ski calm beach injury mixture'

0x0782140de231a91c2cef8c830107d995043cb2cc

npm install --unsafe-perm -g

node-gyp

npm install -g truffle-expect truffle-config web3

truffle deploy --network development --reset



