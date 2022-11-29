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

import Contract, { ContractCall } from './Contract';
import { ethers } from 'ethers';
import MulticallProvider from './MulticallProvider';

/**
 * Type alias for ethers.Contract and our Contract
 */
export type IContract = ethers.Contract | Contract;

/**
 * Represents a simple wrapper around an ethers.Contract that adds
 * some additional capabilities such as easy multicall structures
 * a retryCall<Type> method for view operations, allows for connecting
 * the contract to a different signerOrProvider without redeclaring, etc.
 */
export default class BaseContract {
    /**
     * Constructs a new instance of the object
     *
     * @param _contract
     */
    constructor (_contract: IContract) {
        if (!(_contract instanceof Contract)) {
            this._contract = new Contract(_contract.address, _contract.interface, _contract.provider);
        } else {
            this._contract = _contract;
        }
    }

    private _contract: Contract;

    /**
     * Returns the underlying contract interface
     */
    public get contract (): Contract {
        return this._contract;
    }

    /**
     * Returns the contract address
     */
    public get address (): string {
        return this._contract.address;
    }

    /**
     * Returns an interface allowing for us with the multicall method of a provider
     *
     * @param name
     * @param params
     */
    public call (name: string, ...params: any[]): ContractCall {
        return this._contract.callMethod(name, ...params);
    }

    /**
     * Connects the existing instance of the contract to a new signer or provider
     *
     * @param signerOrProvider
     */
    public connect (signerOrProvider: ethers.Signer | ethers.providers.Provider | MulticallProvider) {
        this._contract = new Contract(this._contract.address, this._contract.interface, signerOrProvider);

        return this;
    }

    /**
     * Returns whether the specified interface is supported by the contract
     *
     * @param interfaceId
     */
    public supportsInterface (interfaceId: string): Promise<boolean> {
        return this.retryCall<boolean>(this.contract.supportsInterface, interfaceId);
    }

    /**
     * Automatically keeps trying the call unless we get a revert exception
     *
     * @param func
     * @param params
     * @protected
     */
    protected async retryCall<T> (func: (...args: any[]) => Promise<T>, ...params: any[]): Promise<T> {
        return this._contract.retryCall(func, ...params);
    }
}

export { BaseContract };
