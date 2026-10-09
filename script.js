const createPost = (title, content) => {
    const blogContainer = document.getElementById('blog-posts-container');

    const post = document.createElement('div');
    post.classList.add('blog-post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const editTitleBtn = document.createElement('button');
    editTitleBtn.textContent = 'Edit Title';
    editTitleBtn.classList.add('edit-btn');
    editTitleBtn.addEventListener('click', () => editTitle(postTitle));

    const postContent = document.createElement('p');
    postContent.textContent = content;

    const editContentBtn = document.createElement('button');
    editContentBtn.textContent = 'Edit Content';
    editContentBtn.classList.add('edit-btn');
    editContentBtn.addEventListener('click', () => editContent(postContent));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Post';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deletePost(post));

    post.appendChild(postTitle);
    post.appendChild(editTitleBtn);
    post.appendChild(postContent);
    post.appendChild(editContentBtn);
    post.appendChild(deleteBtn);
    blogContainer.appendChild(post); 
}

const addPost = () => {
    const title = prompt('Enter the title of your post: ');
    if (!title) return;
    const content = prompt('Enter the content of your post: ');
    if (!content) return;

    createPost(title, content);
}

const editTitle = (postTitle) => {
    const newTitle = prompt('Enter a new title for your post: ', postTitle.textContent);
    if (newTitle) {
        postTitle.textContent = newTitle;
        alert('Title updated successfully!');
    }
}

const editContent = (postContent) => {
    const newContent = prompt('Enter a new content for your post: ', postContent.textContent);
    if (newContent) {
        postContent.textContent = newContent;
        alert('Content updated successfully!');
    }
}

const deletePost = (post) => {
    const postTitle = post.firstChild.textContent;
    const toDelete = confirm(`Are you sure you want to delete "${postTitle}"?`);
    if (toDelete) {
        post.remove();
        alert(`"${postTitle}" deleted successfully!`);
    }
}

window.onload = () => {
    let posts = [
        { 
            title: 'Welcome to My Blog', 
            content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!"
        },

        { 
            title: 'Learning JavaScript',
            content: 'JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation.'
        },
        
        { 
            title: 'Web Development Tips',
            content: 'Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary.'
        }
    ] 
    
    posts.forEach(post => createPost(post.title, post.content));

    const addPostBtn = document.getElementById('add-post-btn');
    addPostBtn.addEventListener('click', addPost);
}