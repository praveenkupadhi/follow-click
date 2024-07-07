const selectedTiles = [];

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('tile')) return;
  event.target.classList.add('selected');

  if (selectedTiles.length < 8 && !selectedTiles.includes(event.target)) {
    selectedTiles.push(event.target);
  }

  if (selectedTiles.length >= 8) {
    const interval = setInterval(() => {
      document.querySelector('main').style.pointerEvents = 'none';
      document.body.style.cursor = 'not-allowed';
      const topElement = selectedTiles.shift();
      topElement.classList.remove('selected');
      if (selectedTiles.length === 0) {
        clearInterval(interval);
        document.querySelector('main').style.removeProperty('pointer-events');
        document.body.style.removeProperty('cursor');
      }
    }, 500);
  }
});
