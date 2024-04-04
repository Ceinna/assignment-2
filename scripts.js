// refactored jquery code so there is only one click listener for all of the buttons
$('.button').on('click', function () {
    var position = parseInt($(this).data('position'))

    // log the data-position attribute of the card that was clicked.
    console.log(position)

	$('#column-right').empty()
    
    var bookData = [

  	    "https://m.media-amazon.com/images/I/51-FUNOiKKL._SY445_SX342_.jpg",
    
  		"https://images.squarespace-cdn.com/content/v1/5504b49be4b0953c7cb8e0d4/3eb18b57-d560-4076-b9e5-2004413dac5d/WAYWARD+SON_TP.jpg",
   
 		"https://prodimage.images-bn.com/pimages/9781250827579_p0_v2_s1200x630.jpg",
    
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/The_Ballad_of_Songbirds_and_Snakes_%28Suzanne_Collins%29.png/220px-The_Ballad_of_Songbirds_and_Snakes_%28Suzanne_Collins%29.png",
    
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982145828/stories-from-the-tenants-downstairs-9781982145828_hr.jpg",
 
 		"https://images.penguinrandomhouse.com/cover/9780553447439",
    
        "https://m.media-amazon.com/images/I/81aVAx1RacL._AC_UF1000,1000_QL80_.jpg",
    
        "https://m.media-amazon.com/images/I/41rLfGRz9PL._SY445_SX342_.jpg",
    
   	    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1313772941i/6101718.jpg",
    
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1316177353i/10079321.jpg",
    
        "https://m.media-amazon.com/images/I/51TZvbTMO8L.jpg",
    
        "https://m.media-amazon.com/images/I/81X5obQhXPL._AC_UF1000,1000_QL80_.jpg"
 
	]
  
    console.log(bookData[position])
  
    $('#column-right').css('background-image', `url('${bookData[position]}')`)

})

// Add active class (highlight button) to the button that is currently clicked
var header = document.getElementById("column-left");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}