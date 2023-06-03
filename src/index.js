// Imports
import { displayItems } from './modules/displayItems.js';
import itemsCounter from './modules/itemCounter.js';
import likeEventListner from './modules/likeEventListener.js';
import { getComments, sendComment } from './modules/comment.js';

// Global variables
const baseURL = 'https://api.tvmaze.com/shows/1/episodes';
const involvementURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/';

// const likelist = await getLike(involvementURL);

// Display items
displayItems(baseURL, involvementURL);
// Items counter
itemsCounter(baseURL);

getComments(involvementURL, 1);
// Comment Popup
const modalTitle = document.querySelector('.modal-title');
const modalSnapshoot = document.querySelector('.modal-snapshoot');
const modalInitialDate = document.querySelector('.modal-initial-date');
const modalRating = document.querySelector('.modal-rating');
const modalSeasonNumber = document.querySelector('.modal-season-number');
const modalSummary = document.querySelector('.modal-summary');
const modalWebsiteLink = document.querySelector('.modal-website-link');
const modalCommentsContainer = document.querySelector('.comments-container');
const modalCommentsCount = document.querySelector('.comments-counter');
const modalCommentBtn = document.querySelector('.comment-submit-btn');

document.addEventListener('click', async (e) => {
  let id;
  if (e.target.classList.contains('comment-btn')) {
    id = e.target.id;
    const items = await displayItems(baseURL, involvementURL);
    const comments = await getComments(involvementURL, id);
    modalCommentsContainer.innerHTML = '';
    items.forEach((item) => {
      if (item.id === Number(id)) {
        let commentContent = '';
        modalTitle.innerHTML = item.name;
        modalSnapshoot.src = item.image.original;
        modalSnapshoot.alt = item.name;
        modalInitialDate.innerText = item.airdate;
        modalRating.innerHTML = item.rating.average;
        modalSeasonNumber.innerText = item.season;
        modalSummary.innerHTML = `${item.summary.slice(0, 40)}....`;
        modalWebsiteLink.innerHTML = `<a href=${item.url} target="_blank">Click here</a>`;
        // comment
        modalCommentsCount.innerHTML = comments.length;
        comments.forEach((comment) => {
          commentContent += `
          <!-- Comment -->
              <div class="comment-container d-flex">
                <div class="comment-date me-2">${comment.creation_date}</div>
                <div class="comment-author me-2">${comment.username}:</div>
                <div class="comment-content">${comment.comment}</div>
              </div>`;
        });
        modalCommentsContainer.innerHTML = commentContent;
        // comment form
      }
    });
    modalCommentBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await sendComment(involvementURL, id);
      await getComments(involvementURL, id);
    });
  }
});
