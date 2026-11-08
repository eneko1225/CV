'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  sidebarBtn.setAttribute("aria-expanded", String(sidebar.classList.contains("active")));
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// show one page and mark its nav link as current
const showPage = function (name) {
  for (let i = 0; i < pages.length; i++) {
    const isActive = pages[i].dataset.page === name;
    pages[i].classList.toggle("active", isActive);
    navigationLinks[i].classList.toggle("active", isActive);
    if (isActive) {
      navigationLinks[i].setAttribute("aria-current", "page");
    } else {
      navigationLinks[i].removeAttribute("aria-current");
    }
  }
};

// add event to all nav link; the URL hash keeps the open page linkable
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    showPage(this.dataset.navLink);
    history.replaceState(null, "", window.location.pathname + window.location.search + "#" + this.dataset.navLink);
    window.scrollTo(0, 0);
  });
}

// open the page named in the URL hash, if its nav link is visible
const pageFromHash = function () {
  const name = window.location.hash.slice(1);
  for (let i = 0; i < navigationLinks.length; i++) {
    if (navigationLinks[i].dataset.navLink === name && navigationLinks[i].getClientRects().length > 0) {
      showPage(name);
      return;
    }
  }
};

pageFromHash();
window.addEventListener("hashchange", pageFromHash);
