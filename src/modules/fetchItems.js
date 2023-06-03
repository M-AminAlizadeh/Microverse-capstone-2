// Fetch data from api
const fetchItems = async (baseUrl) => {
  const request = await fetch(baseUrl);
  const respond = await request.json();
  return respond;
};

export default fetchItems;
