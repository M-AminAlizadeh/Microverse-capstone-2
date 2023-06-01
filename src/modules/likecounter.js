/* eslint-disable*/
const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/likes';
const baseURL = 'https://api.tvmaze.com/shows/1/episodes';

export const allLike = async (InvUrl) => {
const res = await fetch(InvUrl);
const data = await res.json();
// show each item likes
return data;
};

export const eachlike = async (index) => {
    const allLike = await likeCounter(involvementURL);
    return allLike[index].likes;
};

export const allItems = async (baseURL) => {
    const res = await fetch(baseURL);
    const data = await res.json();
    return data;
}