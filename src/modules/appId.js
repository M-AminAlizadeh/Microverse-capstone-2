const getAppId = async (invoUrl) => {
  const res = await fetch(invoUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    // body: {},
  });

  const data = await res.json();
  console.log(data);
  // appID = data;
  // Save to localstorage
  // localStorage.setItem('appID', data);
};

export default getAppId;
