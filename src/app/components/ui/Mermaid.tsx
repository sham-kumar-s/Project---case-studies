"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
}

mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "inherit",
  themeVariables: {
    primaryColor: "#3b82f6",
    primaryTextColor: "#fff",
    primaryBorderColor: "#3b82f6",
    lineColor: "#6b7280",
    secondaryColor: "#1f2937",
    tertiaryColor: "#111827",
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

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
      // We need to force a re-render because mermaid's contentLoaded 
      // might not catch dynamically added content in some Next.js scenarios
      const renderChart = async () => {
        try {
          const { svg } = await mermaid.render(
            `mermaid-${Math.floor(Math.random() * 10000)}`,
            chart
          );
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid render error:", error);
        }
      };
      renderChart();
    }
  }, [chart]);

  return (
    <div className="flex justify-center my-10 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 overflow-x-auto">
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
}
