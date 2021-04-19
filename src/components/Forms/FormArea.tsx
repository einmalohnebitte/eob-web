import { TwInput } from "@/components/Forms/FormInput";
import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
  placeholder?: string;
};

export const FormArea: React.FC<PropType> = ({
  field,
  formik,
  label,
  placeholder,
}) => {
  return (
    <div css={tw`m-2`}>
      {formik.errors[field] && formik.touched[field] && (
        <p css={tw`text-red-500 text-xs italic`}>{formik.errors[field]}</p>
      )}
      <label css={tw`block text-gray-700 font-gt   mb-2`} htmlFor={field}>
        {label}
      </label>
      <textarea
        css={`
          border-width: 1px;
          ${TwInput}
        `}
        rows={6}
        cols={50}
        name={field}
        id={field}
        onChange={formik.handleChange}
        placeholder={placeholder ?? ""}
        value={formik.values[field]}
      />
    </div>
  );
};
