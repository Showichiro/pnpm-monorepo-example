import backendClient from "@/global/backend-client";
import { atom } from "jotai";

const hello = atom(async () => {
  const res = await backendClient.index.$get();
  return res.text();
});

export default hello;
