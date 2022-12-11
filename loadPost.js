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
      <h4>How did I get here?</h4>
      <p>After more than 20 years as a performing musician, I rediscovered a love of tech when I found myself working from home during the pandemic and learning the skills needed to record, edit, and produce weekly virtual music videos for my job. </p>
      <p>I have a life-long love of learning (some would describe me as a serial hobbyist) and I'm excited to embark on a new career path where I can keep learning new things in a contantly changing field.</p>
      <h4>What are my goals?</h4>
      <p>I want to keep learning new skills. I feel that I can reach a point where I'm qualified to apply for coding jobs.</p>
      <p>I'm also realistic, and don't expect to be single-handedly coding the next Facebook in the next few months. I hope to find an entry-level position with a great team of colleagues who I can learn from as I begin my new career.</p>
    </div>
      <span class="posts-header">Recent Posts</span>
    </div>
`

  document.querySelector('#main').innerHTML = blogPostHtml;
  window.scrollTo(0, 0);
}

