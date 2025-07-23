import { Sun, Moon, Code } from 'lucide-react';

function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'vs-dark';
  
  return (
    <header className="bg-gray-800 p-4 border-b border-gray-600 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Code size={24} />
        <h1 className="text-xl font-bold">VSCode Lite</h1>
      </div>
      
      <button
        onClick={onToggleTheme}
        className="p-2 hover:bg-gray-700 rounded-md transition-colors"
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}

export default Header;