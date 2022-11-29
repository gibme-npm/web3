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

import BaseContract from './BaseContract';

/**
 * Basic representation of a signature verifier compatible contract.
 * If additional functionality is required, this contract can be
 * extended via inheritance
 */
export default class Verifier extends BaseContract {
    /**
     * Verifies the signature of a specific hash value
     *
     * @param hash
     * @param v
     * @param r
     * @param s
     */
    public async verifyHash (hash: string, v: number, r: string, s: string): Promise<string> {
        return this.retryCall<string>(this.contract.verifyHash, hash, v, r, s);
    }

    /**
     * Verifies the signature of a specific message
     *
     * @param message
     * @param v
     * @param r
     * @param s
     */
    public async verifyString (message: string, v: number, r: string, s: string): Promise<string> {
        return this.retryCall<string>(this.contract.verifyString, message, v, r, s);
    }
}

export { Verifier };
