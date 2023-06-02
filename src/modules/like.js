const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/likes';

const postLike = async (invoUrl, itemId) => {
  const res = await fetch(`${invoUrl}likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
    }),
  });
  const data = await res.json();
  return data;
};

const getLike = async (invoUrl) => {
  const res = await fetch(`${invoUrl}likes`);
  const data = await res.json();
  return data;
};

const allItems = async (baseURL) => {
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
};

export const updateLikesOnDOM = (likeBtn) => {
  const likeElement = likeBtn.nextElementSibling;
  const likes = Number(likeElement.innerHTML.split(' ')[0]);
  likeElement.innerHTML = `${likes + 1} likes`;
};

export const addLike = (likeBtn) => {
  fetch(involvementURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn.id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    });
};

export const addLikesListenerButtons = () => {
  const Buttons = document.querySelectorAll('.like-btn');
  Buttons.forEach((eachlike) => {
    eachlike.addEventListener('click', (e) => {
      e.preventDefault();
      addLike(eachlike);
      updateLikesOnDOM(eachlike);
    });
  });
};

export { postLike, getLike, allItems };
