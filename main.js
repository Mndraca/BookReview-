const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('form');
const bookList = document.getElementById('bookList');
const reviewSection = document.getElementById('reviewSection');

searchButton.addEventListener('click', searchBooks);
searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
 })

 let books =  [
  {image: "images/img1.webp",
  title: "Swan Song", 
  author:"by Elin Hilderbrand"}, 
 {image: "images/img2.webp",
  title: "Onix Storm",
   author:"by Rebecca Yarros"}, 
 {image: "images/img3.webp",
  title: "Not in Love",
   author:"by Ali Hazelwood"},
  {image: "images/img4.webp",
   title: "Learher & Lark",
    author:"by Brynne Weaver"},
    {image: "images/img5.webp",
    title: "Reckless",
     author:"by Lauren Roberts"},
     {image: "images/img6.webp",
     title: "Good Energy",
      author:"by Casey Means MD,"},
      {image: "images/img7.webp",
      title: "Zodiac Academy",
       author:"by Caroline Peckham"},
       {image: "images/img8.webp",
       title: "The Women",
        author:"by Kristin Hannah"},
        {image: "images/img9.webp",
        title: "Murdle",
         author:"by G. T. Karber"},
         {image: "images/img10.webp",
         title: "Skyshade",
          author:"by Alex Aster"},
          {image: "images/img11.webp",
          title: "You Like It Darker",
           author:"by Stephen King"},
           {image: "images/img12.webp",
           title: "Let's Find Pokemon",
            author:"by Kazunori Aihara"}, 
          {image: "images/img13.webp",
           title: "Eruption",
            author:"by Michael Crichton"},
           {image: "images/img.14",
            title: "Misfits",
             author:"by Lisa Yee"},
             {image: "images/img.15",
             title: "i live inside a while",
              author:"by Xin Li"},
              {image: "images/img.16",
              title: "Shameless",
               author:"by Brian Tyler Cohen"},
               {image: "images/img.17",
               title: "Hounting Adeline",
                author:"by H. D. Carlton"},
                {image: "images/img.18",
                title: "A Demon of unrest",
                 author:"by Erik Larson"},
                 {image: "images/img.19",
                 title: "Bits and Pieces",
                  author:"by Whoopi Goldberg"},
                  {image: "images/img.20",
                  title: "An offer from a gentelmen",
                   author:"by Julia Quinn"},
                   {image: "images/img.21",
                   title: "Powerfull",
                   author:"by Lauren Roberts"}];


 