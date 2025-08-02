import { ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Preview({ htmlCode }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && htmlCode) {
      const blob = new Blob([htmlCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      iframe.src = url;
      
      return () => URL.revokeObjectURL(url);
    }
  }, [htmlCode]);

  return (
    <div className="h-full flex flex-col">
      <div className="h-10 border-l bg-gary-700 bg-gray-800 flex items-center gap-3">
          <button disabled className='text-gray-400'><ArrowLeft size={14}/></button>
          <button disabled className='text-gray-400'><ArrowRight size={14}/></button>
          <button disabled className='text-gray-400'><RefreshCcw size={14}/></button>
          <div className='bg-gray-700'>http://127.0.0.1:3000/index.html</div>
      </div>
      
      <div className='h-full'>
        <iframe
        ref={iframeRef}
        className="w-full h-full border-none overflow-y-auto"
        title="Live Preview"
        sandbox="allow-scripts"
      /></div>
      
    </div>
  );
}

export default Preview;