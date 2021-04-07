import { useTranslations } from "@/translate";
import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  type?: "text" | "number";
  label: string;
};

export const TwInput = tw`text-xl font-lemonism  border-solid border-gray-400 leading-6 p-3 rounded mt-1 block w-full focus:border-blue-800`;

export const FormInput: React.FC<PropType> = ({
  field,
  formik,
  label,
  type = "text",
}) => {
  const intl = useTranslations();
  return (
    <div css={tw`m-2`}>
      {formik.errors[field] && formik.touched[field] && (
        <p css={tw`text-red-500 text-xs italic`}>{formik.errors[field]}</p>
      )}
      <label css={tw`block`} htmlFor={field}>
        <span css={tw`text-gray-700`}> {field}</span>
        <input
          css={TwInput}
          name={field}
          id={field}
          onChange={formik.handleChange}
          placeholder={intl(label as any)}
          type={type}
          value={formik.values[field]}
        />
      </label>
    </div>
  );
};
