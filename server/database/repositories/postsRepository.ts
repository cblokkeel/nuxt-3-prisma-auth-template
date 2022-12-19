import { Post } from '@prisma/client';
import prisma from '~~/server/database/client';

export const getByUserId = async (userId: string): Promise<Post[]> => {
  return await prisma.post.findMany({
    where: {
      userId,
    },
  });
};

export const create = async (post: string, userId: string): Promise<Post> => {
  return await prisma.post.create({
    data: {
      details: post,
      userId,
    },
  });
};
