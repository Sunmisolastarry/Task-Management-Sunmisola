import React from "react";

interface CircularProgressBarProps {
  progress: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
}) => {
  const radius = 50;
  const stroke = 5;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress-container">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#1a1e38"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#546FFF"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default CircularProgressBar;
