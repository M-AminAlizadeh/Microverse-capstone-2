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

export { postLike, getLike };
