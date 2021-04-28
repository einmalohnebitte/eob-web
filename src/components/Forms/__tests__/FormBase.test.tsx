import * as TR from "@/translate/useTranslations";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormBase } from "../FormBase";

test("FormBase Should call handleSubmit", async () => {
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);
  const handleSubmit = jest.fn();
  const handleReset = jest.fn();
  render(
    <FormBase
      isSuccess={false}
      isError={false}
      onReset={handleReset}
      onSubmit={handleSubmit}
      color={"pink"}
      initialValues={{}}
      validationSchema={null as any}
    />
  );

  userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      consent: true,
    })
  );
});

test("FormBase Should render success", async () => {
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);
  const handleSubmit = jest.fn();
  const handleReset = jest.fn();
  render(
    <FormBase
      isSuccess={true}
      isError={false}
      onReset={handleReset}
      onSubmit={handleSubmit}
      color={"pink"}
      initialValues={{}}
      validationSchema={null as any}
    />
  );

  expect(screen.getByText("FORM_CONTACT_SUCCESS").textContent).toEqual(
    "FORM_CONTACT_SUCCESS"
  );
});

test("FormBase Should render error", async () => {
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);
  const handleSubmit = jest.fn();
  const handleReset = jest.fn();
  render(
    <FormBase
      isSuccess={false}
      isError={true}
      onReset={handleReset}
      onSubmit={handleSubmit}
      color={"pink"}
      initialValues={{}}
      validationSchema={null as any}
    />
  );

  expect(screen.getByText("FORM_CONTACT_ERROR").textContent).toEqual(
    "FORM_CONTACT_ERRORFORM_OK"
  );
  userEvent.click(screen.getByRole("button", { name: /FORM_OK/i }));
  expect(handleReset).toHaveBeenCalled();
});
