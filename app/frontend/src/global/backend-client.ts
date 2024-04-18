import { clientFactory } from "backend-client";

export default clientFactory(
  import.meta.env.BACKEND_URL ?? "http://localhost:3000",
);
