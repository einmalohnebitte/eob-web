import { FormBase } from "@/components/Forms/FormBase";
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
    quantity: Yup.number()
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
      color="yellow"
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        postCode: null as any as number,
        town: "",
        quantity: 1,
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
          quantity,
          town,
        } = values;
        send({
          email,
          subject: `[Sticker bestellen] ${firstName} ${lastName}`, // Subject line
          html: `<h1>${firstName} ${lastName}</h1><p>Email: ${email} </p><p>Address: ${address}, ${postCode}, ${town} </p><p>Anzahl Sets: ${quantity}</p>`,
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
      <FieldInput label="Anzahl Sticker-Sets" field="quantity" type="number" />

      <div className="m-2">
        <ErrorMessage
          render={(msg) => <p className="text-xs italic text-red-500">{msg}</p>}
          name={"sticker"}
        />
      </div>
    </FormBase>
  );
};
