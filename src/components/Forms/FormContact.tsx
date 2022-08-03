import { FormBase } from "@/components/Forms/FormBase";
import { SendEmailDocument } from "@/components/Forms/sendEmail.local.generated";
import { useTranslations } from "@/hooks/useTranslations";
import { useReactMutation } from "@correttojs/next-utils/useReactQuery";
import React from "react";
import * as Yup from "yup";

import { FieldArea } from "./FieldArea";
import { FieldInput } from "./FieldInput";

export const FormContact: React.FC = () => {
  const sendEmail = useReactMutation(SendEmailDocument);
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
    consent: Yup.boolean()
      .oneOf([true], intl("FORM_VALIDATION_REQUIRED"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
  });

  return (
    <FormBase
      onReset={() => sendEmail.reset()}
      isError={!!sendEmail.error}
      isSuccess={!!sendEmail.data}
      color="pink"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        postCode: null as any as number,
        town: "",
        consent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { email, firstName, lastName, message } = values;
        sendEmail.mutate({
          email: {
            email,
            subject: `[Kontakt]: ${firstName}`,
            html: `<p>${firstName} ${lastName} - ${email}</p><p>${message}</p>`,
          },
        });
      }}
    >
      <div className="flex">
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </div>
      <FieldInput label={intl("FORM_EMAIL")} field="email" />

      <FieldArea field="message" label={intl("FORM_MESSAGE")} />
    </FormBase>
  );
};
