// Mock data for posts
let posts = [];

// Function to fetch posts from the server
async function fetchPosts() {
    const response = await fetch('/api/posts');
    posts = await response.json();
    renderPosts();
}

// Function to create HTML for a single post
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <div class="post-header">
            <img src="${post.profilePic}" alt="Profile">
            <h3>${post.username}</h3>
        </div>
        <div class="post-image">
            <img src="${post.image}" alt="Dog post">
        </div>
        <div class="post-actions">
            <i class="far fa-heart" onclick="toggleLike(${post.id})"></i>
            <i class="far fa-comment" onclick="focusComment(${post.id})"></i>
            <i class="far fa-paper-plane"></i>
        </div>
        <div class="post-likes">
            ${post.likes} likes
        </div>
        <div class="post-caption">
            <strong>${post.username}</strong> ${post.caption}
        </div>
        <div class="comments">
            ${post.comments.map(comment => `
                <p><strong>${comment.username}</strong> ${comment.text}</p>
            `).join('')}
        </div>
        <div class="add-comment">
            <input type="text" placeholder="Add a comment..." id="comment-${post.id}">
            <button onclick="addComment(${post.id})">Post</button>
        </div>
    `;
    return postElement;
}

// Function to render all posts
function renderPosts() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    posts.forEach(post => {
        container.appendChild(createPostElement(post));
    });
}

// Function to toggle like on a post
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        renderPosts();
    }
}

// Function to add a comment
function addComment(postId) {
    const commentInput = document.querySelector(`#comment-${postId}`);
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.comments.push({
                username: 'currentUser', // Replace with actual current user
                text: commentText
            });
            renderPosts();
        }
    }
    commentInput.value = '';
}

// Function to focus comment input
function focusComment(postId) {
    const commentInput = document.querySelector(`#comment-${postId}`);
    commentInput.focus();
}

// Initialize the app
fetchPosts();