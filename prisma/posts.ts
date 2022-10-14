import prisma from "./prisma";

export const getAllPost = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  return posts;
};

export const createPost = async (
  title: string,
  content: string,
  authorId: string
) => {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
  return post;
};
