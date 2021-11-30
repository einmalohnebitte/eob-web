import { useTranslations } from "@/hooks/useTranslations";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "twin.macro";
import * as Yup from "yup";

import { ButtonColor, Colors } from "../@UI/Buttons";
import { FieldCheckbox } from "./FieldCheckbox";

export const FormError: React.FC<{
  onReset: () => void;
  color: Colors;
}> = ({ onReset, color }) => {
  const intl = useTranslations();
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center border border-solid p-4`,
        color === "blue" && tw`border-blue-400`,
        color === "yellow" && tw`border-yellow-400`,
        color === "pink" && tw`border-pink-400`,
      ]}
    >
      {intl("FORM_CONTACT_ERROR")}

      <ButtonColor css={tw`mt-4`} color={color} onClick={onReset}>
        {intl("FORM_OK")}
      </ButtonColor>
    </div>
  );
};

export const FormSuccess: React.FC<{ color: Colors }> = ({ color }) => {
  const intl = useTranslations();
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center border border-solid p-4`,
        color === "blue" && tw`border-blue-400`,
        color === "yellow" && tw`border-yellow-400`,
        color === "pink" && tw`border-pink-400`,
      ]}
    >
      {intl("FORM_CONTACT_SUCCESS")}
    </div>
  );
};

interface Props<T> {
  children?: React.ReactNode;
  initialValues: T;
  validationSchema: Yup.SchemaOf<any>;
  color: Colors;
  onSubmit: (values: T) => void;
  onReset: () => void;
  isSuccess: boolean;
  isError: boolean;
}

export const FormBase = <T extends {}>({
  children,
  onSubmit,
  onReset,
  initialValues,
  validationSchema,
  color,
  isSuccess,
  isError,
}: Props<T>): React.ReactElement<any, any> | null => {
  const [captcha, setCaptcha] = useState(false);
  const intl = useTranslations();

  if (isSuccess) {
    return <FormSuccess color={color} />;
  }
  if (isError) {
    return <FormError color={color} onReset={onReset} />;
  }

  return (
    <div css={tw`w-full max-w-sm`}>
      <Formik<T>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => {
          // if (captcha) {
          onSubmit(e);
          // }
        }}
      >
        {() => (
          <Form css={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
            {children}

            <div css={tw`flex m-2`}>
              <ReCAPTCHA
                sitekey="6Ld2iaMUAAAAAKuO6s305VLDpf-iTimNcKH1FS-8"
                onChange={() => setCaptcha(true)}
              />
            </div>

            <FieldCheckbox
              field={"consent"}
              checkedColor={color}
              label={intl("FORM_DATA_POLICY_MESSAGE")}
            />

            <ButtonColor color={color} type="submit">
              {intl("FORM_SEND")}
            </ButtonColor>
          </Form>
        )}
      </Formik>
    </div>
  );
};
