import { NextResponse } from "next/server";
import * as jose from "jose";

const secret: any = process.env.SECRET;

export default async function middleware(req: any) {
  const { cookies } = req;
  const { origin } = req.nextUrl;

  const jwt = cookies.OursiteJWT;

  const url = req.url;

  if (url.includes("/login")) {
    if (jwt) {
      try {
        console.log("trying to verify jwt");
        const verifying = await jose.jwtVerify(
          jwt,
          new TextEncoder().encode(`${secret}`)
        );
        console.log("verifying", verifying);

        return NextResponse.redirect("/");
      } catch (e) {
        return NextResponse.next();
      }
    }
  }

  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      return NextResponse.redirect(`${origin}/login`);
    }

    try {
      const verifying = await jose.jwtVerify(
        jwt,
        new TextEncoder().encode(`${secret}`)
      );
      console.log("verifying", verifying);

      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(`${origin}/login`);
    }
  }

  return NextResponse.next();
}
