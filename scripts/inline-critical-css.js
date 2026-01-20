#!/usr/bin/env node

/**
 * Inline Critical CSS Script
 *
 * Compiles _sass/_critical.scss and inlines it into _includes/head.html
 * to prevent flash of unstyled content (FOUC) on first page load.
 *
 * Run manually: node scripts/inline-critical-css.js
 * Runs automatically: via pre-commit hook
 */

const fs = require('fs');
const path = require('path');
const sass = require('sass');

const ROOT_DIR = path.join(__dirname, '..');
const CRITICAL_SCSS = path.join(ROOT_DIR, '_sass', '_critical.scss');
const HEAD_HTML = path.join(ROOT_DIR, '_includes', 'head.html');

// Markers for the critical CSS section in head.html
const START_MARKER = '<!-- CRITICAL_CSS_START -->';
const END_MARKER = '<!-- CRITICAL_CSS_END -->';

function compileCriticalCSS() {
  try {
    const result = sass.compile(CRITICAL_SCSS, {
      style: 'compressed',
      loadPaths: [path.join(ROOT_DIR, '_sass')]
    });
    return result.css;
  } catch (error) {
    console.error('Error compiling critical CSS:', error.message);
    process.exit(1);
  }
}

function updateHeadHTML(criticalCSS) {
  let headContent = fs.readFileSync(HEAD_HTML, 'utf-8');

  const styleTag = `${START_MARKER}\n<style>${criticalCSS}</style>\n${END_MARKER}`;

  // Check if markers already exist
  if (headContent.includes(START_MARKER) && headContent.includes(END_MARKER)) {
    // Replace existing critical CSS
    const regex = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`, 'g');
    headContent = headContent.replace(regex, styleTag);
  } else {
    // Insert after the comment placeholder
    const placeholder = '<!-- Critical CSS inlined for instant rendering -->';
    if (headContent.includes(placeholder)) {
      headContent = headContent.replace(placeholder, `${placeholder}\n${styleTag}`);
    } else {
      console.error('Could not find placeholder for critical CSS in head.html');
      process.exit(1);
    }
  }

  fs.writeFileSync(HEAD_HTML, headContent);
}

function main() {
  console.log('Compiling critical CSS...');
  const criticalCSS = compileCriticalCSS();

  console.log('Updating head.html with inline critical CSS...');
  updateHeadHTML(criticalCSS);

  console.log(`✓ Critical CSS inlined (${criticalCSS.length} bytes)`);
}

main();
