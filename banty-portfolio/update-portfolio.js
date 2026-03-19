const fs = require('fs');
const path = './src/assets/data/portfolio.json';
const d = JSON.parse(fs.readFileSync(path, 'utf8'));

// Correct LinkedIn
d.personal.linkedin = 'https://www.linkedin.com/in/banty-agarwal-a58850198';
d.personal.github   = 'https://github.com/banty1998';

// Remove all project images — no 404 errors
d.projects.forEach(p => {
  delete p.previewImage;
  delete p.previewImageHover;
});

fs.writeFileSync(path, JSON.stringify(d, null, 2));
console.log('  portfolio.json updated:');
console.log('  linkedin:', d.personal.linkedin);
console.log('  images removed from', d.projects.length, 'projects');
