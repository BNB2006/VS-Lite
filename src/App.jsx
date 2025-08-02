import CodeEditor from './components/Editor';
import Preview from './components/Preview';
import Tabs from './components/Tabs';
import Header from './components/Header';
import { useFiles } from './hooks/useFiles';
import { useTheme } from './hooks/useTheme';

function App() {
  const { files, activeFile, activeFileId, setActiveFileId, updateFileContent } = useFiles();
  const { theme, toggleTheme } = useTheme();

  const getPreviewHTML = () => {
    const htmlFile = files.find(f => f.language === 'html');
    const cssFile = files.find(f => f.language === 'css');
    const jsFile = files.find(f => f.language === 'javascript');
    
    if (!htmlFile) return '<p>No HTML file found</p>';
    
    let html = htmlFile.content;
    
    if (cssFile && cssFile.content.trim()) {
      html = html.replace('</head>', `  <style>\n${cssFile.content}\n  </style>\n</head>`);
    }
    
    if (jsFile && jsFile.content.trim()) {
      html = html.replace('</body>', `  <script>\n${jsFile.content}\n  </script>\n</body>`);
    }
    
    return html;
  };

  const handleCodeChange = (newCode) => {
    updateFileContent(activeFileId, newCode);
  };

  return (
    <div className="h-screen  text-white flex flex-col overflow-hidden border border-black">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      
      {/* <main className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          <Tabs 
            files={files} 
            activeFileId={activeFileId} 
            onTabClick={setActiveFileId} 
          />
          <div className="flex-1 border-r border-black">
            <CodeEditor 
              code={activeFile?.content || ''} 
              language={activeFile?.language || 'html'}
              theme={theme}
              onChange={handleCodeChange} 
            />
          </div>
        </div>
        
        <div className="flex-1">
          <Preview htmlCode={getPreviewHTML()} />
        </div>
      </main> */}

      <div className='w-full h-full flex justify-'>
        <div className='w-[50%]'>
          <Tabs 
            files={files} 
            activeFileId={activeFileId} 
            onTabClick={setActiveFileId} 
          />
          <div className="border-r border-black h-full w-full">
            <CodeEditor 
              code={activeFile?.content || ''} 
              language={activeFile?.language || 'html'}
              theme={theme}
              onChange={handleCodeChange} 
            />
          </div>
          </div>

        <div className='w-[50%]'><Preview htmlCode={getPreviewHTML()} /></div>
      </div>
    </div>
  );
}

export default App;