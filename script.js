// Get all the images
const images = document.querySelectorAll(".my-image");

// Function to check if image is in view
function checkImageInView() {
  // Loop through all images
  images.forEach(image => {
    // Get the position of the image
    const rect = image.getBoundingClientRect();

    // Check if the image is in view
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

// Add a debounce function to limit the number of times the checkImageInView function is called
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Add event listener for scroll event
window.addEventListener("scroll", debounce(checkImageInView));
