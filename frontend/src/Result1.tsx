import React, { useEffect, useRef, useState } from "react";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import "./Result.css"; // Import the CSS file for styles
import "./Split.css"; // Import the CSS file
import Navbar from "./Navbar";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

interface ResultProps {
  xmlPath: string;
}

const Result: React.FC<ResultProps> = () => {
  const xmlPath = 'http://localhost:5000/xml/1'
  const containerRef = useRef<HTMLDivElement>(null);
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);
  const [containerSize, setContainerSize] = useState({
    width: "125%",
    height: "auto",
  });

  useEffect(() => {
    const loadAndRender = async () => {
      if (containerRef.current) {
        if (!osmdRef.current) {
          osmdRef.current = new OpenSheetMusicDisplay(containerRef.current, {
            autoResize: true, // Enable automatic resizing of the sheet music
          });
        }
        try {
          const response = await fetch(xmlPath);
          const xml = await response.text();
          await osmdRef.current.load(xml);
          osmdRef.current.render();

          // After rendering, get the actual size of the content
          const svgElement = containerRef.current.querySelector("svg");
          if (svgElement) {
            const { width, height } = svgElement.getBoundingClientRect();
            setContainerSize({
              width: `${width * 0.75}px`,
              height: `${height * 0.75}px`,
            });
          }
        } catch (error) {
          console.error("Error loading or rendering MusicXML file:", error);
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
    <div className="split-background h-full w-full">
      <div className="page-container bg-transparent flex flex-col items-center">
        <Navbar />
        <div className="floating-card" style={containerSize}>
          {" "}
          {/* Dynamic card size */}
          <div ref={containerRef} className="music-display" />{" "}
          {/* The container for OSMD */}
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: "18px", fontFamily: "Poppins" }} // Adjust font size here
          component={Link}
          to="/"
        >
          Generate Another
        </Button>
      </div>
    </div>
  );
};

export default Result;
