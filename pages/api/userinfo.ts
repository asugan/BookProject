import * as jose from "jose";

export default async function userinfo(req: any, res: any) {
  const { cookies } = req;
  const secret: any = process.env.SECRET;

  const jwt = cookies.OursiteJWT;

  if (jwt) {
    const verifying = await jose.jwtVerify(
      jwt,
      new TextEncoder().encode(`${secret}`)
    );
    console.log("verifying", verifying);

    return res.json({ data: verifying.payload });
  } else {
    return res.json({ data: "Invalid token!" });
  }
}
