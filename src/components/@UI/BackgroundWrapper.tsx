import React from "react";

export const BackgroundBlueWrapper: React.FC = ({ children }) => (
  <div className="bg-gradient-to-b from-blue-200 to-white">{children}</div>
);

export const BackgroundPinkWrapper: React.FC = ({ children }) => (
  <div className="bg-gradient-to-b from-pink-200 to-white">{children}</div>
);

export const BackgroundYellowWrapper: React.FC = ({ children }) => (
  <div className="bg-gradient-to-b from-yellow-200 to-white">{children}</div>
);
