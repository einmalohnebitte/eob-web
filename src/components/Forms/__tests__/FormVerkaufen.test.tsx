import * as TR from "@/hooks/useTranslations/useTranslations";
import * as RQ from "@correttojs/next-utils/useReactQuery";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormVerkaufen } from "../FormVerkaufen";

jest.mock("@correttojs/next-utils/useReactQuery", () => {
  return {
    useReactMutation: jest.fn(),
  };
});
test("Verkaufen Form Should call send", async () => {
  const mutate = jest.fn();
  jest.spyOn(RQ, "useReactMutation").mockImplementation(
    () =>
      ({
        mutate,
      } as any)
  );
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(<FormVerkaufen />);

  userEvent.type(screen.getByLabelText(/FORM_SHOP/i), "John");
  userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");
  userEvent.type(screen.getByLabelText(/FORM_ADDRESS/i), "street abc");
  userEvent.type(screen.getByLabelText(/FORM_POSTCODE/i), "123456");
  userEvent.type(screen.getByLabelText(/FORM_TOWN/i), "Munich");

  userEvent.click(screen.getByTestId(/STICKER-NO/i));
  userEvent.type(screen.getByLabelText(/FORM_MESSAGE/i), "street abc");
  userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutate).toHaveBeenCalledWith({
      email: {
        email:"test@email.com",
        html: `<h1>John (John Dee)</h1><p>Email: test@email.com </p><p>Address: street abc, 123456, Munich </p><p>Stickers: no </p><p>Message: street abc </p>`,
        subject: "[Verkaufen] John John Dee",
      },
    })
  );
});
