import { useState } from "react";

const defaultFiles = [
  {
    id: "html",
    name: "index.html",
    language: "html",
    content: `<!DOCTYPE html>
<html>
<head>
    <title>My Project</title>
</head>
<body>
    <h1>Welcome to my project!</h1>
    <p>This HTML file works with CSS and JS files.</p>
</body>
</html>`,
  },

  {
    id: "css",
    name: "style.css",
    language: "css",
    content: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #666;
}`,
  },

  {
    id: "js",
    name: "script.js",
    language: "javascript",
    content: `// Welcome to JavaScript!
console.log('Hello from script.js!');

// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.style.cursor = 'pointer';
        h1.onclick = function() {
            alert('Hello from JavaScript! 🎉');
        };
    }
});`,
  },
];


export function useFiles(){
    const [files, setFiles] = useState(defaultFiles);
    const [activeFileId, setActiveFileId] = useState('html');

    const activeFile = files.find(f=> f.id === activeFileId);

    const updateFileContent = (id, content) => {
        setFiles(files.map(file => {
            file.id === id ? {...file, content} : file
        }));
    };

    return{
        files,
        activeFile,
        activeFileId,
        setActiveFileId,
        updateFileContent,
    };
}