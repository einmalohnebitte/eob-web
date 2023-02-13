import { FormBase } from "@/components/Forms/FormBase";
import { SendEmailDocument } from "@/components/Forms/sendEmail.local.generated";
import { useTranslations } from "@/hooks/useTranslations";
import { useReactMutation } from "@/hooks/useReactQuery";
import React from "react";
import * as Yup from "yup";

import { H2 } from "../@UI/Texts";
import { FieldArea } from "./FieldArea";
import { FieldInput } from "./FieldInput";

export const FormVerbreiten: React.FC = () => {
  const sendMail = useReactMutation(SendEmailDocument);
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
    <FormBase
      onReset={() => sendMail.reset()}
      isError={!!sendMail.error}
      isSuccess={!!sendMail.data}
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
        const { firstName, lastName, email, postCode, town, message } = values;
        sendMail.mutate({
          email: {
            email,
            subject: `[Verbreiten] ${firstName} ${lastName}`,
            html: ` <h1> ${firstName} ${lastName}</h1><p>Email: ${email} </p><p>Location:  ${postCode}, ${town} </p><p>Message: ${message} </p>`,
          },
        });
      }}
    >
      <H2>{intl("FORM_CONTACT_TITLE")}</H2>
      <div className="flex">
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </div>
      <FieldInput label={intl("FORM_EMAIL")} field="email" />

      <FieldArea
        field="message"
        label={intl("FORM_MOTIVATION")}
        placeholder={intl("FORM_MOTIVATION_CONTENT")}
      />
      <div className="flex">
        <FieldInput
          label={intl("FORM_POSTCODE")}
          field="postCode"
          type="number"
        />
        <FieldInput label={intl("FORM_TOWN")} field="town" />
      </div>
    </FormBase>
  );
};
