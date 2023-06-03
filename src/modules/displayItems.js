import fetchItems from './fetchItems.js';
import displayLikesCount from './displayLikesCount.js';
import postLike from './postLike.js';

// Display items and their likes count
const displayItems = async (baseUrl, invoUrl) => {
  const items = await fetchItems(baseUrl);
  const itemsContainer = document.querySelector('main');
  // Reset it
  itemsContainer.innerHTML = '';
  let content = '';
  items.forEach((item) => {
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
                    src="https://img.icons8.com/ios/50/like--v1.png"
                    alt="unlike icon"
                    id = "${item.id}" 
                    class="like-icon"/>
                <p class="me-2"> 
                  <span id="likes-${item.id}"></span>
                  Likes
                </p>
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
  // Assign it
  itemsContainer.innerHTML = content;
  // Show likes count
  displayLikesCount(invoUrl);
  // Like button event
  const likeBtns = document.querySelectorAll('.like-icon');

  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', async (e) => {
      postLike(invoUrl, e.target.id);
      displayLikesCount(invoUrl);
    });
  });
  return items;
};

export default displayItems;
