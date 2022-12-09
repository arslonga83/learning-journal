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
  } else if (e.target.id === 'hamburger') {
    displayMenu();
  }
})

// load cards from data file and render
function getCardsHtml() {
  let CardsHtml = ''
  let gridNumber = 1;
  blogPosts.map((post) => {
    CardsHtml += `
      <div class="card 
      // this code adds a style so more cards display on large screens
        ${gridNumber > 3 && gridNumber < 7 ? 
          'bigScreenCards' : 
          ''}"> 
        <img class="card-img" data-id="${post.id}" src=${post.imgUrl} alt="">
        <p class="date">${post.date}</p>
        <h2 class="card-title">${post.title}</h2>
        <p class="card-description">${post.summary}</p>
     </div>
    `
    gridNumber++;
  })
  // CardsHtml += `
  //   <span class="posts-header"><a id="more" class="more" href=#>View More<a/></span>
  //   `
  return CardsHtml;
}

function displayMenu() {
  const menu = document.getElementById('menu-items');
  menu.classList.toggle('menu-on')
}

function renderAbout() {
  document.querySelector('#main').innerHTML = aboutHtml;
}

function renderMain() {
  document.querySelector('#cards-grid').innerHTML = getCardsHtml();
}

renderMain();


document.querySelector('#more').addEventListener('click', (e) => {
  e.preventDefault(); //prevent autoscroll to top
  document.querySelectorAll('.card').forEach((card) => {
    card.style.display = 'block'
  })
})


