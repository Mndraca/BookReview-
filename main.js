let books = [
  {
    id: 1,
    image: "images/img1.webp",
    title: "Swan Song",
    author: "Elin Hilderbrand",
  },
  {
    id: 2,
    image: "images/img2.webp",
    title: "Onix Storm",
    author: "Rebecca Yarros",
  },
  {
    id: 3,
    image: "images/img3.webp",
    title: "Not in Love",
    author: "Ali Hazelwood",
  },
  {
    id: 4,
    image: "images/img4.webp",
    title: "Learher & Lark",
    author: "Brynne Weaver",
  },
  {
    id: 5,
    image: "images/img5.webp",
    title: "Reckless",
    author: "Lauren Roberts",
  },
  {
    id: 6,
    image: "images/img6.webp",
    title: "Good Energy",
    author: "Casey Means MD",
  },
  {
    id: 7,
    image: "images/img7.webp",
    title: "Zodiac Academy",
    author: "Caroline Peckham",
  },
  {
    id: 8,
    image: "images/img8.webp",
    title: "The Women",
    author: "Kristin Hannah",
  },
  { id: 9, image: "images/img9.webp", title: "Murdle", author: "G. T. Karber" },
  {
    id: 10,
    image: "images/img10.webp",
    title: "Skyshade",
    author: "Alex Aster",
  },
  {
    id: 11,
    image: "images/img11.webp",
    title: "You Like It Darker",
    author: "Stephen King",
  },
  {
    id: 12,
    image: "images/img12.webp",
    title: "Let's Find Pokemon",
    author: "Kazunori Aihara",
  },
  {
    id: 13,
    image: "images/img13.webp",
    title: "Eruption",
    author: "Michael Crichton",
  },
  { id: 14, image: "images/img14.webp", title: "Misfits", author: "Lisa Yee" },
  {
    id: 15,
    image: "images/img15.webp",
    title: "i live inside a while",
    author: "Xin Li",
  },
  {
    id: 16,
    image: "images/img16.webp",
    title: "Shameless",
    author: "Brian Tyler Cohen",
  },
  {
    id: 17,
    image: "images/img17.webp",
    title: "Haunting Adeline",
    author: "H. D. Carlton",
  },
  {
    id: 18,
    image: "images/img18.webp",
    title: "A Demon of Unrest",
    author: "Erik Larson",
  },
  {
    id: 19,
    image: "images/img19.webp",
    title: "Bits and Pieces",
    author: "Whoopi Goldberg",
  },
  {
    id: 20,
    image: "images/img20.webp",
    title: "An Offer from a Gentleman",
    author: "Julia Quinn",
  },
  {
    id: 21,
    image: "images/img21.webp",
    title: "Powerful",
    author: "Lauren Roberts",
  },
];

// Function that will display all books on the first page
function booksDisplayed() {
  const bookContainer = document.getElementById("bookSection");
  document.getElementById("favorites").classList.add("hidden");
  bookContainer.innerHTML = ''; 
  books.forEach((book) => {
    const bookList = document.createElement("ul");
    bookList.classList.add("bookList");
    bookList.setAttribute("id", `book-${book.id}`);
    bookList.innerHTML += `
      <li><button onclick="removeBook(${book.id})" class="remove-button" style="background-color: #f4f4f4; color:#333; border:none " ><i class="far fa-times"></i></button></li>
      <li><img src="${book.image}"></li>
      <li class="book-title">${book.title}</li>
      <li class="book-author">${book.author}</li>
      <li><button onclick="addToFavorites(${book.id})">Add to Favorites <i class="fa-regular fa-heart"></i></button></li>
    `;

    bookContainer.appendChild(bookList);
  });
}

document.addEventListener("DOMContentLoaded", booksDisplayed);

function removeBook(bookId) {
  books = books.filter((book) => book.id === bookId);

  const bookElement = document.getElementById(`book-${bookId}`);
  if (bookElement) {
    bookElement.remove();
  }
}

// Function for a search button - books from the Home page will be hidden after user clicks on the search button, only results will be displayed
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("bookSection").classList.add("hidden");
  const bookResults = document.getElementById("bookResults");
  const searchInput = document.getElementById("searchInput").value.toLowerCase().trim();

  let filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchInput) ||
      book.author.toLowerCase().includes(searchInput)
    );
  });

  if (!searchInput) {
    bookResults.textContent = "Please enter a book or author that you want to review.";
    return;
  }

  bookResults.innerHTML = "";
  if (filteredBooks.length > 0) {
    filteredBooks.forEach((book) => {
      const foundBooksImage = document.createElement("div");
      foundBooksImage.classList.add("foundBooksImage");
      foundBooksImage.innerHTML += `<img src="${book.image}">`;
      
      const foundBooksText = document.createElement("div");
      foundBooksText.classList.add("foundBooksText");
      foundBooksText.innerHTML += `
        <h1 class="book-title">${book.title}</h1>
        <h2 class="book-author">${book.author}</h2>
        <button onclick="addToFavorites(${book.id})">Add to Favorites <i class="fa-regular fa-heart"></i></button>
      `;

      bookResults.appendChild(foundBooksImage);
      bookResults.appendChild(foundBooksText);
    });

    const reviewField = document.createElement("input");
    reviewField.setAttribute("type", "text");
    reviewField.setAttribute("id", "reviewField");
    bookResults.appendChild(reviewField);

    let saveButton = document.createElement("button");
    saveButton.setAttribute("id", "addReview");
    saveButton.innerText = "Add Review";
    bookResults.appendChild(saveButton);

    let addReview = document.getElementById("addReview");
    addReview.addEventListener("click", function () {
      let reviewField = document.getElementById("reviewField");
      let reviewContainer = document.createElement("div");
      let review = document.createElement("p");

      review.innerText = `${reviewField.value}`;

      reviewContainer.appendChild(review);

      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "deleteReview");
      deleteButton.innerText = "Delete Review";
      reviewContainer.appendChild(deleteButton);

      if (reviewField.value === "") {
        alert("Please Enter Review");
        return;
      } else {
        bookResults.appendChild(reviewContainer);
        filteredBooks.forEach((book) => (book.review = reviewField.value));
      }
      reviewField.value = "";

      deleteButton.addEventListener("click", function () {
        reviewContainer.remove();
      });
    });
  } else {
    bookResults.textContent = "No books with that title/author found.";
  }
});

const favoriteBooksIds = new Set();

function addToFavorites(bookId) {
  document.getElementById("favorites").classList.remove("hidden");

  const book = books.find((book) => book.id === bookId);
  if (!book || favoriteBooksIds.has(bookId)) return;

  const favoriteBooksList = document.getElementById("favorites");
  const clonedBooks = document.createElement("li");

  clonedBooks.className = "bookList";
  clonedBooks.innerHTML = `
    <li><img src="${book.image}"></li>
    <li>${book.title}</li>
    <li>${book.author}</li>
    ${book.review ? `<li><i>Review: ${book.review}</i></li>` : ''}
    <li><button id="removeFromFavorites" onclick="removeFromFavorites(${bookId})">Remove from favorites</button></li>
  `;

  favoriteBooksList.appendChild(clonedBooks);

  favoriteBooksIds.add(bookId);
}

function removeFromFavorites(bookId) {
  favoriteBooksIds.delete(bookId);

  const favoriteBookElement = document.getElementById(`favoriteBook-${bookId}`);
  if (favoriteBookElement) {
    favoriteBookElement.remove();
  }

  if (favoriteBooksIds.size === 0) {
    document.getElementById("favorites").classList.add("hidden");
  }
}


const favoritesLink = document.getElementById("favoritesLink"); 
  favoritesLink.addEventListener('click', () => {
  document.getElementById("favorites").classList.remove("hidden"); 
} )

const homePage = document.getElementById("homePage"); 
homePage.addEventListener('click', () => {
  document.getElementById("bookSection").classList.remove("hidden");
  document.getElementById("bookResults").classList.add("hidden");
} )