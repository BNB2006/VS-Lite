import Editor from '@monaco-editor/react';
import { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello from VSCode Lite!</h1>
</body>
</html>`);

  return (
    <div className="h-full">
      <Editor
        height="100%"
        defaultLanguage="html"
        value={code}
        onChange={setCode}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}

export default CodeEditor;