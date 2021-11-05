import React from "react";

export const AnchorPointer: React.FC<{ id: string }> = ({ id }) => (
  <div
    id={id}
    css={`
      display: block;
      position: relative;
      top: -100px;
      visibility: hidden;
    `}
  />
);
