import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
  value: any;

  checkedColor: "pink" | "blue" | "yellow";
};

export const FormCheckbox: React.FC<PropType> = ({
  field,
  formik,
  label,
  value,
  checkedColor,
}) => (
  <div css={tw`m-2`}>
    {formik.errors[field] && formik.touched[field] && (
      <p css={tw`text-red-500 text-xs italic`}>{formik.errors[field]}</p>
    )}
    <div css={tw`flex mt-6`}>
      <label css={tw`flex items-center`}>
        <input
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
          value={value}
          onChange={formik.handleChange}
        />

        <span
          css={tw`text-gray-700 ml-2 font-gt`}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </label>
    </div>
  </div>
);
