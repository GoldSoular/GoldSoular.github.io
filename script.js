document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      item.addEventListener('mouseover', function() {
        const itemId = this.classList[1]; // Assuming the second class is the item-specific class
        document.body.classList.add(`hovered-${itemId}`);
      });
  
      item.addEventListener('mouseout', function() {
        const itemId = this.classList[1];
        document.body.classList.remove(`hovered-${itemId}`);
      });
    });
  });
  
  function toggleImage() {
    var imageContainer = document.getElementById("original-bento");
    if (imageContainer.style.visibility === "visible") {
      imageContainer.style.opacity = "0";
      setTimeout(() => {
        imageContainer.style.visibility = "hidden";
      }, 500); // Wait for the transition to complete
    } else {
      imageContainer.style.visibility = "visible";
      setTimeout(() => {
        imageContainer.style.opacity = "1";
      }, 0); // Ensure that the opacity transition starts immediately
    }
  }