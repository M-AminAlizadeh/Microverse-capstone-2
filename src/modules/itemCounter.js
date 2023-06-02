const itemsCounter = (items) => {
  const count = items.childElementCount;
  const itemsBtnNav = document.getElementById('items-count');
  itemsBtnNav.innerHTML = `${count} Moves`;
};

export default itemsCounter;