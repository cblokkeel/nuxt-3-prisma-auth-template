import { Post } from '~~/lib/types';
import {
  create,
  getByUserId,
} from '~~/server/database/repositories/postsRepository';
import { getUserByEmail } from '~~/server/database/repositories/usersRepository';

export const getPostsByUser = async (email: string): Promise<Post[]> => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw createError({ statusMessage: 'User not found', statusCode: 404 });
  }

  return await getByUserId(user.id);
};

export const createPost = async (
  post: string,
  email: string,
): Promise<Post> => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw createError({ statusMessage: 'User not found', statusCode: 404 });
  }

  return await create(post, user.id);
};
