// eslint-disable-next-line
import itemsCounter from './itemcounter.js';
const mainContent = document.querySelector('main');

// Showing Items
const displayItems = async (baseURL, item, allLikes) => {
  mainContent.innerHTML = '';
  let content = '';
  // items.forEach((item, index) => {
  for (let i = 0; i < 13; i += 1) {
    const mealLikes = allLikes.find((like) => like.item_id === (item[i].id).toString());
    if (i < 29) {
      content += `s
      <!-- Card -->
        <div class="card" style="width: 20rem" id="${item[i].id}">
          <!-- Snapshoot -->
          <img
            src="${item[i].image.original}"
            class="card-img-top"
            alt="${item[i].name} poster" />
          <!-- Name and Like row -->
          <div
            class="card-body d-flex justify-content-between align-items-center">
            <h4 class="card-title text-capitalize"> ${item[i].name} </h4>
            <!-- unlike icon-->
            <div class="like-container d-flex flex-column align-items-center">            
              <a href = "" class = "like-btn" id = "${item[i].id}">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/like--v1.png"
                  alt="unlike icon" />
              </a>
              <span class="me-2">${mealLikes ? mealLikes.likes : 0} Likes</span>
              <!-- src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" -->
            </div>
          </div>
          <!-- Summary -->
          <div class="card-body my-0 py-0">
            ${item[i].summary.slice(0, 100)}...
          </div>
          <!-- Buttons -->
          <div class="card-body d-flex justify-content-between">
            <button type="button" class="btn btn-info text-light comment-btn" data-bs-toggle="modal" width="2rem" height="2rem" id="${
  item[i].id
}" data-bs-target="#e">Comments</button>
            <button type="button" class="btn btn-secondary" id="${item[i].id
}">Reservation</button>
          </div>
        </div>
      `;
    }
  }
  mainContent.innerHTML = content;
  itemsCounter(mainContent);
  return item;
};

// Showing likes count
// const showLikesCount = async (invoUrl) => {
//   const likesData = await getLike(invoUrl);
//   likesData.forEach((eachItemData) => {
//     const likesCount = [`${eachItemData.likes}`];
//     const likesCountElement = document.getElementById(
//       `likes-${eachItemData.item_id}`,
//     );
//     if (likesCountElement) {
//       likesCountElement.innerHTML = likesCount;
//     }
//   });
// };
// showLikesCount(involvementURL);
// // Send likes to server
// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('like-btn')) {
//     postLike(involvementURL, e.target.id);
//     showLikesCount();
//   }
// });

export default displayItems;
