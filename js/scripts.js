// Everything OK?
console.log('OK');

// Your Awesome Scripts
// Header Button
function myFunction(x) {
    x.classList.toggle("change");
  }
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
