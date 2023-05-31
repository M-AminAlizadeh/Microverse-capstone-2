// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import { loadFromApi, getAppId } from './modules/api.js';

getAppId();
loadFromApi();