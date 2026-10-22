export type RepoMeta = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

/**
 * Fetched once at build time (the site is statically exported), so stars and
 * "last pushed" dates refresh on every deploy. Uses GITHUB_TOKEN when present
 * to avoid the 60 req/h anonymous limit; any failure just yields no metadata.
 */
export async function getRepos(user: string): Promise<RepoMeta[]> {
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, {
      headers,
      cache: "force-cache",
    });
    if (!res.ok) {
      console.warn(`[github] ${res.status} ${res.statusText} — building without live repo data`);
      return [];
    }
    return (await res.json()) as RepoMeta[];
  } catch (err) {
    console.warn("[github] fetch failed — building without live repo data", err);
    return [];
  }
}

export function formatMonth(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
}
