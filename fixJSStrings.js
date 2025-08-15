const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function fixJSStrings(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix &apos; inside JS strings (single-quoted)
  content = content.replace(/'([^']*?)&apos;([^']*?)'/g, (match, p1, p2) => {
    return `'${p1}\\'${p2}'`;
  });

  // Fix &quot; inside JS strings (double-quoted)
  content = content.replace(/"([^"]*?)&quot;([^"]*?)"/g, (match, p1, p2) => {
    return `"${p1}\\"${p2}"`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed JS strings in: ${filePath}`);
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fixJSStrings(fullPath);
    }
  });
}

walkDir(componentsDir);
console.log('All JS strings processed!');
