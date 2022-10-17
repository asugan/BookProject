export default async function myuser(req: any, res: any) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    return res.json({ message: "Invalid token!" });
  }

  return res.json({ data: "Top secret data!" });
}
