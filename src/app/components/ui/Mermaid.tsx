"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initMermaid = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: true,
          theme: "base", // Use base theme for better customizability
          securityLevel: "loose",
          fontFamily: "inherit",
          themeVariables: {
            primaryColor: "#3b82f6",
            primaryTextColor: "#171717", // neutral-900
            primaryBorderColor: "#3b82f6",
            lineColor: "#525252", // neutral-600
            secondaryColor: "#e5e7eb", // gray-200
            tertiaryColor: "#f9fafb", // gray-50
            fontSize: "16px",
          },
          flowchart: {
            padding: 20,
            nodeSpacing: 50,
            rankSpacing: 50,
            htmlLabels: true,
            curve: "basis",
          },
        });

        if (ref.current) {
          const { svg } = await mermaid.render(
            `mermaid-${Math.floor(Math.random() * 10000)}`,
            chart
          );
          ref.current.innerHTML = svg;
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Mermaid loading/render error:", error);
      }
    };

    initMermaid();
  }, [chart]);

  return (
    <div className="flex justify-center my-10 p-6 bg-gray-50 rounded-2xl border border-gray-200 overflow-x-auto shadow-sm">
      {/* Placeholder Loading State */}
      {!isLoaded && (
        <div className="h-48 w-full animate-pulse bg-gray-200 rounded-lg flex items-center justify-center text-neutral-400 text-sm">
          Loading Diagram...
        </div>
      )}

      {/* Mermaid Diagram Container - Always present but hidden until loaded */}
      <div 
        ref={ref} 
        className={`mermaid transition-opacity duration-500 ${isLoaded ? 'opacity-100 block' : 'opacity-0 hidden'}`}
      />
    </div>
  );
}
