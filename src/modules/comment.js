const involvementURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/';

const comment = () => {
};
// Show comments
const getComments = async (invoLink, id) => {
  const res = await fetch(`${invoLink}comments?item_id${id}`);
  const data = await res.json();
  return data;
};

export default getComments;