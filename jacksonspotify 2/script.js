// Function to handle scroll event
function handleScroll(event) {
  // Prevent default scroll behavior
  event.preventDefault();

  // Get the height of the first element with class containing "album"
  const albumElement = document.querySelector('[class*="album"]');
  const distance = albumElement.clientHeight;

  // Calculate the target scroll position based on the scroll direction
  const additionalValue = event.deltaY > 0 ? 90 : 0; // Only add additional value when scrolling down
  const targetScrollPosition =
    window.scrollY +
    (event.deltaY > 0 ? distance + additionalValue : -distance);

  // Calculate the target scroll position for snapping
  const snappingTarget = albumElement.offsetTop - 50;

  // Determine if we need to snap
  const shouldSnap = Math.abs(targetScrollPosition - snappingTarget) < distance;

  // If snapping is needed, set the target scroll position to snapping target
  const finalTargetScrollPosition = shouldSnap
    ? snappingTarget
    : targetScrollPosition;

  // Perform scrolling animation to the target scroll position
  window.scrollTo({
    top: finalTargetScrollPosition,
    behavior: "smooth",
  });
}

// Disable scrolling on the body after the page has loaded
window.addEventListener("load", function () {
  document.body.style.overflow = "hidden";
});

// Listen for scroll events
window.addEventListener("wheel", handleScroll);
