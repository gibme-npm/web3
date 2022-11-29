// Copyright (c) 2021-2022, Brandon Lehmann <brandonlehmann@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import ABI from './ABI';
import BaseContract, { IContract } from './BaseContract';
import Contract, { ContractType, ContractCall } from './Contract';
import ERC20 from './ERC20';
import ERC721, { ERC721Attribute, ERC721Metadata, ERC721FetchedMetadata } from './ERC721';
import ERC777 from './ERC777';
import ERC1155, { ERC1155Properties, ERC1155Metadata, ERC1155FetchedMetadata } from './ERC1155';
import MultiCall from './Multicall';
import PaymentSplitter from './PaymentSplitter';
import Verifier from './Verifier';
import { multicallAbi, multicallAddresses } from './MulticallAddresses';
import MulticallProvider, { MulticallProviderOptions } from './MulticallProvider';
import { sleep } from './Tools';
import Web3Controller from './Web3Controller';
import {
    DefaultProviderOptions,
    Null1Address,
    NullAddress,
    MaxApproval,
    NFTAssetType,
    ChainOptions,
    ChainlistEntry,
    ContractLoadOptions,
    ContractFetchAbiOptions,
    Web3ControllerOptions,
    AssetOptions
} from './Types';
import { BigNumber, ethers } from 'ethers';
import Timer from '@gibme/timer';
import LocalStorage from '@gibme/local-storage';
import * as dotenv from 'dotenv';

export {
    ABI,
    ERC20,
    ERC721,
    ERC721Attribute,
    ERC721Metadata,
    ERC721FetchedMetadata,
    ERC777,
    ERC1155,
    ERC1155FetchedMetadata,
    ERC1155Metadata,
    ERC1155Properties,
    ContractCall,
    ContractType,
    BaseContract,
    IContract,
    MaxApproval,
    NullAddress,
    Null1Address,
    Contract,
    MultiCall,
    MulticallProvider,
    MulticallProviderOptions,
    multicallAddresses,
    multicallAbi,
    Web3Controller,
    ChainOptions,
    ChainlistEntry,
    DefaultProviderOptions,
    ethers,
    BigNumber,
    sleep,
    Verifier,
    dotenv,
    Timer,
    LocalStorage,
    NFTAssetType,
    ContractLoadOptions,
    ContractFetchAbiOptions,
    Web3ControllerOptions,
    AssetOptions,
    PaymentSplitter
};

export default Web3Controller;
