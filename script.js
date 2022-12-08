import { blogPosts } from "./data.js";
import { aboutHtml } from "./about.js";
import { loadPost } from "./loadPost.js";

document.addEventListener('click', (e) => {
  if (e.target.dataset.id) {
    loadPost(e.target.dataset.id)
  } else if (e.target.id === 'home-btn') {
    location.reload();
  } else if (e.target.id === 'about-btn') {
    renderAbout();
  } 
})

// load cards from data file and render
function getPostsHtml() {
  let postsHtml = ''
  blogPosts.map((post) => {
    postsHtml += `
      <div class="card">
        <img class="card-img" data-id="${post.id}" src=${post.imgUrl} alt="">
        <p class="date">${post.date}</p>
        <h2 class="card-title">${post.title}</h2>
        <p class="card-description">${post.summary}</p>
     </div>
    `
  })
  return postsHtml;
}

// function loadPost(postId) {
//   document.querySelector('#main').innerHTML = blogPostHtml;
// }

function renderAbout() {
  document.querySelector('#main').innerHTML = aboutHtml;
}

function renderMain() {
  document.querySelector('#cards-grid').innerHTML = getPostsHtml();
}

renderMain();



