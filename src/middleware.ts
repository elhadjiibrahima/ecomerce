import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value

  if (!session && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Ici, vous devriez vérifier si l'utilisateur est un administrateur
  // Pour cet exemple, nous supposons que tous les utilisateurs connectés sont des administrateurs

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

