import { createPost, getAllPost } from "../../prisma/posts";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        const posts = await getAllPost();
        return res.json(posts);
      }
      case "POST": {
        const { title, content, authorId } = req.body;
        const post = await createPost(title, content, authorId);
        return res.json(post);
      }
      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
