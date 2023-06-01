/* eslint-disable*/
const likeCounter = async (InvUrl) => {
const res = await fetch(InvUrl);
const data = res.json();
console.log(data);
};

export default likeCounter;