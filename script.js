import { blogPosts } from "./data.js";

const homeBtn = document.querySelector('#home-btn');
const aboutBtn = document.querySelector('#about-btn');

homeBtn.addEventListener('click', () => {
  location.reload();
})

aboutBtn.addEventListener('click', () => {
  renderAbout();
})

document.addEventListener('click', (e) => {
  if (e.target.dataset.id) {
    loadPost(e.target.dataset.id)
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

function loadPost(postId) {
  document.querySelector('#main').innerHTML = `INSERT ${postId} HERE`
}

function renderAbout() {
  document.querySelector('#main').innerHTML = 'INSERT ABOUT PAGE HERE'
}


function renderMain() {
  document.querySelector('#cards-grid').innerHTML = getPostsHtml();
}

renderMain();



