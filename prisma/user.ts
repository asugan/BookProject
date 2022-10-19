import prisma from "./prisma";

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      Post: true,
    },
  });
  return users;
};

export const getUser = async (username: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      AND: [
        { username: { equals: username } },
        { password: { equals: password } },
      ],
    },
  });
  return user;
};

// CREATE
export const createUser = async (
  email: string,
  name: string,
  birthYear: number
) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      birthYear,
    },
  });
  return user;
};

// UPDATE
export const updateUser = async (id: string, updateData: object) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
