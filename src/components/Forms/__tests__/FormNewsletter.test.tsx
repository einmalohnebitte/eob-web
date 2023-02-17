import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormNewsletter } from "../FormNewsletter";

const mutateFn = jest.fn();
jest.mock("../useSendNewsletter", () => {
  return {
    useSendNewsletter: () => ({
      send: (args: any) => {
        mutateFn(args);
      },
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
test("FormNewsletter Should call send", async () => {
  render(<FormNewsletter />);

  await userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  await userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  await userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");

  await userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  await userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutateFn).toHaveBeenCalledWith({
      email: "test@email.com",
      firstName: "John",
      lastName: "Dee",
    })
  );
});
