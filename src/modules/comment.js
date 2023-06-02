// Show comments
const getComments = async (invoLink, id) => {
  const res = await fetch(`${invoLink}comments?item_id${id}`);
  const data = await res.json();
  return data;
};

export default getComments;