// Script to restore feature box overlays while keeping hero section overlays removed
const fs = require('fs');
const path = require('path');

// Files to process
const files = [
  'index.html',
  'vad-vi-gor.html',
  'spela-i-samban.html'
];

// Process each file
files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  // Read file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Keep hero section overlay removed
  // But restore feature box overlays
  
  // Find all feature boxes with removed overlays
  const featureBoxPattern = /<div class="feature"[\s\S]*?<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url\('[\s\S]*?'\);[\s\S]*?<\/div>\s*<!-- Overlay removed -->/g;
  
  // Replace with restored overlays
  content = content.replace(featureBoxPattern, match => {
    // Extract the background image part
    const bgImagePart = match.match(/<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url\('[\s\S]*?'\);[\s\S]*?<\/div>/)[0];
    
    // Add the overlay div back
    return `${bgImagePart}\n                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.4); z-index: 1;"></div>`;
  });
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Restored feature box overlays in ${file}`);
});

console.log('All feature box overlays have been restored!');
