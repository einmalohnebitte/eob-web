import * as TR from "@/hooks/useTranslations/useTranslations";
import * as RQ from "@/hooks/useReactQuery";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormVerbreiten } from "../FormVerbreiten";

jest.mock("@/hooks/useReactQuery", () => {
  return {
    useReactMutation: jest.fn(),
  };
});
test("FormVerbreiten Should call send", async () => {
  const mutate = jest.fn();
  jest.spyOn(RQ, "useReactMutation").mockImplementation(
    () =>
      ({
        mutate,
      } as any)
  );
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<FormVerbreiten />);

  userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");
  userEvent.type(screen.getByLabelText(/FORM_MOTIVATION/i), "message...");
  userEvent.type(screen.getByLabelText(/FORM_POSTCODE/i), "123456");
  userEvent.type(screen.getByLabelText(/FORM_TOWN/i), "Munich");

  userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutate).toHaveBeenCalledWith({
      email: {
        email: "test@email.com",
        html: ` <h1> John Dee</h1><p>Email: test@email.com </p><p>Location:  123456, Munich </p><p>Message: message... </p>`,
        subject: "[Verbreiten] John Dee",
      },
    })
  );
});
