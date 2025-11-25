// Script to convert SVG logos to PNG
// Requires: npm install sharp
// Run: node generate-png-logos.js

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgFiles = [
  // Full logo with subtitle - standard resolution
  { input: 'logo-tulip.svg', output: 'logo-tulip.png', width: 600, height: 240 },
  { input: 'logo-tulip.svg', output: 'logo-tulip@2x.png', width: 1200, height: 480 },
  { input: 'logo-tulip.svg', output: 'logo-tulip-small.png', width: 300, height: 120 },
  
  // Dark version (for dark backgrounds)
  { input: 'logo-tulip-dark.svg', output: 'logo-tulip-dark.png', width: 600, height: 240 },
  { input: 'logo-tulip-dark.svg', output: 'logo-tulip-dark@2x.png', width: 1200, height: 480 },
  
  // Simple logo without subtitle
  { input: 'logo-tulip-simple.svg', output: 'logo-tulip-simple.png', width: 400, height: 120 },
  { input: 'logo-tulip-simple.svg', output: 'logo-tulip-simple@2x.png', width: 800, height: 240 },
  { input: 'logo-tulip-simple.svg', output: 'logo-tulip-simple-small.png', width: 200, height: 60 }
];

async function convertSvgToPng() {
  for (const file of svgFiles) {
    try {
      const svgBuffer = fs.readFileSync(file.input);
      await sharp(svgBuffer)
        .resize(file.width, file.height, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(file.output);
      console.log(`✓ Created ${file.output}`);
    } catch (error) {
      console.error(`✗ Error creating ${file.output}:`, error.message);
    }
  }
}

convertSvgToPng();

