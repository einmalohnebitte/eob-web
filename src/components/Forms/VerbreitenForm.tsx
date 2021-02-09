import { useFormik } from "formik";
// Render Prop
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import tw from "twin.macro";
import * as Yup from "yup";

import { useSendMail } from "../@hooks/useApi";
import { useTranslate } from "../@hooks/useTranslate";
import { ButtonBlue } from "../@UI/Buttons";
import { H2 } from "../@UI/Texts";
import { FormArea } from "./FormArea";
import { FormCheckbox } from "./FormCheckbox";
import { FormInput } from "./FormInput";

export const VerbreitenForm = () => {
  const sendMail = useSendMail();
  const [captcha, setCaptcha] = useState(false);
  const intl = useTranslate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, intl.formatMessage({ id: "FORM_VALIDATION_TOO_SHORT" }))
      .max(50, intl.formatMessage({ id: "FORM_VALIDATION_TOO_LONG" }))
      .required(intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" })),
    lastName: Yup.string()
      .min(2, intl.formatMessage({ id: "FORM_VALIDATION_TOO_SHORT" }))
      .max(50, intl.formatMessage({ id: "FORM_VALIDATION_TOO_LONG" }))
      .required(intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" })),
    email: Yup.string()
      .email(intl.formatMessage({ id: "FORM_VALIDATION_EMAIL" }))
      .required(intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" })),
    message: Yup.string()
      .min(2, intl.formatMessage({ id: "FORM_VALIDATION_TOO_SHORT" }))
      .max(500, intl.formatMessage({ id: "FORM_VALIDATION_TOO_LONG" }))
      .required(intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" })),
    subject: Yup.string()
      .min(2, intl.formatMessage({ id: "FORM_VALIDATION_TOO_SHORT" }))
      .max(50, intl.formatMessage({ id: "FORM_VALIDATION_TOO_LONG" }))
      .required(intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" })),
    consent: Yup.boolean()
      .oneOf([true], intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" }))
      .required(intl.formatMessage({ id: "FORM_VALIDATION_REQUIRED" })),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      subject: "",
      consent: false,
    },
    onSubmit: (values) => {
      if (captcha) {
        sendMail.mutate(values);
      }
    },
    validationSchema,
  });

  if (sendMail.data) {
    return (
      <div css={tw`flex items-center justify-center`}>
        {intl.formatMessage({ id: "FORM_CONTACT_SUCCESS" })}
      </div>
    );
  }
  if (sendMail.error) {
    return (
      <div css={tw`flex items-center justify-center`}>
        {intl.formatMessage({ id: "FORM_CONTACT_ERROR" })}
        <ButtonBlue onClick={() => sendMail.reset()}>
          {intl.formatMessage({ id: "FORM_OK" })}
        </ButtonBlue>
      </div>
    );
  }

  return (
    <div css={tw`w-full max-w-sm`}>
      <form
        css={tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}
        onSubmit={formik.handleSubmit}
      >
        <H2>{intl.formatMessage({ id: "FORM_CONTACT_TITLE" })}</H2>
        <div css={tw`flex`}>
          <FormInput
            label="FORM_FIRST_NAME"
            field="firstName"
            formik={formik as any}
          />
          <FormInput
            label="FORM_LAST_NAME"
            field="lastName"
            formik={formik as any}
          />
        </div>
        <div css={tw`flex`}>
          <FormInput label="FORM_EMAIL" field="email" formik={formik as any} />
          <FormInput
            label="FORM_SUBJECT"
            field="subject"
            formik={formik as any}
          />
        </div>

        <FormInput label="FORM_EMAIL" field="email" formik={formik as any} />

        <FormArea
          field="message"
          label={intl.formatMessage({ id: "FORM_MESSAGE" })}
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
          value={formik.values.consent ? 1 : 0}
          label={intl.formatMessage({ id: "FORM_PRIVACY" })}
        />

        <ButtonBlue css={tw`m-6`} type="submit">
          {intl.formatMessage({ id: "FORM_SUBMIT" })}
        </ButtonBlue>
      </form>
    </div>
  );
};
