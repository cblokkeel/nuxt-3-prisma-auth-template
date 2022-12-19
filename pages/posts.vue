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
import { usePostStore } from '~~/stores/postStore';

definePageMeta({ middleware: 'auth' });

const store = usePostStore();

const posts = computed(() => store.posts);

const postInput = ref('');

const handleAddPost = async () => {
  if (postInput.value !== '') {
    const result = await store.addPost(postInput.value);
    if (result) {
      clearInputs();
    }
  }
};

const clearInputs = () => {
  postInput.value = '';
};

onMounted(async () => {
  store.loadPosts();
});
</script>
