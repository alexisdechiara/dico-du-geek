/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly DIRECTUS_API: string;
  readonly FORM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}