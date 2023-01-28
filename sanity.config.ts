import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavBar from "./components/studio/StudioNavbar";
import Logo from "./components/studio/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "e1a7xba7"; // the ! states to the ts that this variable will always contain value and never be null
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basepath: "/studio",
  name: "RISHABH_CONTENT_STUDIO",
  title: "Sanity Blog CMS",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar,
    },
  },
  theme: myTheme,
});
