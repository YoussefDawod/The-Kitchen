// FILE: script.js
let currentlyOpenList = null;

document.querySelectorAll('.a-sorte').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const listClass = `${this.classList[1]}-list`;
    const list = document.querySelector(`.${listClass}`);

    // Schließen Sie die aktuell geöffnete Liste, wenn sie nicht die gleiche ist wie die geklickte
    if (currentlyOpenList && currentlyOpenList !== list) {
      currentlyOpenList.style.display = 'none';
    }

    // Öffnen oder schließen Sie die geklickte Liste
    if (list.style.display === 'none' || list.style.display === '') {
      list.style.display = 'block';
      currentlyOpenList = list;
    } else {
      list.style.display = 'none';
      currentlyOpenList = null;
    }
  });
});