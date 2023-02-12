import * as TR from "@/hooks/useTranslations/useTranslations";
import * as RQ from "@/hooks/useReactQuery";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormContact } from "../FormContact";

jest.mock("@/hooks/useReactQuery", () => {
  return {
    useReactMutation: jest.fn(),
  };
});
test("FormContact Should call contact", async () => {
  const mutate = jest.fn();
  jest.spyOn(RQ, "useReactMutation").mockImplementation(
    () =>
      ({
        mutate,
      } as any)
  );
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<FormContact />);

  userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");
  userEvent.type(screen.getByLabelText(/FORM_MESSAGE/i), "message...");

  userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutate).toHaveBeenCalledWith({
      email: {
        email: "test@email.com",
        html: `<p>John Dee - test@email.com</p><p>message...</p>`,
        subject: "[Kontakt]: John",
      },
    })
  );
});
