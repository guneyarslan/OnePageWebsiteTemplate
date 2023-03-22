document.addEventListener("DOMContentLoaded", function() {
  function hideAllPages() {
    var pages = document.getElementsByClassName("mainpage");
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
  }

  function showPage(pageId) {
    // Hiding all pages
    hideAllPages();

    // Show the choosen page 
    var page = document.getElementById(pageId);
    page.style.display = "block";
  }
  
  // When click "home"
  document.getElementById("home").addEventListener("click", function () {
    showPage("home");
  });

  // When click "services"
  document.getElementById("services").addEventListener("click", function () {
    showPage("services");
  });

  // When click "contact"
  document.getElementById("contact").addEventListener("click", function () {
    showPage("contact");
  });


  // Selectors
  const homeLink = document.querySelector("nav ul li:nth-child(1) a");
  const servicesLink = document.querySelector("nav ul li:nth-child(2) a");
  const contactLink = document.querySelector("nav ul li:nth-child(3) a");

  // Activate "Home" page when click and deactivate others
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeLink.classList.add("active");
    servicesLink.classList.remove("active");
    contactLink.classList.remove("active");
    showPage("home");
  });

  // Activate "Services" page when click and deactivate others
  servicesLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeLink.classList.remove("active");
    servicesLink.classList.add("active");
    contactLink.classList.remove("active");
    showPage("services");
  });

  // Activate "Contact" page when click and deactivate others
  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeLink.classList.remove("active");
    servicesLink.classList.remove("active");
    contactLink.classList.add("active");
    showPage("contact");
  });
});
