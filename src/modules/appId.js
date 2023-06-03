// Get app id
// This app's appId is : oiSeMAlUvRnkkFu4p3zx
const getAppId = async () => {
  const request = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    {
      method: 'POST',
    }
  );
  const respond = await request.json();
  return respond;
};
