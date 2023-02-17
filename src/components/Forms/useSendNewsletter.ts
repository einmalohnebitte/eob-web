import { NewsletterReq } from "@/pages/api/newsletter";
import { useState } from "react";

export function useSendNewsletter() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const [loading, setLoading] = useState(false);

  const send = async (props: NewsletterReq["body"]) => {
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(props),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch (e) {
      setStatus("error");
    }

    setLoading(false);
  };

  const reset = async () => {
    setLoading(false);
    setStatus("idle");
  };
  return {
    isError: status === "error",
    isSuccess: status === "sent",
    loading,
    send,
    reset,
  };
}
