import * as TR from "@/hooks/useTranslations/useTranslations";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import * as RQ from "react-query-gql";

import { FormNewsletter } from "../FormNewsletter";

test("FormNewsletter Should call send", async () => {
  const mutate = jest.fn();
  jest.spyOn(RQ, "useReactMutation").mockImplementation(
    () =>
      ({
        mutate,
      } as any)
  );
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<FormNewsletter />);

  userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");

  userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutate).toHaveBeenCalledWith({
      user: {
        email: "test@email.com",
        firstName: "John",
        lastName: "Dee",
      },
    })
  );
});
