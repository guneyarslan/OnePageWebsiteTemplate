document.addEventListener("DOMContentLoaded", function() {
  function hideAllPages() {
    var pages = document.getElementsByClassName("mainpage");
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
  }

  function showPage(pageId) {
    // Tüm sayfaları gizle
    hideAllPages();

    // Seçilen sayfayı göster
    var page = document.getElementById(pageId);
    page.style.display = "block";
  }
  
  // Sayfa 1'e tıklanırsa
  document.getElementById("home").addEventListener("click", function () {
    showPage("home");
  });

  // Sayfa 2'ye tıklanırsa
  document.getElementById("services").addEventListener("click", function () {
    showPage("services");
  });

  // Sayfa 3'e tıklanırsa
  document.getElementById("contact").addEventListener("click", function () {
    showPage("contact");
  });


  // Seçicilerle ilgili HTML öğelerini alın
  const homeLink = document.querySelector("nav ul li:nth-child(1) a");
  const servicesLink = document.querySelector("nav ul li:nth-child(2) a");
  const contactLink = document.querySelector("nav ul li:nth-child(3) a");

  // Home linkine tıklama olayı ekle ve diğer linklerin etkinliğini kaldır
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeLink.classList.add("active");
    servicesLink.classList.remove("active");
    contactLink.classList.remove("active");
    showPage("home"); // sayfa gösterme işlemi eklendi
  });

  // Services linkine tıklama olayı ekle ve diğer linklerin etkinliğini kaldır
  servicesLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeLink.classList.remove("active");
    servicesLink.classList.add("active");
    contactLink.classList.remove("active");
    showPage("services"); // sayfa gösterme işlemi eklendi
  });

  // Contact linkine tıklama olayı ekle ve diğer linklerin etkinliğini kaldır
  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    homeLink.classList.remove("active");
    servicesLink.classList.remove("active");
    contactLink.classList.add("active");
    showPage("contact"); // sayfa gösterme işlemi eklendi
  });
});
