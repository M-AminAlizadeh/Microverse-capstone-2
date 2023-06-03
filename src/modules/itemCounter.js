import fetchItems from './fetchItems.js';

const itemsCounter = async (baseUrl) => {
  const items = await fetchItems(baseUrl);
  const itemCounterContainer = document.querySelector('.items-count-container');
  itemCounterContainer.innerHTML = `${items.length}`;
};

export default itemsCounter;
