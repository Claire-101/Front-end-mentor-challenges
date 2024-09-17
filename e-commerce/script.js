document.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelector('.image-container');
  const exit = document.querySelector('.close-button');
  const box = document.querySelector('.image-gallery');
  const thumbnailContainer = document.querySelector('.thumbnail-container');
  const thumbnails = thumbnailContainer.querySelectorAll('img');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentIndex = 0;

  function initGallery() {
    // Debugging output
    console.log('Initializing gallery...');
    console.log('Viewport width:', window.innerWidth);

    // Check if the viewport width is greater than 768px
    if (window.innerWidth >  768) {
      console.log('Viewport width is greater than 768px; enabling gallery functionality.');

      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          const fullImageUrl = thumbnail.getAttribute('data-full-image');
          imageContainer.querySelector('img').src = fullImageUrl;
          box.classList.add('active'); // Show gallery
        });
      });

      exit.addEventListener('click', () => {
        box.classList.remove('active'); // Hide gallery
      });

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateImage();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateImage();
      });

      function updateImage() {
        const imageUrl = thumbnails[currentIndex].getAttribute('data-full-image');
        imageContainer.querySelector('img').src = imageUrl;
      }
    } else {
      console.log('Viewport width is 768px or less; hiding gallery.');
      box.classList.remove('active'); // Hide gallery
    }
  }

  // Initialize gallery on page load
  initGallery();

  // Handle window resize to apply functionality dynamically
  window.addEventListener('resize', () => {
    console.log('Window resized.');
    initGallery(); // Reapply functionality on resize
  });
});















//  LIGHTBOX FUNCTIONALITY  //
 /*const imageContainer = document.querySelector('.image-container');
const exit = document.querySelector('.close-button');
const box = document.querySelector(".image-gallery");
const thumbnailContainer = document.querySelector('.thumbnail-container');
const thumbnails = thumbnailContainer.querySelectorAll('img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const fullImageUrl = thumbnail.getAttribute('data-full-image');
    imageContainer.querySelector('img').src = fullImageUrl;
    overlay.classList.add('active');
  });
});

exit.addEventListener('click', () => {
    box.style.display = "none";
    
});

/*
closeButton.addEventListener('click', () => {
  overlay.classList.remove('active');
}); */
/*
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateImage();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateImage();
});

function updateImage() {
  const imageUrl = thumbnails[currentIndex].getAttribute('data-full-image');
  imageContainer.querySelector('img').src = imageUrl;
}  */



// DISPLAY IMAGES FUNCTIONALITY//
document.addEventListener("DOMContentLoaded",() => {

const gallery = document.querySelector(".display-gallery");
const mainImage = document.querySelector(".images");
const extras = document.querySelector(".thumbnail");
const miniImages = extras.querySelectorAll("img");
const backBtn = document.querySelector('.back');
const forwardBtn = document.querySelector('.forward');
const products = document.querySelector(".productlist");
const cart = document.querySelector(".cart");
const basket = document.querySelector(".icon");

const exit = document.querySelector('.close-button');
const box = document.querySelector(".image-gallery");



let index = 0;

miniImages.forEach(miniImages => {
  miniImages.addEventListener('click', () => {
    const fullImageUrl = miniImages.getAttribute('data-full-image');
    gallery.querySelector('img').src = fullImageUrl;  
  });
});

exit.addEventListener('click', () => {
  box.style.display = "none";  
});

backBtn.addEventListener('click', () => {
  index = (index - 1 + miniImages.length) % miniImages.length;
  updateImage();
});

forwardBtn.addEventListener('click', () => {
  index = (index + 1) % miniImages.length;
  updateImage();
});

function updateImage() {
  const imageUrl = miniImages[index].getAttribute('data-full-image');
  gallery.querySelector('img').src = imageUrl;
}

extras.addEventListener('click', () => {
  box.style.display = "flex";
});



// Show the products element
function showProducts() {
  products.style.display = 'block';
}

// Hide the products element
function hideProducts() {
  products.style.display = 'none';
}

// Show products when icon or cart is clicked
[basket, cart].forEach(element => {
  element.addEventListener('click', showProducts);
});

// Hide products when clicking outside
document.addEventListener('click', (event) => {
  // Check if the click was outside the products element and not on the icon or cart
  if (!products.contains(event.target) && ![basket, cart].includes(event.target)) {
    hideProducts();
  }
});

// Prevent hiding when clicking inside the products element
products.addEventListener('click', (event) => {
  event.stopPropagation();
});


});


// QUANTITY INCREASE AND DECREASE FUNCTIONALITY  //
(function () {
  const quantityContainer = document.querySelector(".quantity");
  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".addition");
  const inputBox = quantityContainer.querySelector(".input-box");

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= parseInt(inputBox.max);
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("minus")) {
      decreaseValue();
    } else if (event.target.classList.contains("addition")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;
  }
}) ();

// TOGGLE MENU FUNCTIONS.
document.addEventListener('DOMContentLoaded', () => {
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const info = document.querySelector('.side-navigation')

  open.addEventListener('click', () => {
    info.style.display = 'flex'
  });

  close.addEventListener('click', () => {
    info.style.display = 'none'
  });
});