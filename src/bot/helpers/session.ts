import { DetaAdapter } from "../../deps.ts";
import env from "../env.ts";

export interface SessionData {
  font: string;
  theme: string;
  as_document: boolean;
  count: number;
}

export function initial(): SessionData {
  return {
    font: "JetBrains Mono",
    theme: "atom-one-dark",
    as_document: false,
    count: 0,
  };
}

export const storage = new DetaAdapter({
  baseName: "session",
  projectKey: env.DETA_KEY,
});
