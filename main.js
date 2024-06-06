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
    title: "An Offer",
    author: "Julia Quinn",
  },
  {
    id: 21,
    image: "images/img21.webp",
    title: "Powerful",
    author: "Lauren Roberts",
  },
];

function booksDisplayed() {
  const bookContainer = document.getElementById("bookSection");
  bookContainer.classList.remove("hidden"); //Made books on first page visible, everything else is hidden with added classes "hidden" to other elements;
  bookContainer.innerHTML = "";
  books.forEach((book) => {
    const bookList = document.createElement("ul");
    bookList.classList.add("bookList");
    bookList.setAttribute("id", `book-${book.id}`);
    bookList.innerHTML += `
      <li><img src="${book.image}"></li>
      <li class="book-title" id="title-${book.id}" contenteditable="true">${book.title}</li>
      <li class="book-author" id="author-${book.id}" contenteditable="true">${book.author}</li>
      <li class="li-buttons">
        <button id="fav-btn-${book.id}" onclick="toggleFavorite(${book.id}, 'fav-btn-${book.id}')">Add to Favorites <i class="fa-regular fa-heart"></i></button>
        <button onclick="removeBook(${book.id})" class="remove-button"><i class="fa-regular fa-trash-can"></i></button>
      </li>
    `;
    bookContainer.appendChild(bookList);

    const bookTitleElement = document.getElementById(`title-${book.id}`);
    if (bookTitleElement) {
      bookTitleElement.addEventListener("input", function (event) {
        const bookTitle = event.target.textContent;
        book.title = bookTitle;
      });
    }
    const bookAuthorElement = document.getElementById(`author-${book.id}`);
    if (bookAuthorElement) {
      bookAuthorElement.addEventListener("input", function (event) {
        const bookAuthor = event.target.textContent;
        book.author = bookAuthor;
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", booksDisplayed);

function removeBook(bookId) {
  books = books.filter((book) => book.id !== bookId);
  const bookElement = document.getElementById(`book-${bookId}`);
  if (bookElement) {
    bookElement.remove();
  }
  if (favoriteBooksIds.has(bookId)) {
    removeFromFavorites(bookId, `fav-btn-${bookId}`);
  }
}

//FUNCTION SEARCH BOOK
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookContainer = document.getElementById("bookSection");
  bookContainer.classList.add("hidden");
  const bookResults = document.getElementById("bookResults");
  bookResults.classList.remove("hidden");

  const elementToHide = document.getElementById("savedReview");
  elementToHide.style.display = "none";

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
    filteredBooks.forEach((book) => {
      const foundBooksImage = document.createElement("div");
      foundBooksImage.classList.add("foundBooksImage");
      foundBooksImage.innerHTML += `<img class="foundBooksImg" src="${book.image}">`;

      const foundBooksText = document.createElement("div");
      foundBooksText.classList.add("foundBooksText");
      foundBooksText.innerHTML += `
        <h1 class="book-title">${book.title}</h1>
        <h2 class="book-author">${book.author}</h2>
        <button id="search-fav-btn-${book.id}" onclick="toggleFavorite(${book.id}, 'search-fav-btn-${book.id}')">Add to Favorites <i class="fa-regular fa-heart"></i></button>
      `;

      bookResults.appendChild(foundBooksImage);
      bookResults.appendChild(foundBooksText);
    });

    // const reviewField = document.createElement("input");
    // reviewField.setAttribute("type", "text");
    // reviewField.setAttribute("id", "reviewField");
    // bookResults.appendChild(reviewField);

    // let saveButton = document.createElement("button");
    // saveButton.setAttribute("id", "addReview");
    // saveButton.innerText = "Add Review";
    // bookResults.appendChild(saveButton);

    // let addReview = document.getElementById("addReview");
    // addReview.addEventListener("click", function () {
    //   let reviewField = document.getElementById("reviewField");
    //   let reviewContainer = document.createElement("div");
    //   reviewContainer.className = "deleteSection";
    //   let review = document.createElement("p");

    //   review.innerText = `${reviewField.value}`;

    //   reviewContainer.appendChild(review);

    //   let deleteButton = document.createElement("button");
    //   deleteButton.setAttribute("class", "deleteReview");
    //   deleteButton.innerText = "Delete Review";
    //   reviewContainer.appendChild(deleteButton);

    //   if (reviewField.value === "") {
    //     alert("Please Enter Review");
    //     return;
    //   } else {
    //     bookResults.appendChild(reviewContainer);
    //     filteredBooks.forEach((book) => (book.review = reviewField.value));
    //   }
    //   reviewField.value = "";

    //   deleteButton.addEventListener("click", function () {
    //     reviewContainer.remove();
    //   });
    // });
  } else {
    bookResults.textContent = "No books with that title/author found.";
  }
});

//======================================================

document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const bookSelect = document.getElementById("bookSelect");
  const reviewText = document.getElementById("reviewText");
  const savedReviewsList = document.getElementById("savedReviewsList");

  let reviews = [];

  books.forEach((book) => {
    const option = document.createElement("option");
    option.value = book.title;
    option.textContent = book.title;
    bookSelect.appendChild(option);
  });

  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedBook = books.find((book) => book.title === bookSelect.value);
    const existingReviewIndex = reviews.findIndex(
      (review) => review.title === selectedBook.title
    );

    if (existingReviewIndex > -1) {
      reviews[existingReviewIndex].text = reviewText.value;
      alert("You already added a review for this book.");
    } else {
      const review = {
        title: selectedBook.title,
        text: reviewText.value,
        image: selectedBook.image,
      };

      reviews.push(review);
      displayReviews();

      reviewForm.reset();
    }
  });

  function displayReviews() {
    savedReviewsList.innerHTML = "";

    reviews.forEach((review, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${review.image}" alt="${review.title}" style="width: 130px; height: auto;">
        <strong>${review.title}</strong>
        <p>${review.text}</p>
        <button class="delete-button" data-index="${index}">Delete</button>
      `;
      savedReviewsList.appendChild(li);

      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        reviews.splice(index, 1);
        displayReviews();
      });
    });
  }
});

//========================================================

const favoriteBooksIds = new Set();

function toggleFavorite(bookId, buttonId) {
  if (favoriteBooksIds.has(bookId)) {
    removeFromFavorites(bookId, buttonId);
  } else {
    addToFavorites(bookId, buttonId);
  }
}

function addToFavorites(bookId, buttonId) {
  const book = books.find((book) => book.id === bookId);
  if (!book || favoriteBooksIds.has(bookId)) return;

  const favoriteBooksList = document.getElementById("favorites");
  favoriteBooksList.classList.remove("hidden");
  const favHeader = document.getElementById("favorites-h");
  favHeader.classList.remove("hidden");
  const clonedBooks = document.createElement("ul");

  clonedBooks.className = "bookList hidden";
  clonedBooks.classList.remove("hidden");
  clonedBooks.setAttribute("id", `favoriteBook-${bookId}`);
  clonedBooks.innerHTML = `
    <li><img src="${book.image}"></li>
    <li class="book-title">${book.title}</li>
    <li class="book-author">${book.author}</li>
    ${book.review ? `<li><i>Review: ${book.review}</i></li>` : ""}
    <li><button id="removeFromFavorites" onclick="removeFromFavorites(${bookId}, 'fav-btn-${bookId}', 'search-fav-btn-${bookId}')">Remove from favorites</button></li>
  `;

  favoriteBooksList.appendChild(clonedBooks);

  favoriteBooksIds.add(bookId);

  updateFavoriteButton(buttonId, true);
}

function removeFromFavorites(bookId, homeButtonId, searchButtonId) {
  favoriteBooksIds.delete(bookId);

  const favoriteBookElement = document.getElementById(`favoriteBook-${bookId}`);
  if (favoriteBookElement) {
    favoriteBookElement.remove();
  }

  updateFavoriteButton(homeButtonId, false);
  updateFavoriteButton(searchButtonId, false);

  if (favoriteBooksIds.size === 0) {
    document.getElementById("favorites-h").classList.add("hidden");
  }
}

function updateFavoriteButton(buttonId, isFavorite) {
  const favButton = document.getElementById(buttonId);
  if (favButton) {
    favButton.innerHTML = isFavorite
      ? 'Added to Favorites <i class="fas fa-heart"></i>'
      : 'Add to Favorites <i class="fa-regular fa-heart"></i>';
    favButton.style.backgroundColor = isFavorite ? "#004891" : "";
  }
}

const favoritesLink = document.getElementById("favoritesLink");
favoritesLink.addEventListener("click", () => {
  document.getElementById("savedReview").classList.add("hidden");
  document.getElementById("fav").classList.remove("hidden");
  document.getElementById("favorites").classList.remove("hidden");
  document.getElementById("bookSection").classList.add("hidden");
  document.getElementById("bookResults").classList.add("hidden");

  const elementToShow = document.getElementById("favorites-container");
  elementToShow.style.display = "block";

  const elementToHide = document.getElementById("savedReview");
  elementToHide.style.display = "none";
});

const contantsLink = document.getElementById("contacts");
contantsLink.addEventListener("click", () => {
  document.getElementById("savedReview").classList.add("hidden");
});

const homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {
  document.getElementById("savedReview").classList.add("hidden");
  document.getElementById("bookSection").classList.remove("hidden");
  document.getElementById("bookResults").classList.add("hidden");
});

const savedReviewLink = document.getElementById("savedReviewLink"); 
savedReviewLink.addEventListener("click", () => {
  const elementToHide = document.getElementById("favorites-container");
  elementToHide.style.display = "none";

  const elementToShow = document.getElementById("savedReview");
  elementToShow.style.display = "flex";

  document.getElementById("savedReview").classList.remove("hidden");

  document.getElementById("favorites-h").classList.add("hidden");
  document.getElementById("bookSection").classList.add("hidden");
  document.getElementById("bookResults").classList.add("hidden");
  //document.querySelector(`#${clonedBooks}`).classList.add("hidden");  // PROBLEMMMMM
});

document.getElementById("newBookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const image = document.getElementById("image").value;
  const newBook = {
    id: books.length + 1, // Ensure new books have a unique ID
    title,
    author,
    image,
  };

  books.push(newBook);
  booksDisplayed(books);

  document.getElementById("newBookForm").reset();
});

const toggleButton = document.querySelector("#check");
const body = document.querySelector(".book-section");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const fav = document.getElementById("favorites-container");
const search = document.querySelector(".searchButton");
const saved = document.getElementById("savedReview");
const bar = document.querySelector(".bar");
const query = window.matchMedia("(min-width: 1501px)");
const bookResults = document.getElementById("bookResults");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

$(window).resize(function () {
  if (toggleButton && navMenu) {
    if ($(window).width() <= 1501) {
      if (toggleButton.checked) {
        navMenu.style.background =
          "linear-gradient(to bottom, rgb(130, 38, 38) 0%, #ff3333 50%)";
      } else {
        navMenu.style.background =
          "linear-gradient(to bottom, #333399 0%, #33ccff 50%)";
      }
    } else {
      navMenu.style.background = "none";
    }
  }
});

document.querySelector("#check").addEventListener("change", function () {
  $(window).resize();
});

function changeBackground() {
  const bodyColor = "linear-gradient(to bottom, #ff3333 0%, #993333 56%)";
  const headerColor = "linear-gradient(to top, #ff3333 0%, #822626 15%)";
  const footerColor = "#993333";
  const searchColor = "#ffa7a7";

  if (toggleButton.checked) {
    body.style.background = bodyColor;
    header.style.background = headerColor;
    footer.style.backgroundColor = footerColor;
    fav.style.background = bodyColor;
    search.style.backgroundColor = searchColor;
    saved.style.background = bodyColor;
    bar.style.backgroundColor = searchColor;
    bookResults.style.background = bodyColor;
  } else {
    body.style.background =
      "linear-gradient(to bottom, #33ccff 19%, #333399 89%)";
    header.style.background =
      "linear-gradient(to top, #33ccff 0%, #333399 15%)";
    footer.style.backgroundColor = "#333399";
    fav.style.background =
      "linear-gradient(to bottom, #33ccff 19%, #333399 89%)";
    search.style.backgroundColor = "#f6de74";
    saved.style.background =
      "linear-gradient(to bottom, #33ccff 19%, #333399 89%)";
    bar.style.backgroundColor = "#f6de74";
    bookResults.style.background =
      "linear-gradient(to bottom, #33ccff 19%, #333399 89%)";
  }
}
toggleButton.onclick = changeBackground;

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", setCurrentYear());

// add button to scrole to top
let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// hamburger menu
const navLink = document.querySelectorAll(".nav-link");
document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
});
//test
