import { getServerSession } from '#auth';
import prisma from '../../../lib/prisma';
import { Post } from '~~/lib/types';

export default defineEventHandler(async (event): Promise<Post[]> => {
  const session = await getServerSession(event);

  if (!session || !session.user || !session.user.email) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw createError({ statusMessage: 'User not found', statusCode: 404 });
  }

  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
    },
  });

  return posts;
});
