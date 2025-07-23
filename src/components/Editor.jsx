import Editor from '@monaco-editor/react';

function CodeEditor({ code, language, theme, onChange }) {
  return (
    <div className="h-full">
      <Editor
        height="100%"
        language={language}
        value={code}
        onChange={onChange}
        theme={theme}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;