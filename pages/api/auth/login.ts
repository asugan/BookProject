import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../../../prisma/user";

const secret: any = process.env.SECRET;

export default async function hamham(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = req.body.username;
  const password = req.body.password;

  const users: any = await getUser(username, password);

  // Check in the database
  // if a user with this username
  // and password exists
  if (users) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        username: users.username,
        mail: users.mail,
        id: users.id,
        role: users.role,
      },
      secret
    );

    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
