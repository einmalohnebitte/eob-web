import classNames from "classnames";
import { ErrorMessage, Field } from "formik";
import React from "react";
import { BrandColors } from "../@UI/CardWrapper";

type PropType = {
  field: string;
  label: string;
  checkedColor: BrandColors;
};

export const FieldCheckbox: React.FC<PropType> = ({
  field,
  label,
  checkedColor,
}) => (
  <div className="m-2">
    <ErrorMessage
      render={(msg) => <p className="text-xs italic text-red-500">{msg}</p>}
      name={field}
    />

    <div className="mt-6 flex">
      <label className="flex items-center" htmlFor={field}>
        <Field
          type="checkbox"
          className={classNames(
            "w-5 h-5 rounded-md border border-gray-400 checked:border-transparent appearance-none focus:outline-none",
            checkedColor === "pink"
              ? `checked:bg-pink-500`
              : checkedColor === "yellow"
              ? `checked:bg-yellow-500`
              : `checked:bg-blue-500`
          )}
          name={field}
          id={field}
        />

        <span
          className="ml-2 font-gt text-gray-700"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </label>
    </div>
  </div>
);
