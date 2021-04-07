import { TwInput } from "@/components/Forms/FormInput";
import type { Maybe } from "@/generated/graphql";
import { useTranslations } from "@/translate";
import React from "react";
import { MdSearch } from "react-icons/md";
import tw from "twin.macro";

export const Search: React.FC<{
  suggestions?: (Maybe<string> | undefined)[];
  search: string;
  onSearch?: (s: string) => void;
  disabled?: boolean;
}> = ({ search, onSearch, disabled }) => {
  const intl = useTranslations();
  return (
    <div
      css={tw`w-full inline-flex flex-col justify-center relative text-gray-500 `}
    >
      <div css={tw`relative`}>
        <input
          type="text"
          css={`
            border-width: 1px;
            ${TwInput}
            ${tw` pl-8`}
          `}
          name="search"
          placeholder={intl("SEARCH")}
          disabled={disabled}
          onChange={(e) => onSearch?.(e.target?.value)}
          value={search ?? ""}
        />
        <MdSearch css={tw`w-4 h-4 absolute left-2.5 top-5 `} />
      </div>
      {/* <ul css={tw`bg-white border border-gray-100 w-full mt-2`}>
        {suggestions?.map((s) => (
          <li
            key={s}
            css={tw`pl-8 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-gray-50 hover:text-gray-900`}
          >
            {s}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
