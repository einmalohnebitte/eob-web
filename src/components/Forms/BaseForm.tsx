import { useTranslations } from "@/translate";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "twin.macro";
import * as Yup from "yup";

import { ButtonColor, Colors } from "../@UI/Buttons";
import { FieldCheckbox } from "./FieldCheckbox";

interface Props<T> {
  children?: React.ReactNode;
  initialValues: T;
  validationSchema: Yup.SchemaOf<any>;
  color: Colors;
  onSubmit: (values: T) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const BaseForm = <T extends {}>({
  children,
  onSubmit,
  initialValues,
  validationSchema,
  color,
}: Props<T>): React.ReactElement<any, any> | null => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [captcha, setCaptcha] = useState(false);
  const intl = useTranslations();

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

export const FormError: React.FC<{
  onReset: () => void;
  color: "pink" | "blue" | "yellow";
}> = ({ onReset, color }) => {
  const intl = useTranslations();
  return (
    <div css={tw`flex items-center justify-center`}>
      {intl("FORM_CONTACT_ERROR")}

      <ButtonColor color={color} onClick={onReset}>
        {intl("FORM_OK")}
      </ButtonColor>
    </div>
  );
};
