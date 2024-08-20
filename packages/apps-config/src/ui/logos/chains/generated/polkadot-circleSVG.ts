// Copyright 2017-2023 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Do not edit. Auto-generated via node scripts/imgConvert.mjs

// export const chainsPolkadotCircleSVG = 
// 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNTAiIGZpbGw9ImJsdWUiIC8+Cjwvc3ZnPgo=';


import * as fs from 'fs';
import * as path from 'path';

let chainsPolkadotCircleSVG: string;

try {
  // Load the PNG file content
  const pngFilePath = path.resolve(__dirname, '../../../../favicon2.svg'); // Ensure this path is correct
  console.log(`Reading PNG file from: ${pngFilePath}`);

  if (!fs.existsSync(pngFilePath)) {
    throw new Error('File does not exist');
  }

  const pngContent = fs.readFileSync(pngFilePath);
  console.log('PNG file read successfully');

  // Convert PNG to base64
  const base64PNG = Buffer.from(pngContent).toString('base64');
  console.log('PNG file converted to base64 successfully');

  // Construct the data URL
  const dataUrl = `data:image/png;base64,${base64PNG}`;
  console.log('Data URL constructed successfully');

  // Assign the data URL to the exportable variable
  chainsPolkadotCircleSVG = dataUrl;
} catch (error) {
  console.error('An error occurred:', error);
}

// Export the data URL
export { chainsPolkadotCircleSVG };
