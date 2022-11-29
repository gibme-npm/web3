# Web3

Web3 helper client for web or node.js built largely around [ethers.js](https://docs.ethers.io/v5/)

## Features

* [Connection Modal Dialog](https://web3modal.com/)
* Web3Controller
  * Show Connection Modal
  * Add Chain to Wallet
  * Watch Assets in Wallet
  * Switch Chain
  * Load a contract from Address (using explorer ABI code) or ABI
  * FetchABI from explorer
  * Multicall support
* Prebuilt Classes for common Contract Types
  * ERC20
  * ERC721
  * ERC777
  * ERC1155
  * Multicall
  * PaymentSplitter
  * Verifier (hash verifier)
  * BaseContract (wraps ethers.Contract to handle connection(s) to different providers or signers)
  * Contract (extends BaseContract functionality)
* IPFS Gateway Helper (helps to load assets from IPFS)
* ABI encoding helper

## Documentation

[https://gibme-npm.github.io/web3/](https://gibme-npm.github.io/web3/)

## Sample Code

```typescript
import Web3Controller, { ERC20 } from '@gibme/web3';

(async () => {
    const controller = await Web3Controller.load('Test Apps', {
       chainId: 250 
    });
    
    const token = new ERC20(await controller.load('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'));
    
    console.log(await token.tokenMetadata());
})();
```
