import { TwInput } from "@/components/Forms/FormInput";
import { ErrorMessage, useField } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  label: string;
  placeholder?: string;
};

export const FieldArea: React.FC<PropType> = ({
  field,
  label,
  placeholder,
}) => {
  const [formikProps] = useField(field);
  return (
    <div css={tw`m-2`}>
      <ErrorMessage
        render={(msg) => <p className={`text-red-500 text-xs italic`}>{msg}</p>}
        name={field}
      />
      <label css={tw`block text-gray-700 font-gt   mb-2`} htmlFor={field}>
        {label}
      </label>
      <textarea
        css={`
          border-width: 1px;
          ${TwInput}
        `}
        {...formikProps}
        rows={6}
        cols={50}
        name={field}
        id={field}
        placeholder={placeholder ?? ""}
      />
    </div>
  );
};
