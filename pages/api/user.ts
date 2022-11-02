import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../../prisma/user";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        const users = await getAllUsers();
        return res.json(users);
      }
      case "POST": {
        // Create a new user
        const { email, username, birthYear, password, role } = req.body;
        const user = await createUser(
          email,
          username,
          birthYear,
          password,
          role
        );
        return res.json(user);
      }
      case "PUT": {
        // Update an existing user
        const { id, ...updateData } = req.body;
        const user = await updateUser(id, updateData);
        return res.json(user);
      }
      case "DELETE": {
        // Delete an existing user
        const { id } = req.body;
        const user = await deleteUser(id);
        return res.json(user);
      }
      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
