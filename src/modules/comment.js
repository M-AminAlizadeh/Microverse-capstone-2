// Show comments
const getComments = async (invoLink, id) => {
  const res = await fetch(`${invoLink}comments?item_id=item${id}`);
  const data = await res.json();
  return data;
};

// Send comment
const sendComment = async (invoLink, id) => {
  const commentNameInput = document.querySelector('.comment-username');
  const commentmessageInput = document.querySelector('.comment-description');
  const comment = {
    item_id: `item${id}`,
    username: commentNameInput.value,
    comment: commentmessageInput.value,
  };
  const res = await fetch(`${invoLink}comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  console.log(res);
  const comments = await getComments(invoLink, id);
  return comments;
};

export { getComments, sendComment };
