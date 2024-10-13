import React, { useEffect, useRef } from 'react';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import './Result.css';

interface ResultProps {
  xmlPath: string;
}

const Result: React.FC<ResultProps> = ({ xmlPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);

  useEffect(() => {
    const loadAndRender = async () => {
      if (containerRef.current) {
        if (!osmdRef.current) {
          osmdRef.current = new OpenSheetMusicDisplay(containerRef.current);
        }
        try {
          const response = await fetch(xmlPath);
          const xml = await response.text();
          await osmdRef.current.load(xml);
          osmdRef.current.render();
        } catch (error) {
          console.error('Error loading or rendering MusicXML file:', error);
        }
      }
    };

    loadAndRender();

    // Cleanup function
    return () => {
      osmdRef.current?.clear(); // clear the previous rendering
    };
  }, [xmlPath]);

  return (
    <div className="floating-card"> {/* Card wrapper */}
      <div ref={containerRef} className="music-display" /> {/* The container for OSMD */}
    </div>
  );
};

export default Result;
