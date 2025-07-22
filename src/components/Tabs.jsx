function Tabs({ files, activeFileId, onTabClick }) {
  const getFileIcon = (language) => {
    switch (language) {
      case "html":
        return "🌐";
      case "css":
        return "🎨";
      case "javascript":
        return "⚡";
      default:
        return "📄";
    }
  };

  return (
    <div className="flex bg-gray-800 border-b border-gray-700">
      {files.map(file => (
        <button
          key={file.id}
          onClick={() => onTabClick(file.id)}
          className={`flex items-center px-7 py-4 text-sm border-r border-gray-700 hover:bg-gray-700 ${
            activeFileId === file.id 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-800 text-gray-300'
          }`}
        >
          <span className="mr-2">{getFileIcon(file.language)}</span>
          {file.name}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
