<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.details }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Post } from '~~/lib/types';

const posts = ref<Post[]>([]);

onMounted(async () => {
  posts.value = await $fetch('/api/posts/getAll');
});
</script>
