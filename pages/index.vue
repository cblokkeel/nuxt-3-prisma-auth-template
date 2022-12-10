<template>
  <div>
    <h1>Hello</h1>
    <form @submit.prevent="handleAddPost">
      <input
        type="text"
        id="post"
        placeholder="Ajouter un post..."
        v-model="post"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { Post } from '~~/lib/types';

const { status, data, signIn, signOut } = useSession();

const post = ref('');

const handleAddPost = async () => {
  const newPost: Post = await $fetch('/api/posts/create', {
    method: 'POST',
    body: JSON.stringify({ post: post.value }),
  });

  console.log(newPost);
};
</script>
