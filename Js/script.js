
/*const images = [
    "Art/All Work/Citrus1.png",
    "Art/All Work/Citrus2.png",
    "Art/All Work/Kubo.jpg",
    "Art/All Work/TMNT_Arcade.png",
    "Art/All Work/TMNT_Store.png",
    "Art/All Work/TMNT_Tub.jpg",
    "Art/All Work/Polar_Bear.gif",
    "Art/All Work/TMNT_Rink.jpg",
    "Art/All Work/Saloon1.png",
    "Art/All Work/Saloon2.png",
    "Art/All Work/Saloon3.png",
    "Art/All Work/Mural_Design.png",
    "Art/All Work/Grocery_Store.mp4",
    "Art/All Work/CoralinePattern1.jpg",
    "Art/All Work/CoralinePattern2.jpg",
    "Art/All Work/CoralinePattern3.jpg",
    "Art/All Work/CoralinePattern4.png",
    "Art/All Work/pattern1.jpg",
    "Art/All Work/pattern2_1.jpg",
    "Art/All Work/pattern2_2.png",
    "Art/All Work/pattern2_3.png",
    "Art/All Work/pattern3_1.png",
    "Art/All Work/pattern3_2.png",
    "Art/All Work/pattern3_3.png"
]*/

let currentImageIndex = 0;
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop back to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop back to first image
    }
    document.getElementById("modalImage").src = images[currentImageIndex];
}

/* Close modal when clicking outside of the image */
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


/*// document.addEventListener('DOMContentLoaded', () => {

  // select all navigation links
  // const navLinks = document.querySelectorAll('nav a');

// select all navigation links
const links = document.querySelectorAll('nav a');

// select the content container element
const content = document.getElementById('main');


// loop through each link
links.forEach(link => {
  // add click event listener
  link.addEventListener('click', event => {
    // prevent default link behavior
    event.preventDefault();

    // get the URL of the target page from the href attribute
    const url = link.getAttribute('href');

    // add the fade-out class to the content container
    content.classList.add('fade-out');

    // wait for the content container to finish fading out
    setTimeout(() => {
      // fetch the contents of the target page
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Network response was not OK');
          }
        })
        .then(html => {
          // create a new HTML element and set its content to the fetched HTML
          const element = document.createElement('div');
          element.innerHTML = html;

          // remove the old content and add the new content
          content.innerHTML = '';
          content.appendChild(element);

          // add the fade-in class to the content container
          content.classList.add('fade-in');

          // wait for the content container to finish fading in
          setTimeout(() => {
            // remove the fade-out and fade-in classes from the content container
            content.classList.remove('fade-out');
            content.classList.remove('fade-in');
          }, 500);
        })
        .catch(error => {
          console.error(`Error fetching page: ${error}`);
        });
    }, 500);
  });
});
*/

