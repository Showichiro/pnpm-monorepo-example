import type { AppType } from "backend";
import { hc } from "hono/client";

export const clientFactory = (baseUrl: string) => hc<AppType>(baseUrl);
