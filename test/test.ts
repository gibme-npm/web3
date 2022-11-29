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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import assert from 'assert';
import Web3, { ERC20, ERC721 } from '../src/web3';
import { describe, it, before } from 'mocha';

describe('Unit Tests', () => {
    let controller: Web3;
    let erc20: ERC20;
    let erc721: ERC721;

    before(async () => {
        controller = await Web3.load('Unit Tests', {
            chainId: 1,
            jsonRpcProvider: 'https://cloudflare-eth.com'
        });
    });

    describe('Contract Loading', async () => {
        it('ERC20', async () => {
            erc20 = new ERC20(await controller.loadContract(
                '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'));

            assert(typeof erc20 !== 'undefined');
        });

        it('ERC721', async () => {
            erc721 = new ERC721(await controller.loadContract(
                '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'));

            assert(typeof erc721 !== 'undefined');
        });
    });

    describe('ERC20', async () => {
        it('name()', async function () {
            if (!erc20) {
                return this.skip();
            }

            const value = await erc20.name();

            assert(value.length !== 0);
        });

        it('symbol()', async function () {
            if (!erc20) {
                return this.skip();
            }

            const value = await erc20.symbol();

            assert(value.length !== 0);
        });

        it('totalSupply()', async function () {
            if (!erc20) {
                return this.skip();
            }

            const value = await erc20.totalSupply();

            assert(!value.isZero());
        });

        it('tokenMetadata()', async () => {
            const meta = await erc20.tokenMetadata();

            assert(meta.address === erc20.address);
        });
    });

    describe('ERC721', async () => {
        it('name()', async function () {
            if (!erc721) {
                return this.skip();
            }

            const value = await erc721.name();

            assert(value.length !== 0);
        });

        it('symbol()', async function () {
            if (!erc721) {
                return this.skip();
            }

            const value = await erc721.symbol();

            assert(value.length !== 0);
        });

        it('totalSupply()', async function () {
            if (!erc721) {
                return this.skip();
            }

            const value = await erc721.totalSupply();

            assert(!value.isZero());
        });

        it('tokenMetadata()', async () => {
            const meta = await erc721.tokenMetadata();

            assert(meta.address === erc721.address);
        });
    });
});
