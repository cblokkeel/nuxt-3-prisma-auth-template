# Nuxt 3 Auth with prisma template

### Get started

To start a new nuxt 3 project from this template, use : 
```
npx nuxi init -t gh:cblokkeel/nuxt-3-prisma-auth-template <name>
```

Add .env to your project with :
NUXT_AUTH_ORIGIN : your domain (no '/' at the end)
NUXT_AUTH_BASE_PATH : '/api/auth'
NUXT_SECRET : your secret

if you use google as a provider like this template : 
GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET 

Feel free to use whatever provider available with sidebase/nuxt-auth

And finally for database :

DATABASE_URL

Then, update your schema.prisma in server/database folder
