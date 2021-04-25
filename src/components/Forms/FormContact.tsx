import { BaseForm } from "@/components/Forms/BaseForm";
import { useTranslations } from "@/translate";
import React from "react";
import tw from "twin.macro";
import * as Yup from "yup";

import { FieldArea } from "./FieldArea";
import { FieldInput } from "./FieldInput";

export const FormContact: React.FC = () => {
  const intl = useTranslations();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(50, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    lastName: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(50, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    email: Yup.string()
      .email(intl("FORM_VALIDATION_EMAIL"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    message: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(500, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    postCode: Yup.number()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(999999, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    town: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(50, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    consent: Yup.boolean()
      .oneOf([true], intl("FORM_VALIDATION_REQUIRED"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
  });

  return (
    <BaseForm
      color="pink"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        postCode: (null as any) as number,
        town: "",
        consent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { consent, ...rest } = values;
        console.log(rest);
      }}
    >
      <div css={tw`flex`}>
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </div>
      <FieldInput label={intl("FORM_EMAIL")} field="email" />

      <FieldArea
        field="message"
        label={intl("MESSAGE")}
        placeholder={intl("FORM_MOTIVATION_CONTENT")}
      />
    </BaseForm>
  );
};
