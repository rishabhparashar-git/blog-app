"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config"; //sanity config file

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />;
}
