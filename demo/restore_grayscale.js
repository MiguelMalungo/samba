// Script to restore grayscale filter to feature boxes
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
  
  // Find all feature box background image divs
  const featureBoxPattern = /<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url\('[\s\S]*?'\); background-size: cover; background-position: center;"><\/div>/g;
  
  // Replace with grayscale filter added
  content = content.replace(featureBoxPattern, match => {
    // Add grayscale filter to the background image
    return match.replace('background-position: center;">', 'background-position: center; filter: grayscale(100%);">');
  });
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`Restored grayscale filter to feature boxes in ${file}`);
});

console.log('All feature box grayscale filters have been restored!');
