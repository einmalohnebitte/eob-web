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
          Hallo,<br>
          <br>
          vielen Dank für deine Nachricht.<br>
          <br>
          Das Team von Einmal ohne, bitte macht eine kleine Winterpause. Wir sind ab dem 8. Januar wieder am Start und melden uns schnellstmöglich bei dir.<br>
          <br>
          Bis dahin wünschen wir Dir eine schöne Weihnachtszeit und ein entspanntes Jahresende!<br>
          <br>
          Liebe Grüße<br>
          <br>
          Das Team von Einmal ohne, bitte<br>
          <br>
          <br>
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
          Das Team von Einmal ohne, bitte macht eine kleine Winterpause. Wir sind ab dem 8. Januar wieder am Start und beantworten Nachrichten dann schnellstmöglich.<br />
          Bis dahin wünschen wir Dir eine schöne Weihnachtszeit und ein entspanntes Jahresende!
        </span>
      </div>
    </FormBase>
  );
};
