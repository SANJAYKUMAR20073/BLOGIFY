// Blog data
let blogs = [];

// Function to render all blog posts
const renderBlogs = () => {
  const blogPosts = document.getElementById('blog-posts');
  blogPosts.innerHTML = '';

  blogs.forEach((blog, index) => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <button onclick="editBlog(${index})">Edit</button>
      <button onclick="deleteBlog(${index})">Delete</button>
    `;
    blogPosts.appendChild(blogCard);
  });
};

// Function to add a new blog post
const addBlog = (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (title.trim() === '' || content.trim() === '') {
    alert('Please fill out all fields.');
    return;
  }

  const blog = {
    title,
    content
  };

  blogs.push(blog);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  renderBlogs();
};

// Function to edit a blog post
const editBlog = (index) => {
  const title = prompt('Enter updated title:', blogs[index].title);
  const content = prompt('Enter updated content:', blogs[index].content);

  if (title !== null && content !== null) {
    blogs[index].title = title;
    blogs[index].content = content;
    renderBlogs();
  }
};

// Function to delete a blog post
const deleteBlog = (index) => {
  const confirmation = confirm('Are you sure you want to delete this blog?');

  if (confirmation) {
    blogs.splice(index, 1);
    renderBlogs();
  }
};

// Add event listener to the "Add Blog" form
document.getElementById('add-blog-form').addEventListener('submit', addBlog);

// Initial rendering of blog posts
renderBlogs();
