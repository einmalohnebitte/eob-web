import React from "react";
import { MdLanguage } from "react-icons/md";
import styles from "./DropDown.module.scss";

export const DropDownItem: React.FC<{
  text: string;
  onClick: () => void;
}> = ({ text, onClick }) => (
  <li
    className={` bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-nowrap`}
    onClick={onClick}
    role="presentation"
  >
    {text}
  </li>
);

export const DropDown: React.FC = ({ children }) => (
  <div className={`${styles.Control} inline-block relative `}>
    <button className={`py-2 px-2 rounded inline-flex items-center`}>
      <MdLanguage size={"1.6em"} />
    </button>
    <ul className={`${styles.Ul} absolute hidden text-gray-700 pt-1`}>
      {children}
    </ul>
  </div>
);
