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

export const FormVerkaufen: React.FC = () => {
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
    <FormBase
      onReset={reset}
      isError={isError}
      isSuccess={isSuccess}
      color="yellow"
      initialValues={{
        shop: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        postCode: null as any as number,
        town: "",
        message: "",
        consent: false,
        sticker: "no",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const {
          shop,
          firstName,
          lastName,
          email,
          address,
          postCode,
          town,
          sticker,
          message,
        } = values;
        send({
          email,
          subject: `[Verkaufen] ${shop} ${firstName} ${lastName}`, // Subject line
          html: `<h1>${shop} (${firstName} ${lastName})</h1><p>Email: ${email} </p><p>Address: ${address}, ${postCode}, ${town} </p><p>Stickers: ${sticker} </p><p>Message: ${message} </p>`,
        });
      }}
    >
      <H2 className="mb-4">{intl("FORM_CONTACT_TITLE")}</H2>
      <Flex>
        <FieldInput label={intl("FORM_SHOP")} field="shop" />
      </Flex>
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
          type="number"
        />
        <FieldInput label={intl("FORM_TOWN")} field="town" />
      </Flex>

      <div className="m-2">
        <ErrorMessage
          render={(msg) => <p className="text-xs italic text-red-500">{msg}</p>}
          name={"sticker"}
        />
        <span className="mt-6 font-gt text-gray-700">
          {intl("FORM_STICKER")}
        </span>
        <Flex>
          <Flex as="label" align="center" htmlFor={"sticker"}>
            <Field type="radio" name={"sticker"} id={"sticker"} value="yes" />
            <span
              className="ml-2 font-gt text-gray-700"
              dangerouslySetInnerHTML={{ __html: intl("FORM_YES") }}
            />
          </Flex>
          <Flex as="label" align="center" className="ml-2" htmlFor={"sticker"}>
            <Field
              data-testid="STICKER-NO"
              type="radio"
              name={"sticker"}
              id={"sticker"}
              value="no"
            />
            <span
              className="ml-2 font-gt text-gray-700"
              dangerouslySetInnerHTML={{ __html: intl("FORM_NO") }}
            />
          </Flex>
        </Flex>
      </div>

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
