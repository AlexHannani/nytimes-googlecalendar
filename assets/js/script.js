var NYtimesAPIkey = pMMnLgkXzvtnJ9YkVw0FoZHJsXRo2vnB;
var isbn = [];
var title = "";
var author = "";
var date = 2021-01-01;
var NYtimeDate = "bestsellers_date";
var NYtimeListFiction = "combined-print-and-e-book-fiction";
var NYtimeListNonfiction ="combined-e-book-and-print-nonfiction";



// Fetch NYtimes list - 


// List1 - combined-print-and-e-book-fiction

function searchNYTapi(query, forma) {
    var Url = 
}
https://api.nytimes.com/svc/books/v3/lists?q=" + date + "&date" + NYtimeListFiction "&list" + .json;

  
        
  
// List2 - combined-e-book-and-print-nonfiction



//  Function to search by date - bestsellers_date
// (date format - YYYY/MM/DD)  ^(\d{4}-\d{2}-\d{2}|current)$
// function searchBydate() { 
// }


//  pull ISBN from NY Times - isbn10
// function NYTisbn() {  
// }

//  store ISBN into ISBN array



// For loop to take ISBN from array and append to cards
    // for (var i = 0; index < isbn.length; i++) {
    //     const element = array[index];
    // }

