import { SendSellMailDocument } from "@/components/Forms/sellEmail.local.generated";
import { useReactMutation } from "@/components/useReactQuery";
import { useTranslations } from "@/translate";
import { useFormik } from "formik";
// Render Prop
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "twin.macro";
import * as Yup from "yup";

import { ButtonYellow } from "../@UI/Buttons";
import { H2 } from "../@UI/Texts";
import { FormArea } from "./FormArea";
import { FormCheckbox } from "./FormCheckbox";
import { FormInput } from "./FormInput";

export const VerkaufenForm = () => {
  const sendMail = useReactMutation(SendSellMailDocument);
  // const [captcha, setCaptcha] = useState(false);
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
    subject: Yup.string()
      .min(2, intl("FORM_VALIDATION_TOO_SHORT"))
      .max(50, intl("FORM_VALIDATION_TOO_LONG"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
    consent: Yup.boolean()
      .oneOf([true], intl("FORM_VALIDATION_REQUIRED"))
      .required(intl("FORM_VALIDATION_REQUIRED")),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
      consent: false,
      sticker: "no",
    },
    onSubmit: (values) => {
      // if (captcha) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { consent, ...rest } = values;
      sendMail.mutate({ email: rest });
      // }
    },
    validationSchema,
  });

  if (sendMail.data) {
    return (
      <div css={tw`flex items-center justify-center`}>
        {intl("FORM_CONTACT_SUCCESS")}
      </div>
    );
  }
  if (sendMail.error) {
    return (
      <div css={tw`flex items-center justify-center`}>
        {intl("FORM_CONTACT_ERROR")}
        <ButtonYellow onClick={() => sendMail.reset()}>
          {intl("FORM_OK")}
        </ButtonYellow>
      </div>
    );
  }

  return (
    <div css={tw`w-full max-w-sm`}>
      <form
        css={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}
        onSubmit={formik.handleSubmit}
      >
        <H2 css={tw`mb-4`}>{intl("FORM_CONTACT_TITLE")}</H2>
        <div css={tw`flex`}>
          <FormInput
            label={intl("FORM_SHOP")}
            field="shop"
            formik={formik as any}
          />
          <FormInput
            label={intl("FORM_SURNAME")}
            field="lastName"
            formik={formik as any}
          />
        </div>

        <FormInput
          label={intl("FORM_EMAIL")}
          field="email"
          formik={formik as any}
        />
        <FormInput
          label={intl("FORM_ADDRESS")}
          field="address"
          placeholder={intl("FORM_ADDRESS_PLACEHOLDER")}
          formik={formik as any}
        />
        <div css={tw`flex`}>
          <FormInput
            label={intl("FORM_POSTCODE")}
            field="postCode"
            type="number"
            formik={formik as any}
          />
          <FormInput
            label={intl("FORM_TOWN")}
            field="town"
            formik={formik as any}
          />
        </div>

        <div css={tw`m-2`}>
          {formik.errors.sticker && formik.touched.sticker && (
            <p css={tw`text-red-500 text-xs italic`}>{formik.errors.sticker}</p>
          )}
          <div css={tw`flex mt-6`}>
            <label css={tw`flex items-center`}>
              <input
                type="radio"
                name={"stickers"}
                id={"stickers"}
                value={formik.values.sticker}
                onChange={formik.handleChange}
              />
              <span
                css={tw`text-gray-700 ml-2 font-gt`}
                dangerouslySetInnerHTML={{ __html: intl("FORM_YES") }}
              />
            </label>
            <label css={tw`flex items-center`}>
              <input
                type="radio"
                name={"stickers"}
                id={"stickers"}
                value={formik.values.sticker}
                onChange={formik.handleChange}
              />
              <span
                css={tw`text-gray-700 ml-2 font-gt`}
                dangerouslySetInnerHTML={{ __html: intl("FORM_NO") }}
              />
            </label>
          </div>
        </div>

        <FormArea
          field="message"
          label={intl("FORM_MESSAGE")}
          formik={formik as any}
        />

        <div css={tw`flex m-2 mt-6`}>
          <ReCAPTCHA
            sitekey="6Ld2iaMUAAAAAKuO6s305VLDpf-iTimNcKH1FS-8"
            // onChange={() => setCaptcha(true)}
          />
        </div>

        <FormCheckbox
          formik={formik as any}
          field={"consent"}
          checkedColor="yellow"
          value={formik.values.consent ? 1 : 0}
          label={intl("FORM_DATA_POLICY_MESSAGE")}
        />

        <ButtonYellow css={tw`m-6`} type="submit">
          {intl("FORM_SEND")}
        </ButtonYellow>
      </form>
    </div>
  );
};
