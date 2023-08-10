function thankYou(){
  alert("An item has been added to cart");
}

function purchase(){
  alert("Added To Cart");
}

// Get the modal
var modal = document.getElementById("myModal");


// Get the image that opens the modal
var image = document.getElementById("shopImage");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the image, open the modal
image.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//OutsideModelCloseFunction!!//
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function changeProductImage(imageSrc) {
  document.getElementById('mainProductImage').src = imageSrc;
}







