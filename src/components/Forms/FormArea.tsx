import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

import { useTranslate } from "../@hooks/useTranslate";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
};

export const FormArea: React.FC<PropType> = ({ field, formik, label }) => {
  const intl = useTranslate();
  return (
    <div css={tw`m-2`}>
      {formik.errors[field] && formik.touched[field] && (
        <p css={tw`text-red-500 text-xs italic`}>{formik.errors[field]}</p>
      )}
      <label
        css={tw`block text-gray-700 text-sm font-bold mb-2`}
        htmlFor={field}
      >
        {field}
      </label>
      <textarea
        css={tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow`}
        name={field}
        id={field}
        onChange={formik.handleChange}
        placeholder={intl.formatMessage({ id: label })}
        value={formik.values[field]}
      />
    </div>
  );
};
