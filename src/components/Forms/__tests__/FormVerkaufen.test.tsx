import * as TR from "@/hooks/useTranslations/useTranslations";
import * as RQ from "@/hooks/useReactQuery";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FormVerkaufen } from "../FormVerkaufen";

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
test("Verkaufen Form Should call send", async () => {
  render(<FormVerkaufen />);

  await userEvent.type(screen.getByLabelText(/FORM_SHOP/i), "John");
  await userEvent.type(screen.getByLabelText(/FORM_NAME/i), "John");
  await userEvent.type(screen.getByLabelText(/FORM_SURNAME/i), "Dee");
  await userEvent.type(screen.getByLabelText(/FORM_EMAIL/i), "test@email.com");
  await userEvent.type(screen.getByLabelText(/FORM_ADDRESS/i), "street abc");
  await userEvent.type(screen.getByLabelText(/FORM_POSTCODE/i), "123456");
  await userEvent.type(screen.getByLabelText(/FORM_TOWN/i), "Munich");

  await userEvent.click(screen.getByTestId(/STICKER-NO/i));
  await userEvent.type(screen.getByLabelText(/FORM_MESSAGE/i), "street abc");
  await userEvent.click(screen.getByLabelText(/FORM_DATA_POLICY_MESSAGE/i));
  await userEvent.click(screen.getByRole("button", { name: /FORM_SEND/i }));

  await waitFor(() =>
    expect(mutateFn).toHaveBeenCalledWith({
      email: {
        email: "test@email.com",
        html: `<h1>John (John Dee)</h1><p>Email: test@email.com </p><p>Address: street abc, 123456, Munich </p><p>Stickers: no </p><p>Message: street abc </p>`,
        subject: "[Verkaufen] John John Dee",
      },
    })
  );
});
