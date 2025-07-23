import { Sun, Moon } from 'lucide-react';

function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'vs-dark';
  
  return (
    <header className="bg-gray-800 p-4 border-b border-gray-600 flex items-center justify-between" style={{padding:5}}>
      <div className="flex items-center">
        <img src="/vs-code.svg" alt="logo" className='h-8'/>
        <h1 className="text-xl font-bold">VSCode Lite</h1>
      </div>
      
      <button
        onClick={onToggleTheme}
        className="bg-gray-700 h-10 w-10 rounded-md transition-colors flex items-center justify-center"
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        {isDark ? <Sun size={20} className='text-yellow-200'/> : <Moon size={20} className='text-blue-300'/>}
      </button>
    </header>
  );
}

export default Header;