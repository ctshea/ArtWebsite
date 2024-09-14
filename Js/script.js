// document.addEventListener('DOMContentLoaded', () => {

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
// // loop through each link and attach a click event listener
// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     // prevent default link behavior
//     e.preventDefault();

//     // select the body element and add the fade-out class
//     const contents = document.querySelector('main');
//     contents.classList.add('fade-out');

//     // wait for the fade-out animation to finish (0.5 seconds)
//     setTimeout(() => {
//       // navigate to the new page
//       window.location.href = link.href;
//     }, 500); // 500 milliseconds = 0.5 seconds
//   });
// });

// // detect when the new page is loaded and add the fade-in class to the body element
// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body');
//   body.classList.add('fade-in');
// });
// });

