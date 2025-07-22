import { useState } from 'react'
import CodeEditor from './components/Editor'
import Preview from './components/Preview'

function App() {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<head>
  <title>Hello World</title>
  <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: gray; }
        h1 { color: #333; }
    </style>
</head>
<body>
  <h1>Hello from VSCode Lite</h1>
  <p>Edit the code on the left to see changes here.</p>
</body>
</html>`)

  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col'>
     {/* Header */}
      <header className='bg-gray-800 p-4 border-b border-gray-700'>
        <h1 className='text-xl font-bold'>VsCode Lite</h1>
      </header>

      {/* main content  */}
      <main className='flex-1 flex'>
        {/* Editor Area  */}
        <div className="flex-1">
          <CodeEditor code={htmlCode} onChange={setHtmlCode}/>
        </div>

        {/* Preview Area  */}
        <div className="flex-1 ">
          <Preview htmlCode={htmlCode}/>
        </div>
      </main>
    </div>
  )
}

export default App


