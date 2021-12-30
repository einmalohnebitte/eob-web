import { FieldInput } from "@/components/Forms/FieldInput";
import { FormBase } from "@/components/Forms/FormBase";
import { SubscribeNewsletterDocument } from "@/components/Forms/newsletter.local.generated";
import { useTranslations } from "@/hooks/useTranslations";
import { useReactMutation } from "@correttojs/next-utils/useReactQuery";
import React from "react";
import * as Yup from "yup";

export const FormNewsletter: React.FC = () => {
  const sendMail = useReactMutation(SubscribeNewsletterDocument);

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
    consent: Yup.boolean()
      .oneOf([true], intl("FORM_VALIDATION_REQUIRED"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
  });

  return (
    <FormBase
      onReset={() => sendMail.reset()}
      isError={!!sendMail.error}
      isSuccess={!!sendMail.data}
      color="pink"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        consent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { consent, ...rest } = values;
        sendMail.mutate({ user: rest });
      }}
    >
      <div className="flex">
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </div>
      <FieldInput label={intl("FORM_EMAIL")} field="email" />
    </FormBase>
  );
};
