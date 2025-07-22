import Editor from '@monaco-editor/react';
import { useState } from 'react';

function CodeEditor({ code, onChange }) {
  return (
    <div className="h-full">
      <Editor
        height="100%"
        defaultLanguage="html"
        value={code}
        onChange={onChange}
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