const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('form');
const bookList = document.getElementById('bookList');
const reviewSection = document.getElementById('reviewSection');

searchButton.addEventListener('click', searchBooks);
searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
 })