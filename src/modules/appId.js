const getAppId = async (invoUrl) => {
  const res = await fetch(invoUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    body: {},
  });

  const data = res.json();
  console.log(data);
  appID = data;
  // Save to localstorage
  localStorage.setItem('appID', data);
};

export { getAppId };
