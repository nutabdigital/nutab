const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const files = ['index.html', '404.html']; // Add any other files to adjust.

files.forEach((file) => {
    const filePath = path.join(distPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.replace(/\/_next\//g, '/nutab/_next/');
        content = content.replace(/\/static\//g, '/nutab/static/'); // If needed
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated paths in ${file}`);
    } else {
        console.warn(`${file} not found in ${distPath}`);
    }
});

console.log('Paths updated successfully.');
