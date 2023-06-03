// Fetch data from api
const fetchLikes = async (invoLink) => {
  const request = await fetch(`${invoLink}likes`);
  const respond = await request.json();
  return respond;
};

export default fetchLikes;
