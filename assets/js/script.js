cover.innerHTML += "<img src='https://covers.openlibrary.org/b/isbn/" +isbnNum[0]+ "-M.jpg'>";
var NYtimesAPIkey = pMMnLgkXzvtnJ9YkVw0FoZHJsXRo2vnB;
var isbn = [];
var title = "";
var author = "";
var date = "";
var NYtimeDate = "bestsellers_date";
var NYtimeListFiction = "combined-print-and-e-book-fiction";
var NYtimeListNonfiction ="combined-e-book-and-print-nonfiction";

// date and month
$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );

// Fetch NYtimes list - 


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

