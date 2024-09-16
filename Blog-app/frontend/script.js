import { api } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const postModal = document.getElementById('blog-post-modal');
  const startWritingBtn = document.getElementById('start-writing-btn');
  const closeModalBtn = document.getElementById('close-btn');
  const postForm = document.getElementById('post-form');
  const postsGrid = document.querySelector('.posts-grid');

  const toggleModal = (display) => {
    postModal.style.display = display;
  };

  startWritingBtn.addEventListener('click', () => toggleModal('flex'));
  closeModalBtn.addEventListener('click', () => toggleModal('none'));

  postForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageUrl = document.getElementById('image-url').value;

    const post = {
      title,
      content,
      image: imageUrl ? imageUrl : null
    };

    try {
      const newPost = await api.createPost(post);
      addPostToPage(newPost);
      toggleModal('none');
      postForm.reset();
    } catch (error) {
      console.error('Error creating post:', error);
      // TODO: Show error message to user
    }
  });

  const addPostToPage = (post) => {
    const postElement = document.createElement('article');
    postElement.classList.add('post');

    postElement.innerHTML = `
      <img src="${post.image || 'https://via.placeholder.com/500x300'}" alt="${post.title}" class="post-image" loading="lazy">
      <div class="post-content">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.content.substring(0, 100)}...</p>
        <a href="#" class="read-more btn">Read More</a>
      </div>
    `;

    postsGrid.appendChild(postElement);
  };

  const fetchAndDisplayPosts = async () => {
    try {
      const posts = await api.fetchPosts();
      postsGrid.innerHTML = ''; // Clear existing posts
      posts.forEach(addPostToPage);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // TODO: Show error message to user
    }
  };

  // Call fetchAndDisplayPosts on page load
  fetchAndDisplayPosts();
});


