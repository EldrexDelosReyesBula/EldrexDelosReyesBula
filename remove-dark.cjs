const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Remove dark:classes
      // Regex to match dark:something, dark:something/something, dark:something-[something]
      const originalContent = content;
      content = content.replace(/dark:[a-zA-Z0-9_/-]+(?:\[[^\]]+\])?/g, '');
      // Clean up multiple spaces
      content = content.replace(/ +/g, ' ');
      // Clean up spaces before quotes
      content = content.replace(/ "/g, '"');
      content = content.replace(/ '/g, "'");
      content = content.replace(/ }/g, '}');
      content = content.replace(/ \]/g, ']');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
