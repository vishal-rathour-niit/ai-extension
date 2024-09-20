const fs = require('fs-extra');

// Copy manifest.json from public to build folder
fs.copy('./public/manifest.json', './build/manifest.json')
  .then(() => console.log('manifest.json copied successfully!'))
  .catch(err => console.error('Error copying manifest.json:', err));
