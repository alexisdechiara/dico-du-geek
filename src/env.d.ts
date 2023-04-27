/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly DIRECTUS_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}