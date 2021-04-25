import { ErrorMessage, Field } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  label: string;
  checkedColor: "pink" | "blue" | "yellow";
};

export const FieldCheckbox: React.FC<PropType> = ({
  field,
  label,
  checkedColor,
}) => (
  <div css={tw`m-2`}>
    <ErrorMessage
      render={(msg) => <p className={`text-red-500 text-xs italic`}>{msg}</p>}
      name={field}
    />

    <div css={tw`flex mt-6`}>
      <label css={tw`flex items-center`} htmlFor={field}>
        <Field
          type="checkbox"
          css={[
            tw`w-5 h-5 border border-gray-400 rounded-md appearance-none  checked:border-transparent focus:outline-none`,
            checkedColor === "pink"
              ? tw`checked:bg-pink-500`
              : checkedColor === "yellow"
              ? tw`checked:bg-yellow-500`
              : tw`checked:bg-blue-500`,
          ]}
          name={field}
          id={field}
        />

        <span
          css={tw`text-gray-700 ml-2 font-gt`}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </label>
    </div>
  </div>
);
