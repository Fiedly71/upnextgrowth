const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSvg = path.join(__dirname, 'public/icons/icon.svg');
const outputDir = path.join(__dirname, 'public/icons');

// Créer le SVG de base avec les bonnes couleurs
const createSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A2540;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00C853;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#grad)"/>
  <text x="256" y="310" font-family="Arial, sans-serif" font-size="180" font-weight="bold" fill="white" text-anchor="middle">UNG</text>
</svg>
`;

async function generateIcons() {
  console.log('Generating PWA icons...');
  
  // S'assurer que le dossier existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(Buffer.from(createSvg(size)))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated: icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`✗ Error generating icon-${size}x${size}.png:`, error.message);
    }
  }
  
  console.log('\nDone! All icons generated.');
}

generateIcons();
