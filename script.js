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
  