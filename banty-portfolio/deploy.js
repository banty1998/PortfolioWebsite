#!/usr/bin/env node
/**
 * deploy.js — Production build + 404.html SPA fix + gh-pages push
 * Target: https://banty1998.github.io/PortfolioWebsite
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist', 'banty-portfolio', 'browser');
const indexFile = path.join(distDir, 'index.html');
const notFoundFile = path.join(distDir, '404.html');

console.log('\n→ Building for production (base-href: /PortfolioWebsite/)…');
execSync(
  'ng build --configuration production --base-href /PortfolioWebsite/',
  { stdio: 'inherit' }
);

console.log('\n→ Copying index.html → 404.html (SPA deep-link fix)…');
fs.copyFileSync(indexFile, notFoundFile);
console.log('  Done.');

console.log('\n→ Pushing to gh-pages branch…');
execSync(
  'npx gh-pages -d dist/banty-portfolio/browser --repo https://github.com/banty1998/PortfolioWebsite.git --branch gh-pages',
  { stdio: 'inherit' }
);

console.log('\n✅ Deployed!');
console.log('→ https://banty1998.github.io/PortfolioWebsite');
console.log('   (Takes ~2 min for first deploy, ~30 s after that)\n');
