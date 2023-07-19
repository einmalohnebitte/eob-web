import { FormBase } from "@/components/Forms/FormBase";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import * as Yup from "yup";

import { FieldArea } from "./FieldArea";
import { FieldInput } from "./FieldInput";
import { useSendEmail } from "@/components/Forms/useSendEmail";
import { Flex } from "../@UI/Flex";

export const FormContact: React.FC = () => {
  const { isError, isSuccess, send, reset } = useSendEmail();
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
      onReset={reset}
      isError={isError}
      isSuccess={isSuccess}
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
        send({
          email,
          subject: `[Kontakt]: ${firstName}`,
          html: `
          Hallo,

          vielen Dank für deine Anfrage. Wir befinden uns vom 01.07.-31.08.2023 in der Sommerpause. Wir bitten Dich also um etwas Geduld, falls Du mal länger auf eine Antwort von uns warten solltest.

          Herzliche Grüße

          das Einmal ohne, bitte- Team

          <p>${firstName} ${lastName} - ${email}</p><p>${message}</p>`,
        });
      }}
    >
      <Flex>
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </Flex>
      <FieldInput label={intl("FORM_EMAIL")} field="email" />

      <FieldArea field="message" label={intl("FORM_MESSAGE")} />

      <div className="m-2">
        <span className="mt-6 font-gt text-gray-700">
          Einmal ohne, bitte befindet sich vom 01.07.-31.08.2023 in der Sommerpause.<br />
          Wir arbeiten in dieser Zeit mit weniger Kapazitäten. Antworten auf Anfragen können daher etwas länger dauern. Danke für Dein Verständnis. Wir wünschen einen müllfreien Sommer.
        </span>
      </div>
    </FormBase>
  );
};
