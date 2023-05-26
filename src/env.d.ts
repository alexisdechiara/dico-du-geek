/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly API_URL: string;
    readonly FORM_URL: string;
    readonly SITE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
