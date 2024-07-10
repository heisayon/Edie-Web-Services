const HamburgerOpen = document.getElementById("hamburger");
const HamburgerClose = document.getElementById("close");
const mobileNavigation = document.getElementById("mobile-navigation-section");
const websiteBody = document.getElementById("website-body");
function Open() {
  mobileNavigation.classList.remove("NavOut");
  mobileNavigation.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    websiteBody.style.filter = "blur(2px)";
  }, 300);
}

function Close() {
  mobileNavigation.classList.add("NavOut");
  document.body.style.overflow = "visible";
  websiteBody.style.filter = "blur(0px)";
}

HamburgerOpen.addEventListener("click", Open);
HamburgerClose.addEventListener("click", Close);
