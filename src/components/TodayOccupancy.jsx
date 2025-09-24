import React from "react";

const TodayOccupancy = ({ 
  percentage = 60, 
  size = 150, 
  strokeWidth = 12, 
  color = "#ef4444", 
  backgroundColor = "#fecaca",
  showText = true,
  textColor = "#ef4444",
  animated = true 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Half circle
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size / 2 + strokeWidth / 2 + 15}
        className="overflow-visible"
        viewBox={`0 0 ${size} ${size / 2 + strokeWidth / 2 + 15}`}
      >
        {/* Background Arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
        />
        
        {/* Progress Arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={animated ? "transition-all duration-1000 ease-out" : ""}
        />
      </svg>
      
      {/* Center Text */}
      {showText && (
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-bold"
          style={{ color: textColor, fontSize: '32px' }}
        >
          {percentage}%
        </div>
      )}
    </div>
  );
};

export default TodayOccupancy;