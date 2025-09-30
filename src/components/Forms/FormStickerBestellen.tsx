import { FormBaseWithoutCaptcha } from "@/components/Forms/FormBaseWithoutCaptcha";
import { useTranslations } from "@/hooks/useTranslations";
import { ErrorMessage, Field } from "formik";
import React from "react";
import * as Yup from "yup";

import { H2 } from "../@UI/Texts";
import { FieldArea } from "./FieldArea";
import { FieldInput } from "./FieldInput";
import { useSendEmail } from "@/components/Forms/useSendEmail";
import { Flex } from "../@UI/Flex";

export const FormStickerBestellen: React.FC = () => {
  const { isError, isSuccess, send, reset } = useSendEmail();

  const intl = useTranslations();
  const validationSchema = Yup.object().shape({
    shop: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(50, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
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
    address: Yup.string()
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
    message: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(500, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    consent: Yup.boolean()
      .oneOf([true], intl("FORM_VALIDATION_REQUIRED"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
  });

  return (
    <FormBaseWithoutCaptcha
      onReset={reset}
      isError={isError}
      isSuccess={isSuccess}
      color="yellow"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        postCode: null as any as number,
        town: "",
        message: "",
        consent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const {
          firstName,
          lastName,
          email,
          address,
          postCode,
          town,
          message,
        } = values;
        send({
          email,
          subject: `[Sticker bestellen] ${shop} ${firstName} ${lastName}`, // Subject line
          html: `<h1>${firstName} ${lastName}</h1><p>Email: ${email} </p><p>Address: ${address}, ${postCode}, ${town} </p><p>Message: ${message} </p>`,
        });
      }}
    >
      <H2 className="mb-4">Jetzt Sticker bestellen</H2>
      <Flex>
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </Flex>

      <FieldInput label={intl("FORM_EMAIL")} field="email" />
      <FieldInput
        label={intl("FORM_ADDRESS")}
        field="address"
        placeholder={intl("FORM_ADDRESS_PLACEHOLDER")}
      />
      <Flex>
        <FieldInput
          label={intl("FORM_POSTCODE")}
          field="postCode"
        />
        <FieldInput label={intl("FORM_TOWN")} field="town" />
      </Flex>

      <div className="m-2">
        <ErrorMessage
          render={(msg) => <p className="text-xs italic text-red-500">{msg}</p>}
          name={"sticker"}
        />
      </div>
    </FormBaseWithoutCaptcha>
  );
};
