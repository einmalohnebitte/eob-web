import { TwInput } from "@/components/Forms/FieldInput";
import { useTranslations } from "@/hooks/useTranslations";
import type { Maybe } from "@/server/generated/graphql";
import React from "react";
import { MdSearch } from "react-icons/md";

export const Search: React.FC<{
  suggestions?: (Maybe<string> | undefined)[];
  search: string;
  onSearch?: (s: string) => void;
  disabled?: boolean;
}> = ({ search, onSearch, disabled }) => {
  const intl = useTranslations();
  return (
    <div
      className={`relative inline-flex w-full flex-col justify-center text-gray-500 `}
    >
      <div className={`relative`}>
        <input
          type="text"
          className={`pl-8 ${TwInput}`}
          name="search"
          placeholder={intl("SEARCH")}
          disabled={disabled}
          onChange={(e) => onSearch?.(e.target?.value)}
          value={search ?? ""}
        />
        <MdSearch className="absolute top-5 left-2.5 h-4 w-4" />
      </div>
    </div>
  );
};
