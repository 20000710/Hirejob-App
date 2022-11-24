import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(request = NextRequest) {
    const cookiesToken = request.cookies.get("token");
    const cookiesId = request.cookies.get("user_id");

    let url = request.url;
    let urlRedirect = request.nextUrl.clone();
    const response = NextResponse.next();

    if (cookiesToken && cookiesId) {

    } else {
        if (url.includes("/profile") || url.includes("/home") || url.includes("/profile/:id")) {
            urlRedirect.pathname = "/auth/login";
            return NextResponse.redirect(urlRedirect);
        }
    }

    return response;
}