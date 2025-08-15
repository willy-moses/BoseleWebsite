const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace unescaped apostrophes inside JSX tags
  content = content.replace(/>([^<]*)'([^<]*)</g, (match, p1, p2) => {
    return `>${p1}&apos;${p2}<`;
  });

  // Replace unescaped double quotes inside JSX tags
  content = content.replace(/>([^<]*)"([^<]*)</g, (match, p1, p2) => {
    return `>${p1}&quot;${p2}<`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed quotes in: ${filePath}`);
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fixFile(fullPath);
    }
  });
}

walkDir(componentsDir);
console.log('All components processed!');
