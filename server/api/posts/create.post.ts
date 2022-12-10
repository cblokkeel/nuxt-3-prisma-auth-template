import { PostSchema } from './../../schemas/post.schema';
import { getServerSession } from '#auth';
import { zh } from 'h3-zod';
import prisma from '../../../lib/prisma';
import { Post } from '~~/lib/types';

export default defineEventHandler(async (event): Promise<Post> => {
  const session = await getServerSession(event);
  if (!session || !session.user || !session.user.email) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 });
  }

  const body = await zh.useValidatedBody(event, PostSchema);

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw createError({ statusMessage: 'User not found', statusCode: 404 });
  }

  const post = await prisma.post.create({
    data: {
      details: body.post,
      userId: user.id,
    },
  });

  return post;
});
