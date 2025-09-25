import React from "react";

const LineChart = ({ color = "red", data, id }) => {
  const padding = 3;

  // We'll make chart scalable using viewBox instead of fixed width/height
  const width = 300;   // base width (scales with parent)
  const height = 150;  // base height (scales with parent)

  // Calculate points based on data
  const points = data.map((value, index) => {
    const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
    const y = height - padding - (value / 100) * (height - 2 * padding);
    return { x, y };
  });

  // Calculate line connection points (to touch inner circle edge)
  const linePoints = points.map((point, index) => {
    if (index === 0 || index === points.length - 1) return point;

    const prevPoint = points[index - 1];
    const angle1 = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x);
    const radius = 4;
    const offsetX = Math.cos(angle1) * radius;
    const offsetY = Math.sin(angle1) * radius;

    return {
      x: point.x - offsetX,
      y: point.y - offsetY,
    };
  });

  // Create polyline points string
  const polylinePoints = linePoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white w-full max-w-3xl">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path
            d={`M ${linePoints[0].x},${height - padding} L ${polylinePoints} L ${
              linePoints[linePoints.length - 1].x
            },${height - padding} Z`}
            fill={`url(#${id})`}
          />

          {/* Line */}
          <polyline
            points={polylinePoints}
            stroke={color}
            strokeWidth="2"
            fill="none"
          />

          {/* Points - Only middle circles */}
          {points.map(
            (point, index) =>
              index !== 0 &&
              index !== points.length - 1 && (
                <g key={index}>
                  {/* Outer Circle */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="8"
                    fill="white"
                    stroke={color}
                    strokeWidth="1"
                  />
                  {/* Inner Circle */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="white"
                    stroke={color}
                    strokeWidth="2"
                  />
                </g>
              )
          )}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;
