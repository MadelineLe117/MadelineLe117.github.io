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
$('gallery-1').lightGallery({
    thumbnail: false,
    share: false,
    mode: 'lg-tube',
    speed: 300

});

$('gallery-2').lightGallery({
    share: false,
    download: false,
    mode: 'lg-scale-up',
    speed: 5000

});


// Footer

// Get Current Year
var today = new Date();
// Store Current Year
var year = today.getFullYear(); 
// Check checl
console.log( today, year  );


// Show Current Year
$('span').text( year );

