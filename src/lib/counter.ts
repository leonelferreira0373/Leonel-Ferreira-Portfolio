const API_KEY = "ut_7qw0u0TxLxKAc7MwCT7YSFaSZHAwCL26ZpxkfjL7";
const NAMESPACE = "leonel-ferreiras-team-4220";
const BASE_URL = `https://api.counterapi.dev/v2/${NAMESPACE}`;

export async function getCounterValue(slug: string): Promise<number> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) return 0;
    const json = await res.json();
    return json?.data?.up_count ?? 0;
  } catch (error) {
    console.error(`Failed to get counter for ${slug}:`, error);
    return 0;
  }
}

export async function incrementCounter(slug: string): Promise<number> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}/up`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) return 0;
    const json = await res.json();
    return json?.data?.up_count ?? 0;
  } catch (error) {
    console.error(`Failed to increment counter for ${slug}:`, error);
    return 0;
  }
}
