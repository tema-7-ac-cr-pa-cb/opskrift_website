document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".burger-menu").addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("show");
  });
});

// Search button
// document.getElementById("search-btn").addEventListener("click", function () {
//   document.getElementById("search-dropdown").style.display = "block";
// });

// document.getElementById("close-btn").addEventListener("click", function () {
//   document.getElementById("search-dropdown").style.display = "none";
// });
