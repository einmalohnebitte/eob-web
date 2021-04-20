import { SubscribeNewsletterDocument } from "@/components/Forms/newsletter.local.generated";
import { useReactMutation } from "@/components/useReactQuery";
import { useTranslations } from "@/translate";
import { useFormik } from "formik";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "twin.macro";
import * as Yup from "yup";

import { ButtonPink } from "../@UI/Buttons";
import { FormCheckbox } from "./FormCheckbox";
import { FormInput } from "./FormInput";

// import { useSendMail } from "./useSendEmail";

export const NewsletterForm = () => {
  const sendMail = useReactMutation(SubscribeNewsletterDocument);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [captcha, setCaptcha] = useState(false);
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      consent: false,
    },
    onSubmit: (values) => {
      console.log(values);
      // if (captcha) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { consent, ...rest } = values;
      sendMail.mutate({ user: rest });
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
        <ButtonPink onClick={() => sendMail.reset()}>
          {intl("FORM_OK")}
        </ButtonPink>
      </div>
    );
  }

  return (
    <div css={tw`w-full max-w-sm`}>
      <form
        css={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}
        onSubmit={formik.handleSubmit}
      >
        <div css={tw`flex`}>
          <FormInput
            label={intl("FORM_NAME")}
            field="firstName"
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

        <div css={tw`flex m-2`}>
          <ReCAPTCHA
            sitekey="6Ld2iaMUAAAAAKuO6s305VLDpf-iTimNcKH1FS-8"
            onChange={() => setCaptcha(true)}
          />
        </div>

        <FormCheckbox
          formik={formik as any}
          field={"consent"}
          checkedColor="pink"
          value={formik.values.consent ? 1 : 0}
          label={intl("FORM_DATA_POLICY_MESSAGE")}
        />

        <ButtonPink css={tw`m-6`} type="submit">
          {intl("FORM_SEND")}
        </ButtonPink>
      </form>
    </div>
  );
};
