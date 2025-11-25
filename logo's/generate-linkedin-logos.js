// Script to generate LinkedIn-specific logo files
// Run: node generate-linkedin-logos.js

import sharp from 'sharp';
import fs from 'fs';

const linkedinFiles = [
  // Square logo - transparent background (recommended)
  { 
    input: 'logo-tulip-linkedin-square.svg', 
    output: 'logo-tulip-linkedin-square.png', 
    width: 300, 
    height: 300,
    background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent
  },
  // Square logo - white background (fallback)
  { 
    input: 'logo-tulip-linkedin-square-white.svg', 
    output: 'logo-tulip-linkedin-square-white.png', 
    width: 300, 
    height: 300,
    background: { r: 255, g: 255, b: 255, alpha: 1 } // White
  },
  // Square logo - dark background
  { 
    input: 'logo-tulip-linkedin-square-dark.svg', 
    output: 'logo-tulip-linkedin-square-dark.png', 
    width: 300, 
    height: 300,
    background: { r: 20, g: 24, b: 32, alpha: 1 } // Dark
  },
  // Cover image
  { 
    input: 'logo-tulip-linkedin-cover.svg', 
    output: 'logo-tulip-linkedin-cover.png', 
    width: 1192, 
    height: 220,
    background: { r: 20, g: 24, b: 32, alpha: 1 } // Dark
  }
];

async function generateLinkedInLogos() {
  console.log('Generating LinkedIn logo files...\n');
  
  for (const file of linkedinFiles) {
    try {
      const svgBuffer = fs.readFileSync(file.input);
      await sharp(svgBuffer)
        .resize(file.width, file.height, {
          fit: 'contain',
          background: file.background
        })
        .png()
        .toFile(file.output);
      console.log(`✓ Created ${file.output} (${file.width}x${file.height}px)`);
    } catch (error) {
      console.error(`✗ Error creating ${file.output}:`, error.message);
    }
  }
  
  console.log('\n✓ All LinkedIn logos generated!');
  console.log('\nLinkedIn Requirements:');
  console.log('- Company Logo: 300x300px (max 4MB)');
  console.log('- Cover Image: 1192x220px (max 8MB)');
}

generateLinkedInLogos();


