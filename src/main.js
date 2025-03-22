import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();
  if (!searchText) {
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(searchText);
    renderImages(images);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
    event.target.reset();
  }
});
