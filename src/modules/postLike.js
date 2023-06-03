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
  console.log(data)
  return data;
};

export default postLike;
