// Everything OK?
console.log('OK');

// Your Awesome Scripts

// Menu Button
function menuButton(x) {
    x.classList.toggle("change");

}

function toggleNav() {
    var x = document.getElementById("myNav");
    if (x.style.height === "100%") {
    x.style.height = "0%";
    } 
    else {
    x.style.height = "100%";


}}

// Lightgallery
$('#gallery').lightGallery({
    thumbnail: true,
    share: true,
    mode: 'lg-tube',
    speed: 300

});

$('.captions').lightGallery(); 


// Footer

// Get Current Year
var today = new Date();
// Store Current Year
var year = today.getFullYear(); 
// Check checl
console.log( today, year  );


// Show Current Year
$('span').text( year );

