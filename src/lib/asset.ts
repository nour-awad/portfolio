/** Prefix a /public path with the deploy basePath (next/link does this for routes, not for files). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
