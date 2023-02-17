import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";

import { Button, Colors } from "../@UI/Buttons";
import { FieldCheckbox } from "./FieldCheckbox";

export const FormError: React.FC<{
  onReset: () => void;
  color: Colors;
}> = ({ onReset, color }) => {
  const intl = useTranslations();
  return (
    <div
      className={classNames(
        `flex flex-col items-center justify-center border border-solid p-4`,
        color === "blue" && `border-blue-400`,
        color === "yellow" && `border-yellow-400`,
        color === "pink" && `border-pink-400`
      )}
    >
      {intl("FORM_CONTACT_ERROR")}

      <Button className="mt-4" color={color} onClick={onReset}>
        {intl("FORM_OK")}
      </Button>
    </div>
  );
};

export const FormSuccess: React.FC<{ color: Colors }> = ({ color }) => {
  const intl = useTranslations();
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center border border-solid p-4",
        color === "blue" && `border-blue-400`,
        color === "yellow" && `border-yellow-400`,
        color === "pink" && `border-pink-400`
      )}
    >
      {intl("FORM_CONTACT_SUCCESS")}
    </div>
  );
};

interface Props<T, Q extends Yup.Maybe<Yup.AnyObject>> {
  children?: React.ReactNode;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<Q>;
  color: Colors;
  onSubmit: (values: T) => void;
  onReset: () => void;
  isSuccess: boolean;
  isError: boolean;
}

export const FormBase = <T extends {}, Q extends Yup.Maybe<Yup.AnyObject>>({
  children,
  onSubmit,
  onReset,
  initialValues,
  validationSchema,
  color,
  isSuccess,
  isError,
}: Props<T, Q>): React.ReactElement<any, any> | null => {
  const [captcha, setCaptcha] = useState(false);
  const intl = useTranslations();

  if (isSuccess) {
    return <FormSuccess color={color} />;
  }
  if (isError) {
    return <FormError color={color} onReset={onReset} />;
  }

  return (
    <div className="w-full max-w-sm">
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
          <Form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
            {children}

            <div className="m-2 flex">
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

            <Button color={color} type="submit">
              {intl("FORM_SEND")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
