import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

import { useTranslate } from "../@hooks/useTranslate";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  type?: "text" | "number";
  label: string;
};

export const FormInput: React.FC<PropType> = ({
  field,
  formik,
  label,
  type = "text",
}) => {
  const intl = useTranslate();
  return (
    <div css={tw`m-2`}>
      {formik.errors[field] && formik.touched[field] && (
        <p css={tw`text-red-500 text-xs italic`}>{formik.errors[field]}</p>
      )}
      <label css={tw`block`} htmlFor={field}>
        <span css={tw`text-gray-700`}> {field}</span>
        <input
          css={tw`form-input mt-1 block w-full`}
          name={field}
          id={field}
          onChange={formik.handleChange}
          placeholder={intl.formatMessage({ id: label })}
          type={type}
          value={formik.values[field]}
        />
      </label>
    </div>
  );
};
