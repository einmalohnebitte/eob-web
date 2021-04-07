import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
  value: any;
};

export const FormCheckbox: React.FC<PropType> = ({
  field,
  formik,
  label,
  value,
}) => (
  <div css={tw`m-2`}>
    {formik.errors[field] && formik.touched[field] && (
      <p css={tw`text-red-500 text-xs italic`}>{formik.errors[field]}</p>
    )}
    <div css={tw`flex mt-6`}>
      <label css={tw`flex items-center`}>
        <input
          type="checkbox"
          css={tw`w-5 h-5 border border-gray-300 rounded-md appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none`}
          name={field}
          id={field}
          value={value}
          onChange={formik.handleChange}
        />

        <span css={tw`ml-2`}>{label}</span>
      </label>
    </div>
  </div>
);
