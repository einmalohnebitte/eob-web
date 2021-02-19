import { useMutation } from "react-query";

const fetchJson = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(`${process.env.GATSBY_API_URL}${input}`, init);
  return res.json();
};

const get_token = async () => {
  const data_login = {
    username: "moritz.gnisia",
    password: "DtkjwSqUm4J3cLLJxCLJf64NR9R4Ne5EPf",
  };
  fetch(`${process.env.GATSBY_API_URL}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data_login),
  })
    .then((response) => response.json())
    .then((data) => localStorage.setItem("token", data["access"]))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const filter_data = (data: any) => {
  delete data["consent"];
  data["mail_type"] = "MD";
  return data;
};

export const useSendMail = () => {
  get_token();
  const result = useMutation((data: any) =>
    fetchJson(`/mail/api/sendmail/`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(filter_data(data)),
    })
  );
  return result;
};
