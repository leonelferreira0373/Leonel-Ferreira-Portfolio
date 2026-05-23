// Counter API v1 — counters auto-create on first hit, no dashboard setup required.
// V2 requires counters to be pre-created via the web dashboard; v1 does not.
// Namespace is scoped to this portfolio so slugs don't collide with other projects.
const NAMESPACE = "leonel-ferreira-portfolio";
const BASE_URL = `https://api.counterapi.dev/v1/${NAMESPACE}`;

export async function getCounterValue(slug: string): Promise<number> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`);
    if (!res.ok) return 0;
    const json = await res.json();
    return json?.count ?? 0;
  } catch (error) {
    console.error(`Failed to get counter for ${slug}:`, error);
    return 0;
  }
}

export async function incrementCounter(slug: string): Promise<number> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}/up`, {
      // keepalive: true ensures the request survives page navigation.
      // Without this, clicking a download/project link causes the browser
      // to cancel the in-flight fetch before it reaches the server.
      keepalive: true,
    });
    if (!res.ok) return 0;
    const json = await res.json();
    return json?.count ?? 0;
  } catch (error) {
    console.error(`Failed to increment counter for ${slug}:`, error);
    return 0;
  }
}
