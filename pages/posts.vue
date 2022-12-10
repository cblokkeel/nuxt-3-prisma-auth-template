<template>
  <div>
    <h1>Posts</h1>
    <form @submit.prevent="handleAddPost">
      <input
        type="text"
        id="post"
        placeholder="Ajouter un post..."
        v-model="postInput"
      />
    </form>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.details }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Post } from '~~/lib/types';

const postInput = ref('');
const posts = ref<Post[]>([]);
const errorMessage = ref('');

const handleAddPost = async () => {
  if (postInput.value !== '') {
    try {
      const newPost: Post = await $fetch('/api/posts/create', {
        method: 'POST',
        body: JSON.stringify({ post: postInput.value }),
      });

      console.log(newPost);

      posts.value.push(newPost);
      clearInputs();
    } catch (error) {
      console.log('error', error);
      errorMessage.value = 'Error. Please try again';
    }
  }
};

const clearInputs = () => {
  postInput.value = '';
};

onMounted(async () => {
  try {
    posts.value = await $fetch('/api/posts/getAll');
  } catch (error) {
    console.log('error', error);
    errorMessage.value = 'Not authenticated';
  }
});
</script>
