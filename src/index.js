import { getAppId } from './modules/appId.js';
import { displayItems } from './modules/displayItems.js';
const baseURL = 'https://api.tvmaze.com/shows/1/episodes';
const involvementURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = localStorage.getItem('appID') || undefined;

// Display items
displayItems(baseURL);

// Comment Popup
const modalTitle = document.querySelector('.modal-title');

document.addEventListener('click', async (e) => {
  let id;
  if (e.target.classList.contains('comment-btn')) {
    id = e.target.id;
    const items = await displayItems(baseURL);
    items.forEach((item) => {
      if (item.id == id) {
        modalTitle.innerHTML = item.name;
      }
    });
  }
});

// App ID
if (!appID) {
  // getAppId(involvementURL, appID);
} else {
}
