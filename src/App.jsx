import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col'>
     {/* Header */}
      <header className='bg-gray-800 p-4 border-b border-gray-700'>
        <h1 className='text-xl font-bold'>VsCode Lite</h1>
      </header>

      {/* main content  */}
      <main className='flex-1 flex'>
        {/* Editor Area  */}
        <div className="flex-1 bg-gray-900 p-4">
          <h2 className='text-green-400'>Editor will go here</h2>
        </div>

        {/* Preview Area  */}
        <div className="flex-1 bg-white text-black p-4">
          <h2 className='text-blue-600'>Preview will go here</h2>
        </div>
      </main>
    </div>
  )
}

export default App
