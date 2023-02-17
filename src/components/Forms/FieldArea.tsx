import { TwInput } from "@/components/Forms/FieldInput";
import { ErrorMessage, useField } from "formik";
import React from "react";

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
    <div className={`m-2`}>
      <ErrorMessage
        render={(msg) => <p className="text-xs italic text-red-500">{msg}</p>}
        name={field}
      />
      <label className="mb-2 block font-gt text-gray-700" htmlFor={field}>
        {label}
      </label>
      <textarea
        className={TwInput}
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
