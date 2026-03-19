const fs = require('fs');
const path = './src/assets/data/portfolio.json';
let raw = fs.readFileSync(path, 'utf8');
const before = (raw.match(/"\/assets\//g) || []).length;
raw = raw.replace(/"\/assets\//g, '"assets/');
fs.writeFileSync(path, raw);
console.log('Fixed ' + before + ' leading-slash asset paths in portfolio.json');
