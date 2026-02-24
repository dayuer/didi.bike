import { NextResponse } from "next/server";

/**
 * Host-based routing middleware
 *
 * When accessed via blog.didi.bike, rewrites root-level paths
 * to the /blog/* routes internally. This keeps blog URLs clean:
 *   blog.didi.bike/          → /blog (list page)
 *   blog.didi.bike/welcome   → /blog/welcome (article)
 *   blog.didi.bike/_next/*   → pass through (static assets)
 */
export function middleware(request) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("blog.didi.bike")) {
    const { pathname } = request.nextUrl;

    // Skip internal Next.js paths, PocketBase proxy, and already-prefixed blog paths
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/_/") ||
      pathname.startsWith("/blog") ||
      pathname === "/favicon.ico"
    ) {
      return NextResponse.next();
    }

    // Rewrite / → /blog, /welcome → /blog/welcome
    const url = request.nextUrl.clone();
    url.pathname = `/blog${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
