export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 浏览量计数器 API
    if (url.pathname === "/api/counter") {
      const slug = url.searchParams.get("slug");
      if (!slug) {
        return Response.json({ count: 0 });
      }

      if (request.method === "POST") {
        const prev = (await env.COUNTER.get(slug)) || "0";
        const next = parseInt(prev) + 1;
        await env.COUNTER.put(slug, next.toString());
        return Response.json({ count: next }, {
          headers: { "Access-Control-Allow-Origin": "*" }
        });
      }

      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          }
        });
      }

      const count = await env.COUNTER.get(slug);
      return Response.json({ count: parseInt(count || "0") }, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
