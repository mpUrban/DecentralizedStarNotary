
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

contract address:
https://rinkeby.etherscan.io/address/0x0121fdc5bb43a6a86f5a5f9bf2d4447d87bed247

deployed from public address:
https://rinkeby.etherscan.io/address/0x0782140de231a91c2cef8c830107d995043cb2cc



get ABI from .\smart_contracts\build\contracts\StarNotary.json











https://truffleframework.com/tutorials/using-infura-custom-provider

Note: If you are on Windows and get an MSBUILD error, you may need to install the Windows build tools. In a terminal with Administrator rights, run npm install -g windows-build-tools and then try installation again.

npm install -g windows-build-tools

npm install scrypt --save



ganache-cli -m 'conduct shop dumb crash pretty movie gesture ski calm beach injury mixture'

0x0782140de231a91c2cef8c830107d995043cb2cc

node-gyp


truffle deploy --network development --reset


















[
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "starsForSale",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenIdToStarInfo",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "ra",
          "type": "string"
        },
        {
          "name": "dec",
          "type": "string"
        },
        {
          "name": "mag",
          "type": "string"
        },
        {
          "name": "story",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_ra",
          "type": "string"
        },
        {
          "name": "_dec",
          "type": "string"
        },
        {
          "name": "_mag",
          "type": "string"
        },
        {
          "name": "_story",
          "type": "string"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "createStar",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "putStarUpForSale",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyStar",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_ra",
          "type": "string"
        },
        {
          "name": "_dec",
          "type": "string"
        },
        {
          "name": "_mag",
          "type": "string"
        }
      ],
      "name": "checkIfStarExist",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]