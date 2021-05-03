import { FormBase } from "@/components/Forms/FormBase";
import { SendEmailDocument } from "@/components/Forms/sendEmail.local.generated";
import { useTranslations } from "@/hooks/useTranslations";
import { ErrorMessage, Field } from "formik";
import React from "react";
import { useReactMutation } from "react-query-gql";
import tw from "twin.macro";
import * as Yup from "yup";

import { H2 } from "../@UI/Texts";
import { FieldArea } from "./FieldArea";
import { FieldInput } from "./FieldInput";

export const FormVerkaufen: React.FC = () => {
  const sendMail = useReactMutation(SendEmailDocument);

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
      onReset={() => sendMail.reset()}
      isError={!!sendMail.error}
      isSuccess={!!sendMail.data}
      color="yellow"
      initialValues={{
        shop: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        postCode: (null as any) as number,
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
        sendMail.mutate({
          email: {
            subject: `[Verkaufen] ${shop} ${firstName} ${lastName}`, // Subject line
            html: `<h1>${shop} (${firstName} ${lastName})</h1><p>Email: ${email} </p><p>Address: ${address}, ${postCode}, ${town} </p><p>Stickers: ${sticker} </p><p>Message: ${message} </p>`,
          },
        });
      }}
    >
      <H2 css={tw`mb-4`}>{intl("FORM_CONTACT_TITLE")}</H2>
      <div css={tw`flex`}>
        <FieldInput label={intl("FORM_SHOP")} field="shop" />
      </div>
      <div css={tw`flex`}>
        <FieldInput label={intl("FORM_NAME")} field="firstName" />
        <FieldInput label={intl("FORM_SURNAME")} field="lastName" />
      </div>

      <FieldInput label={intl("FORM_EMAIL")} field="email" />
      <FieldInput
        label={intl("FORM_ADDRESS")}
        field="address"
        placeholder={intl("FORM_ADDRESS_PLACEHOLDER")}
      />
      <div css={tw`flex`}>
        <FieldInput
          label={intl("FORM_POSTCODE")}
          field="postCode"
          type="number"
        />
        <FieldInput label={intl("FORM_TOWN")} field="town" />
      </div>

      <div css={tw`m-2`}>
        <ErrorMessage
          render={(msg) => (
            <p className={`text-red-500 text-xs italic`}>{msg}</p>
          )}
          name={"sticker"}
        />
        <span css={tw`text-gray-700 mt-6 font-gt`}>{intl("FORM_STICKER")}</span>
        <div css={tw`flex `}>
          <label css={tw`flex items-center`} htmlFor={"sticker"}>
            <Field type="radio" name={"sticker"} id={"sticker"} value="yes" />
            <span
              css={tw`text-gray-700 ml-2 font-gt`}
              dangerouslySetInnerHTML={{ __html: intl("FORM_YES") }}
            />
          </label>
          <label css={tw`flex items-center ml-2 `} htmlFor={"sticker"}>
            <Field
              data-testid="STICKER-NO"
              type="radio"
              name={"sticker"}
              id={"sticker"}
              value="no"
            />
            <span
              css={tw`text-gray-700 ml-2 font-gt`}
              dangerouslySetInnerHTML={{ __html: intl("FORM_NO") }}
            />
          </label>
        </div>
      </div>

      <FieldArea field="message" label={intl("FORM_MESSAGE")} />
    </FormBase>
  );
};
