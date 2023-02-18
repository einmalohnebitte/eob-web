import React from "react";
import { MdLanguage } from "react-icons/md";
import styles from "./DropDown.module.css";

export const DropDownItem: React.FC<{
  text: string;
  onClick: () => void;
}> = ({ text, onClick }) => (
  <li
    className={` block whitespace-nowrap bg-gray-100 py-2 px-4 hover:bg-gray-200`}
    onClick={onClick}
    role="presentation"
  >
    {text}
  </li>
);

export const DropDown: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={`${styles.Control} relative inline-block `}>
    <button className={`inline-flex items-center rounded p-2`}>
      <MdLanguage size={"1.6em"} />
    </button>
    <ul className={`${styles.Ul} absolute hidden pt-1 text-gray-700`}>
      {children}
    </ul>
  </div>
);
