"use client";

import * as React from "react";

type ProgressProps = {
  value: number; // Value between 0 and 100
  className?: string;
  height?: string; // Height of the progress bar
  color?: string; // Progress bar color
  showLabel?: boolean; // Show percentage label
  indeterminate?: boolean; // Indeterminate state
};

const Progress: React.FC<ProgressProps> = ({
  value = 0,
  className = "",
  height = "8px",
  color = "bg-blue-500",
  showLabel = false,
  indeterminate = false,
}) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-full bg-gray-200 ${className}`} style={{ height }}>
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`absolute top-0 left-0 h-full ${color} transition-all duration-300`}
        style={{
          width: indeterminate ? "100%" : `${value}%`,
          animation: indeterminate ? "indeterminate 1.5s infinite linear" : undefined,
        }}
      ></div>
      {showLabel && (
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-black">
          {indeterminate ? "Loading..." : `${value}%`}
        </span>
      )}

      <style jsx>{`
        @keyframes indeterminate {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Progress;
