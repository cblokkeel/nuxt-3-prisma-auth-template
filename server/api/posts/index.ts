import { getServerSession } from '#auth';
import { Post } from '~~/lib/types';
import { getPostsByUser } from '~~/server/app/services/postsService';

export default defineEventHandler(async (event): Promise<Post[]> => {
  const session = await getServerSession(event);

  if (!session || !session.user || !session.user.email) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 });
  }

  return await getPostsByUser(session.user.email);
});
