import CodeEditor from './components/Editor';
import Preview from './components/Preview';
import Tabs from './components/Tabs';
import { useFiles } from './hooks/useFiles';

function App() {
  const { files, activeFile, activeFileId, setActiveFileId, updateFileContent } = useFiles();

  // Combine files to create preview HTML
  const getPreviewHTML = () => {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'javascript');
    
    if (!htmlFile) return '<p>No HTML file found</p>';
    
    let html = htmlFile.content;
    
    // Inject CSS
    if (cssFile && cssFile.content.trim()) {
      html = html.replace('</head>', `  <style>\n${cssFile.content}\n  </style>\n</head>`);
    }
    
    // Inject JavaScript
    if (jsFile && jsFile.content.trim()) {
      html = html.replace('</body>', `  <script>\n${jsFile.content}\n  </script>\n</body>`);
    }
    
    return html;
  };

  const handleCodeChange = (newCode) => {
    updateFileContent(activeFileId, newCode);
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">VSCode Lite</h1>
      </header>
      
      <main className="flex-1 flex">
        {/* Editor Side */}
        <div className="flex-1 flex flex-col">
          <Tabs 
            files={files} 
            activeFileId={activeFileId} 
            onTabClick={setActiveFileId} 
          />
          <div className="flex-1">
            <CodeEditor 
              code={activeFile?.content || ''} 
              language={activeFile?.language || 'html'}
              onChange={handleCodeChange} 
            />
          </div>
        </div>
        
        {/* Preview Side */}
        <div className="flex-1">
          <Preview htmlCode={getPreviewHTML()} />
        </div>
      </main>
    </div>
  );
}

export default App;