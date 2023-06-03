import fetchLikes from './fetchLikes.js';

const displayLikesCount = async (invoLink) => {
  const likesData = await fetchLikes(invoLink);
  likesData.forEach((likeData) => {
    const likesCount = [`${likeData.likes}`];
    const likesCountContainer = document.querySelector(
      `#likes-${likeData.item_id}`,
    );
    if (likesCountContainer) {
      likesCountContainer.innerHTML = likesCount;
    }
  });
};

export default displayLikesCount;
