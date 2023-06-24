const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  displaySearchResults(searchTerm);
});

function displaySearchResults(searchTerm) {
  searchResults.textContent = `No results found for "${searchTerm}". Please try again.`;
}
