import React from "react";
import tw from "twin.macro";

import { H2, H3 } from "./Texts";

export const Card: React.FC<{
  img?: string;
  title: string;
  subtitle?: string;
  message?: string;
  onClick?: (event: any) => void;
  color?: "pink" | "blue" | "yellow";
}> = ({ img, onClick, title, message, subtitle, color }) => {
  if (!color) {
    const index = Math.round(Math.random() * 100) % 3;
    color = index === 0 ? "blue" : index === 1 ? "pink" : "yellow";
  }
  return (
    <div
      role="presentation"
      onClick={onClick}
      css={`
        box-shadow: 0 10px 15px -3px ${color === "blue" ? "#1d4ed8" : color === "yellow" ? "#b45309" : "#be185d"},
          0 4px 6px -2px ${color === "blue" ? "#dbeafe" : color === "yellow" ? "#fef3c7" : "#fce7f3"};

        ${tw` cursor-pointer max-w-md mx-auto bg-white rounded   overflow-hidden m-4   `};
      `}
    >
      {img && (
        <img
          css={tw`h-52 w-full object-cover `}
          src={img}
          alt="Man looking at item at a store"
        />
      )}
      <div css={tw`p-4`}>
        <i css={tw`text-gray-500`}>{subtitle}</i>
        <H2 css={tw`p-4`}>{title}</H2>
        {message && <p css={tw`mt-2 text-gray-500`}>{message}</p>}
      </div>
    </div>
  );
};

export const CardHorizontal: React.FC<{
  img?: string;
  title: string;
  message?: string;
  onClick?: (event: any) => void;
}> = ({ img, onClick, title, message, children }) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      data-cy="card"
      css={[
        tw`max-w-2xl bg-white rounded-xl shadow-md overflow-hidden`,
        onClick && tw`cursor-pointer`,
      ]}
    >
      <div css={tw`flex`}>
        <div css={tw`flex-shrink-0`}>
          {img && (
            <img alt="Card" css={tw`w-32 h-32  object-cover `} src={img} />
          )}
          {children}
        </div>
        <div css={tw`p-4`}>
          {message && <p css={tw`mt-2 text-gray-500`}>{message}</p>}
          <H3>{title}</H3>
        </div>
      </div>
    </div>
  );
};
