import { createClient } from "next-sanity";

export const projectId = "e1a7xba7";
export const dataset = "production";
const apiVersion = "2023-01-27";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
