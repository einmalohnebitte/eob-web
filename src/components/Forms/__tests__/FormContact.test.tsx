import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormContact } from "../FormContact";

const mutateFn = jest.fn();
jest.mock("../useSendEmail", () => {
  return {
    useSendEmail: () => ({
      send: (args: any) => mutateFn(args),
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
test("FormContact Should call contact", async () => {
  render(<FormContact />);

  await userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  await userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  await userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");
  await userEvent.type(screen.getByLabelText(/FORM_MESSAGE/i), "message...");

  await userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  await userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutateFn).toHaveBeenCalledWith({
      email: "test@email.com",
      html: `<p>John Dee - test@email.com</p><p>message...</p>`,
      subject: "[Kontakt]: John",
    })
  );
});
