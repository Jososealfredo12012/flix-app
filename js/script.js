const global = {
  currentPage: window.location.pathname,
};

//init app

function init() {
  switch (global.currentPage) {
    case "/":
      console.log("home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
