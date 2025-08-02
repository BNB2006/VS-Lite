import { useState } from 'react';

const defaultFiles = [
  {
    id: 'html',
    name: 'index.html',
    language: 'html',
    content: `<!DOCTYPE html>
<html>
<head>
    <title>My Project</title>
</head>
<body>
    <h1>Welcome to <span>Visual studio Code</span>!</h1>
    <div id="counter">0</div>
    <button onclick="incrementCounter()">Count</button>
    
</body>
</html>`
  },
  {
    id: 'css',
    name: 'style.css',
    language: 'css',
    content: `body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 100px;
    background-color: rgb(175, 230, 211);
}
#counter {
    font-size: 48px;
    margin: 20px;
}
button {
    font-size: 24px;
    padding: 10px 20px;
}

span{
    color: rgb(47, 199, 199);
}

#counter{
    color: red;
}`
  },
  {
    id: 'js',
    name: 'script.js',
    language: 'javascript',
    content: `let count = 0;

function incrementCounter(){
    count++;
    document.getElementById('counter').textContent = count;
}`
  }
];

export function useFiles() {
  const [files, setFiles] = useState(defaultFiles);
  const [activeFileId, setActiveFileId] = useState('html');

  const activeFile = files.find(f => f.id === activeFileId);

  const updateFileContent = (id, content) => {
    setFiles(files.map(file => 
      file.id === id ? { ...file, content } : file
    ));
  };

  return {
    files,
    activeFile,
    activeFileId,
    setActiveFileId,
    updateFileContent
  };
}