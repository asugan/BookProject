import * as jose from "jose";

export default async function userinfo(req: any, res: any) {
  const { cookies } = req;
  const secret: any = process.env.SECRET;

  const jwt = cookies.OursiteJWT;

  const verifying = await jose.jwtVerify(
    jwt,
    new TextEncoder().encode(`${secret}`)
  );
  console.log("verifying", verifying);

  if (!jwt) {
    return res.json({ message: "Invalid token!" });
  }

  return res.json({ data: verifying.payload });
}
