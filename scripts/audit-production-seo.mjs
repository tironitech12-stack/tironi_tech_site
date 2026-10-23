const urls = process.argv.slice(2);

for (const requested of urls) {
  const response = await fetch(requested, { redirect: 'follow' });
  const html = await response.text();
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/i)?.[1] || '';
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] || '';
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] || '';
  const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)/i)?.[1] || '';
  console.log(JSON.stringify({
    requested,
    status: response.status,
    final: response.url,
    robots,
    canonical,
    title,
    description,
    xRobotsTag: response.headers.get('x-robots-tag'),
  }));
}
