import * as TR from "@/hooks/useTranslations/useTranslations";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormBase } from "../FormBase";

const mutateFn = jest.fn();
jest.mock("@/hooks/useReactQuery", () => {
  return {
    useReactMutation: () => ({
      mutate: (args: any) => mutateFn(args),
    }),
  };
});
jest.mock("@/hooks/useTranslations/useTranslations", () => {
  return {
    useTranslations: () => (k: string) => k,
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});
test("FormBase Should call handleSubmit", async () => {
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
