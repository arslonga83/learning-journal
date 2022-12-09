import { blogPosts } from "./data.js";

export function loadPost(postId) {
  const selectedPost = blogPosts.filter((post) => {
    return post.id === postId;
  })[0]
  
  const blogPostHtml = `
    <div class="blog-post">
      <p class="blog-date">${selectedPost.date}</p>
      <h1 class="blog-title">${selectedPost.title}</h1>
      <p class="blog-body">${selectedPost.text}</p> 
      <img class="blog-img" src=${selectedPost.imgUrl} alt="">
      <div class="about-content">
      <h4>How I stay committed to learning</h4>
      <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
      <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
      <h4>How I got started</h4>
      <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
      <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
      </div>
      <span class="posts-header">Recent Posts</span>
    </div>
`

  document.querySelector('#main').innerHTML = blogPostHtml;
  window.scrollTo(0, 0);
}

