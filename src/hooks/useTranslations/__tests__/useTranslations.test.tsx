import { Locale } from "@/server/generated/graphql";
import { renderHook } from "@testing-library/react-hooks";
import * as MockRouter from "next/router";

import { useTranslations } from "../useTranslations";

describe("useTranslations", () => {
  it("should translate to DE", () => {
    jest.spyOn(MockRouter, "useRouter").mockImplementation(
      () =>
        ({
          locale: "de",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(
      () =>
        useTranslations([
          {
            locale: Locale.De,
            key: "TEST",
            value: "TEST_DE",
          },
          {
            locale: Locale.En,
            key: "TEST",
            value: "TEST_EN",
          },
        ]),
      {
        wrapper: Mock,
      }
    );
    expect(result.current("TEST")).toEqual("TEST_DE");
  });
  it("should return KEY if translation is missing", () => {
    jest.spyOn(MockRouter, "useRouter").mockImplementation(
      () =>
        ({
          locale: "de",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(
      () =>
        useTranslations([
          {
            locale: Locale.De,
            key: "TEST",
            value: "TEST_DE",
          },
        ]),
      {
        wrapper: Mock,
      }
    );
    expect(result.current("TEST2")).toEqual("TEST2");
  });
  it("should translate to EN", () => {
    jest.spyOn(MockRouter, "useRouter").mockImplementation(
      () =>
        ({
          locale: "en",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(
      () =>
        useTranslations([
          {
            locale: Locale.En,
            key: "TEST",
            value: "TEST_DE",
          },
        ]),
      {
        wrapper: Mock,
      }
    );
    expect(result.current("TEST")).toEqual("TEST_DE");
  });

  it("should translate with params", () => {
    jest.spyOn(MockRouter, "useRouter").mockImplementation(
      () =>
        ({
          locale: "en",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(
      () =>
        useTranslations([
          {
            locale: Locale.En,
            key: "TEST",
            value: "TEST_DE [param1]",
          },
        ]),
      {
        wrapper: Mock,
      }
    );
    expect(result.current("TEST", { param1: "paramValue" })).toEqual(
      "TEST_DE paramValue"
    );
  });
});
