import { postLike, getLike } from './like.js';

const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/';

const mainContent = document.querySelector('main');

// Showing Items
const displayItems = async (baseURL) => {
  const res = await fetch(baseURL);
  const data = await res.json();
  mainContent.innerHTML = '';
  let content = '';
  data.forEach((item) => {
    content += `
    <!-- Card -->
      <div class="card" style="width: 20rem" id="${item.id}">
        <!-- Snapshoot -->
        <img
          src="${item.image.original}"
          class="card-img-top"
          alt="${item.name} poster" />
        <!-- Name and Like row -->
        <div
          class="card-body d-flex justify-content-between align-items-center">
          <h4 class="card-title text-capitalize"> ${item.name} </h4>
          <!-- unlike icon-->
          <div class="like-container d-flex flex-column align-items-center">
              <img
                width="30"
                height="30"
                id="${item.id}"
                src="https://img.icons8.com/ios/50/like--v1.png"
                alt="unlike icon" 
                class="like-btn" />
            <p class="card-text"><span class="me-2" id='likes-${
  item.id
}'></span>Likes</p>
            <!-- src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" -->
          </div>
        </div>
        <!-- Summary -->
        <div class="card-body my-0 py-0">
          ${item.summary.slice(0, 100)}...
        </div>
        <!-- Buttons -->
        <div class="card-body d-flex justify-content-between">
          <button type="button" class="btn btn-info text-light comment-btn" data-bs-toggle="modal" width="2rem" height="2rem" id="${
  item.id
}" data-bs-target="#e">Comments</button>
          <button type="button" class="btn btn-secondary" id="${
  item.id
}">Reservation</button>
        </div>
      </div>
    `;
  });
  mainContent.innerHTML = content;
  return data;
};

// Showing likes count
const showLikesCount = async (invoUrl) => {
  const likesData = getLike(invoUrl);
  likesData.forEach((eachItemData) => {
    const likesCount = [`${eachItemData.likes}`];
    const likesCountElement = document.getElementById(
      `likes-${eachItemData.item_id}`,
    );
    if (likesCountElement) {
      likesCountElement.innerHTML = likesCount;
    }
  });
};
showLikesCount(involvementURL);
// Send likes to server
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-btn')) {
    postLike(involvementURL, e.target.id);
    showLikesCount();
  }
});

export default displayItems;
