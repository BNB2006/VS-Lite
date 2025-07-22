import { useEffect, useRef } from 'react';

function Preview({ htmlCode }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && htmlCode) {
      // Create a blob URL for the HTML content
      const blob = new Blob([htmlCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      iframe.src = url;
      
      // Cleanup the blob URL
      return () => URL.revokeObjectURL(url);
    }
  }, [htmlCode]);

  return (
    <div className="h-full flex flex-col">
      {/* Preview Header */}
      <div className="bg-gray-100 px-4 py-2 border-b text-gray-700 text-sm">
        📱 Live Preview
      </div>
      
      {/* Preview Content */}
      <iframe
        ref={iframeRef}
        className="flex-1 w-full border-none"
        title="Live Preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}

export default Preview;