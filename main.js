const shareContainer = document.querySelector('.share-container');
const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', _ => {
  shareContainer.classList.toggle('show-options');
});
