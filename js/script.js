const global = {
  currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="Movie Title"
            />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="Movie Title"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>

    `;
    document.querySelector("#popular-movies").appendChild(div);
  });
}

// Fetch data from TMDB API

async function fetchAPIData(endpoint) {
  spinnerControl();
  const API_KEY = "8e7d746f2a9457f54fce3af872443aea";
  const API_URL = " https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&=en-US`
  );

  const data = await response.json();
  spinnerControl();
  return data;
}

// show spinner
function spinnerControl() {
  let spinner = document.querySelector(".spinner");
  if (spinner.classList.contains("show")) {
    spinner.classList.remove("show");
  } else if (!spinner.classList.contains("show")) {
    spinner.classList.add("show");
  }
}

// highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

//init app

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
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

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
