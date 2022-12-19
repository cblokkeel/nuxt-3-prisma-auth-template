import { getServerSession } from '#auth';
import { zh } from 'h3-zod';
import { Post } from '~~/lib/types';
import { createPost } from '~~/server/app/services/postsService';
import { PostSchema } from '../../app/schemas/post.schema';

export default defineEventHandler(async (event): Promise<Post> => {
  const session = await getServerSession(event);

  if (!session || !session.user || !session.user.email) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 });
  }

  const { post } = await zh.useValidatedBody(event, PostSchema);

  return await createPost(post, session.user.email);
});
