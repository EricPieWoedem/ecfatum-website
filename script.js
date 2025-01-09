// Get the hamburger menu and navigation list elements
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('#nav-list');

// Add a click event listener to the hamburger menu
menuIcon.addEventListener('click', function () {
  // Toggle the 'active' class on the navigation list
  navList.classList.toggle('active');
});
