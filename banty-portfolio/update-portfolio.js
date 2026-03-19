const fs = require('fs');
const path = './src/assets/data/portfolio.json';
const d = JSON.parse(fs.readFileSync(path, 'utf8'));

// Personal info — correct URLs
d.personal.linkedin  = 'https://www.linkedin.com/in/banty-agarwal-730720190';
d.personal.github    = 'https://github.com/banty1998';
d.personal.email     = 'b.agarwal333@gmail.com';
d.personal.resumeUrl = '';  // empty hides the button until a PDF is added

// About photo — relative path (no leading slash, document.baseURI is prepended at runtime)
d.about.photo = 'assets/images/profile/banty-profile.webp';

// Ensure no leading slashes anywhere
let raw = JSON.stringify(d, null, 2).replace(/"\/assets\//g, '"assets/');
fs.writeFileSync(path, raw);
console.log('portfolio.json updated:');
console.log('  linkedin:', d.personal.linkedin);
console.log('  github:',   d.personal.github);
console.log('  photo:',    d.about.photo);
