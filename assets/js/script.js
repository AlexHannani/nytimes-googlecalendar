// cover.innerHTML += "<img src='https://covers.openlibrary.org/b/isbn/" +isbnNum[0]+ "-M.jpg'>";
var NYtimesAPIkey = "pMMnLgkXzvtnJ9YkVw0FoZHJsXRo2vnB";
var isbn = [];
var title = "";
var author = "";
var date = "";
var NYtimeDate = "bestsellers_date";
var NYtimeListFiction = "combined-print-and-e-book-fiction";
var NYtimeListNonfiction ="combined-e-book-and-print-nonfiction";
var bookTitle = document.getElementById("title");
var fictionDisplay = document.getElementById("fiction");
var nonFictionDisplay = document.getElementById("nonFiction");
var datePicker = document.getElementById("datepicker");


// date and month
$(function() {
    $("#datepicker").datepicker({
      changeMonth: true,
      changeYear: true,
      dateFormat: "yy-mm-dd"
    });
    $(function() {
      $("#datepicker").datepicker({dateFormat: "yy-mm-dd"});
      $("#datepicker").on("change",function(){
          var selected = $(this).val();
          console.log(selected);
          selectDate(selected);
        
        if (selected = true) {
          datePicker.addEventListener("mousedown", function() {
            fictionDisplay.innerHTML = "";
            nonFictionDisplay.innerHTML = "";
          })
        }
      });
  });
  });

// datePicker.addEventListener("mousedown", function() {
//   window.location.reload();
// })

// Fetch NYtimes list - 
// fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=" + NYtimesAPIkey)
//   .then (function(response) {
//     return response.json()
//   })
//   .then (function(data) {
//     console.log(data);
//     fictionList.innerText = data.results.lists[0].display_name;
//     console.log(data.results.lists[0].display_name);
//   })

function selectDate(selected) {
  fetch("https://api.nytimes.com/svc/books/v3/lists/overview/.json?published_date=" + selected + "&api-key=" + NYtimesAPIkey)
  .then (function(response) {
    return response.json()
  })
  .then (function(data) {
    console.log(data);
    console.log(data.results.lists[0].display_name);

    var currentFictionBooks = data.results.lists[0].books
    var currentNonFictionBooks = data.results.lists[1].books
    
    for (var i = 0; i < currentFictionBooks.length; i++) {
      console.log(currentFictionBooks[i]);
      var fictionBook = currentFictionBooks[i]
      console.log(fictionBook.title);

      var title = document.createElement("p");
      var author = document.createElement("p");
      var img = document.createElement("img");
      var description = document.createElement("p");
      
      var cardHTML = document.createElement('div');
      cardHTML.setAttribute("class", "column");
      var card = `<div class="card">
      <div class="card-image">
        <figure class="image">
          <img src=" ${fictionBook.book_image} " class="book-image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
    
          <div class="media-content">
            <p class="title is-4">` + fictionBook.title + `</p>
            <p class="subtitle is-6">` + fictionBook.author + `</p>
          </div>
        </div>
    
        <div class="content">
          ` + fictionBook.description + `
          <br>
          <a href="${fictionBook.amazon_product_url}" target="_blank">Buy from Amazon</a>
          <br>
        </div>
      </div>
    </div>`

      cardHTML.innerHTML = card

      title.textContent = fictionBook.title;
      author.textContent = fictionBook.author;
      description.textContent = fictionBook.description;
      img.setAttribute('src', fictionBook.book_image);


      fictionDisplay.append(cardHTML);

    }

    for (var i = 0; i < currentNonFictionBooks.length; i++) {
      console.log(currentNonFictionBooks[i]);
      var nonFictionBook = currentNonFictionBooks[i]
      console.log(nonFictionBook.title);
      var title = document.createElement("p");
      var author = document.createElement("p");
      var img = document.createElement("img");
      var description = document.createElement("p");
      var isbn10 = nonFictionBook.primary_isbn10;
      console.log("HERE______");
      console.log("https://openlibrary.org/api/books?bibkeys=ISBN:" + i + "&jscmd=data&format=json");

      var cardHTML = document.createElement('div');
      cardHTML.setAttribute("class", "column");
      // <figure class="is-flex is-align-items-center is-justify-content-center image is-128x128"></figure>
      var card = `<div class="card">
      <div class="card-image">
        <figure class="image">
          <img src=" ${nonFictionBook.book_image}" class="book-image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
    
          <div class="media-content">
            <p class="title is-4">` + nonFictionBook.title + `</p>
            <p class="subtitle is-6">` + nonFictionBook.author + `</p>
          </div>
        </div>
    
        <div class="content">
          ` + nonFictionBook.description + `
          <br>
          <a href="${nonFictionBook.amazon_product_url}" target="_blank">Buy from Amazon</a>
          <br>
        </div>
      </div>
    </div>`

      cardHTML.innerHTML = card

      title.textContent = nonFictionBook.title;
      author.textContent = nonFictionBook.author;
      description.textContent = nonFictionBook.description;
      img.setAttribute('src', nonFictionBook.book_image);


      nonFictionDisplay.append(cardHTML);
    }
  })
}
 /* 


// List1 - combined-print-and-e-book-fiction
function fictionList() { 
  } 
  https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json
        
  
// List2 - combined-e-book-and-print-nonfiction
function nonfictionList() {
} - https://api.nytimes.com/svc/books/v3/lists/{date}/{list}.json



//  Function to search by date - bestsellers_date
// (date format - YYYY/MM/DD)  ^(\d{4}-\d{2}-\d{2}|current)$
function searchBydate() { 
}


//  pull ISBN from NY Times - isbn10
function NYTisbn() {  
}

//  store ISBN into ISBN array


// For loop to take ISBN from array and append to cards
    for (var i = 0; index < isbn.length; i++) {
        const element = array[index];
    }

*/