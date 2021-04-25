import { BaseForm, FormError } from "@/components/Forms/BaseForm";
import { FieldInput } from "@/components/Forms/FieldInput";
import { SubscribeNewsletterDocument } from "@/components/Forms/newsletter.local.generated";
import { useReactMutation } from "@/components/useReactQuery";
import { useTranslations } from "@/translate";
import React from "react";
import tw from "twin.macro";
import * as Yup from "yup";

export const NewsletterForm: React.FC = () => {
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

  if (sendMail.data) {
    return (
      <div css={tw`flex items-center justify-center`}>
        {intl("FORM_CONTACT_SUCCESS")}
      </div>
    );
  }

  if (sendMail.error) {
    return <FormError color={"pink"} onReset={() => sendMail.reset()} />;
  }

  return (
    <BaseForm
      color="pink"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        consent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { consent, ...rest } = values;
        sendMail.mutate({ user: rest });
      }}
    >
      <div css={tw`flex`}>
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </div>
      <FieldInput label={intl("FORM_EMAIL")} field="email" />
    </BaseForm>
  );
};