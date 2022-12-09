import { NuxtAuthHandler } from '#auth';
import GoogleProvider from 'next-auth/providers/google';

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  providers: [
    // @ts-ignore
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
});