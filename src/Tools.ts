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

import { NFTAssetType } from './Types';

/**
 * Sleeps for the specified time
 * @param timeout in seconds
 */
export const sleep = async (timeout: number) =>
    new Promise(resolve => setTimeout(resolve, timeout * 1000));

/**
 * Attempts to determine the asset type found inside an ERC721 or ERC1155
 *
 * @param filename
 */
export const detectAssetType = (filename?: string): NFTAssetType => {
    if (!filename) return NFTAssetType.UNKNOWN;
    filename = filename.toLowerCase();

    if (filename.includes('.mp4')) {
        return NFTAssetType.VIDEO;
    } else if (filename.includes('.gif')) {
        return NFTAssetType.GIF;
    } else if (filename.includes('.png') || filename.includes('.jpg') || filename.includes('.jpeg')) {
        return NFTAssetType.IMAGE;
    } else {
        return NFTAssetType.UNKNOWN;
    }
};
