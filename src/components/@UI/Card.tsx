import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";

import { H2, H3 } from "./Texts";

export const Card: React.FC<{
  img?: string;
  title: string;
  linkTitle?: string;
  linkTo?: string;
  message?: string;
  messageHtml?: string;
  resize?: boolean;
  color?: "pink" | "blue" | "yellow";
  onClick?: (event: any) => void;
}> = ({
  img,
  title,
  message,
  linkTo,
  linkTitle,
  color,
  resize,
  onClick,
  messageHtml,
}) => {
  if (!color) {
    const index = Math.round(Math.random() * 100) % 3;
    color = index === 0 ? "blue" : index === 1 ? "pink" : "yellow";
  }
  const router = useRouter();
  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else {
          if (linkTo) {
            router.push(linkTo);
          }
        }
      }}
      css={[
        tw`flex-1 flex flex-col cursor-pointer max-w-md mx-auto bg-white border-l-4  border-b-8 border-r-4 border-t-2  overflow-hidden m-4   `,
        color === "blue"
          ? tw`border-blue-500`
          : color === "pink"
          ? tw`border-pink-500`
          : tw`border-yellow-600`,
      ]}
    >
      {img && (
        <img
          css={[tw`h-52 `, !resize && tw` w-full object-cover `]}
          src={img}
          alt="Man looking at item at a store"
        />
      )}
      <div css={tw`p-4`}>
        <H2 css={tw`p-4`}>{title}</H2>
        {message && <p css={tw`mt-2 text-gray-500`}>{message}</p>}
        {messageHtml && (
          <div
            css={tw`mt-2 text-gray-500`}
            dangerouslySetInnerHTML={{ __html: messageHtml }}
          />
        )}
        {linkTo && (
          <Link href={linkTo ?? ""}>
            <a
              css={[
                tw`mt-2 inline-block hover:underline text-right`,
                color === "blue"
                  ? tw`text-blue-500`
                  : color === "pink"
                  ? tw`text-pink-500`
                  : tw`text-yellow-600`,
              ]}
            >
              {linkTitle}
            </a>
          </Link>
        )}
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
