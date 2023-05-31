const baseUrl = 'https://api.tvmaze.com/shows/1/episodes';
const involveUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const id = 'N8B1K35tsiHmKETVSUL0';
const postUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/:${id}/likes`;

const content = document.querySelector('.content');

export const updateLike = async (id) => {
  const responce = await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  console.log(responce);
};

export const getAppId = async () => {
  const localAppId = localStorage.getItem('LocalAppId');
  let AppId = '';
  if (localAppId) {
    AppId = localAppId;
  } else {
    const response = await fetch(involveUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: 'item1' }),
    });
    const obj = await response.json();
    AppId = obj.result;
    localStorage.setItem('LocalAppId', AppId);
  }
  console.log(AppId);
  return AppId;
};

export const GetLikes = async () => {

}

export const loadFromApi = async () => {
  const respond = await fetch(baseUrl);
  const dataresult = await respond.json();
  dataresult.forEach((items) => {
    const div = document.createElement('div');
    div.className = 'item-from-api';
    const img = document.createElement('img');
    img.src = items.image.medium;
    div.appendChild(img);

    const div2 = document.createElement('div');
    div2.className = 'item-name';
    div2.innerHTML = `
      <span>${items.name}</span>
      
      `;

    const span2 = document.createElement('span');
    const btn = document.createElement('button');
    btn.id = items.id;
    btn.textContent = 'Like';
    span2.appendChild(btn);

    div2.appendChild(span2);
    div.appendChild(div2);

    const div3 = document.createElement('div');
    div3.className = 'number-of-likes';
    div3.innerHTML = `<span> ${items.id} likes</span>`;
    div.appendChild(div3);

    const commentbtn = document.createElement('button');
    commentbtn.className = 'commentBtn';
    commentbtn.id = items.id;
    commentbtn.innerHTML = 'Comment';
    div.appendChild(commentbtn);

    const reservbtn = document.createElement('button');
    reservbtn.className = 'reserveBtn';
    reservbtn.innerHTML = 'Reservation';
    div.appendChild(reservbtn);

    content.appendChild(div);

    // action listner
    const likeBtn = document.getElementById(`${items.id}`);
    likeBtn.addEventListener('click', () => {
      updateLike(items.id);
    });
  });
};

export const Loade = fetch(baseUrl);
export const addScore = async (player) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });
};