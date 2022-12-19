import { defineStore } from 'pinia';
import { Post } from '~~/lib/types';

interface PostStoreState {
  posts: Post[];
  errorMessage: string;
}

export const usePostStore = defineStore('posts', {
  state: (): PostStoreState => ({
    posts: [],
    errorMessage: '',
  }),
  actions: {
    async loadPosts() {
      const posts = await $fetch('/api/posts');
      this.posts = posts;
    },
    async addPost(postContent: string): Promise<boolean> {
      try {
        const newPost: Post = await $fetch('/api/posts/create', {
          method: 'POST',
          body: JSON.stringify({ post: postContent }),
        });

        this.posts.push(newPost);
        return true;
      } catch (error) {
        console.log('error', error);
        this.errorMessage = 'Error. Please try again.';
        return false;
      }
    },
  },
});
