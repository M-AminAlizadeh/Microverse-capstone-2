// Get app id
// This app's appId is : UKP27MmenkdUVvm9H93H
const getAppId = async () => {
  const request = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    {
      method: 'POST',
    },
  );
  const respond = await request.json();
  return respond;
};

export default getAppId;
