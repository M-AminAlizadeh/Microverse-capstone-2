import { getAppId } from './modules/appId.js';
import { displayItems } from './modules/displayItems.js';
const baseURL = 'https://api.tvmaze.com/shows/1/episodes';
const involvementURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = localStorage.getItem('appID') || undefined;

displayItems(baseURL);
if (!appID) {
  // getAppId(involvementURL, appID);
} else {
}
