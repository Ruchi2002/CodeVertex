import { api } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('posts-container');

    try {
        const posts = await api.fetchPosts();
        console.log(posts)
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        postsContainer.innerHTML = '<p>Error loading blog posts. Please try again later.</p>';
    }
});

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post';

    const image = document.createElement('img');
    image.src = post.image || 'https://via.placeholder.com/500x300';
    image.alt = post.title || 'Blog Post Image';
    image.className = 'post-image';
    image.loading = 'lazy';
    
    // Error handling
    image.onerror = () => {
        image.src = 'https://via.placeholder.com/500x300'; // Fallback image
        console.error('Error loading image:', image.src);
    };

    const content = document.createElement('div');
    content.className = 'post-content';

    const title = document.createElement('h3');
    title.className = 'post-title';
    title.textContent = post.title || 'Untitled';

    const excerpt = document.createElement('p');
    excerpt.className = 'post-excerpt';
    excerpt.textContent = post.content ? post.content.substring(0, 100) + '...' : 'No content available.';

    const readMore = document.createElement('a');
    readMore.href = `blog-post.html?id=${post.id}`;
    readMore.className = 'read-more btn';
    readMore.textContent = 'Read More';

    content.appendChild(title);
    content.appendChild(excerpt);
    content.appendChild(readMore);

    article.appendChild(image);
    article.appendChild(content);

    return article;
}
