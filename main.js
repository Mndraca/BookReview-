let books = [
  {
    image: "images/img1.webp",
    title: "Swan Song",
    author: "by Elin Hilderbrand",
  },
  {
    image: "images/img2.webp",
    title: "Onix Storm",
    author: "by Rebecca Yarros",
  },
  {
    image: "images/img3.webp",
    title: "Not in Love",
    author: "by Ali Hazelwood",
  },
  {
    image: "images/img4.webp",
    title: "Learher & Lark",
    author: "by Brynne Weaver",
  },
  { image: "images/img5.webp", title: "Reckless", author: "by Lauren Roberts" },
  {
    image: "images/img6.webp",
    title: "Good Energy",
    author: "by Casey Means MD,",
  },
  {
    image: "images/img7.webp",
    title: "Zodiac Academy",
    author: "by Caroline Peckham",
  },
  {
    image: "images/img8.webp",
    title: "The Women",
    author: "by Kristin Hannah",
  },
  { image: "images/img9.webp", title: "Murdle", author: "by G. T. Karber" },
  { image: "images/img10.webp", title: "Skyshade", author: "by Alex Aster" },
  {
    image: "images/img11.webp",
    title: "You Like It Darker",
    author: "by Stephen King",
  },
  {
    image: "images/img12.webp",
    title: "Let's Find Pokemon",
    author: "by Kazunori Aihara",
  },
  {
    image: "images/img13.webp",
    title: "Eruption",
    author: "by Michael Crichton",
  },
  { image: "images/img14.webp", title: "Misfits", author: "by Lisa Yee" },
  {
    image: "images/img15.webp",
    title: "i live inside a while",
    author: "by Xin Li",
  },
  {
    image: "images/img16.webp",
    title: "Shameless",
    author: "by Brian Tyler Cohen",
  },
  {
    image: "images/img17.webp",
    title: "Hounting Adeline",
    author: "by H. D. Carlton",
  },
  {
    image: "images/img18.webp",
    title: "A Demon of unrest",
    author: "by Erik Larson",
  },
  {
    image: "images/img19.webp",
    title: "Bits and Pieces",
    author: "by Whoopi Goldberg",
  },
  {
    image: "images/img20.webp",
    title: "An offer from a gentelmen",
    author: "by Julia Quinn",
  },
  {
    image: "images/img21.webp",
    title: "Powerfull",
    author: "by Lauren Roberts",
  },
];

// Function that will display all books on the first page

function booksDisplayed() {
  const bookContainer = document.getElementById("bookSection");
  books.forEach((book) => {
    const bookList = document.createElement("ul");
    bookList.classList.add("bookList");
    bookList.innerHTML += `<li><img src="${book.image}"></li>
      <li class="books-title">${book.title}</li>
      <li class="books-author">${book.author}</li>`;

    bookContainer.appendChild(bookList);
  });
}

document.addEventListener("DOMContentLoaded", booksDisplayed());

//Funtion for a search button - books from the Home page will be hidden after user clicks on the search button, only results will be displayed;

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("bookSection").classList.add("hidden");
  const bookResults = document.getElementById("bookResults");
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  let filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchInput) ||
      book.author.toLowerCase().includes(searchInput)
    );
  });
  if (!searchInput) {
    bookResults.textContent =
      "Please enter a book or author that you want to review.";
    return;
  }
  bookResults.innerHTML = "";
  if (filteredBooks.length > 0) {
    bookResults.innerHTML = "";
    filteredBooks.forEach((book) => {
      const foundBooks = document.createElement("ul");
      foundBooks.classList.add("foundBooks");
      foundBooks.innerHTML += `<li><img src="${book.image}"></li>
        <li class="books-title">${book.title}</li>
        <li class="books-author">${book.author}</li>`;

      bookResults.appendChild(foundBooks);
    });
  } else {
    bookResults.textContent = "No books with that title/author found.";
  }
});
