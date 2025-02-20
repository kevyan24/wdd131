function getElement(selector) {
  return document.querySelector(selector);
}

function getElements(selector) {
  return document.querySelectorAll(selector);
}

function setTheme(theme) {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  setTheme(localStorage.getItem('theme') || 'light');
}

function toggleMenu() {
  getElement('.nav-mobile').classList.toggle('active');
}

function closeMenu() {
  getElement('.nav-mobile').classList.remove('active');
}

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi, Thriller",
    description: "A movie that plays with reality and dreams in a masterful way.",
    poster: "images/inception.jpg",
    key: "inception"
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    genre: "Animation, Fantasy",
    description: "An animation masterpiece that transports you to a magical world.",
    poster: "images/spirited-away.jpg",
    key: "spirited-away"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime, Drama",
    description: "An iconic movie with memorable dialogues and a unique narrative.",
    poster: "images/pulp-fiction.jpg",
    key: "pulp-fiction"
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    genre: "Thriller, Drama",
    description: "An intense social critique and a story full of unexpected twists.",
    poster: "images/parasite.jpg",
    key: "parasite"
  }
];

function createMovieElement(movie) {
  const section = document.createElement('section');
  section.classList.add('movie');
  section.dataset.movie = movie.key;

  section.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy">
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p>${movie.description}</p>
    `;

  return section;
}

function renderMovies() {
  const movieList = getElement('#movieList');
  if (movieList) {
    const container = document.createElement('div');
    container.id = 'movieListContainer';

    movies.forEach(movie => {
      container.appendChild(createMovieElement(movie));
    });

    movieList.appendChild(container);
  }
}

function showMovieDetails(movieKey) {
  const movie = movies.find(m => m.key === movieKey);
  const movieDetails = getElement('#movieDetails');
  const movieInfo = getElement('#movieInfo');

  if (movie && movieInfo && movieDetails) {
    movieInfo.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
        `;

    movieDetails.style.display = 'block';
  }
}

function validateForm() {
  const name = getElement('#name').value;
  const email = getElement('#email').value;

  if (!name || !email) {
    alert("Please complete all fields");
    return false;
  }

  return true;
}

function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    alert('Form submitted (simulated)');
  }
}

function displayFooterInfo() {
  const year = getElement('#year');
  const lastModify = getElement('#lastModify');
  const today = new Date();

  if (year && lastModify) {
    year.innerHTML = `&copy${today.getFullYear()} | Kevin Andres Yanez | Ecuador`;
    lastModify.innerHTML = `<span>Last Modification: ${document.lastModified}</span>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  displayFooterInfo();

  const menuToggle = getElement('#menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  getElements('.nav-main a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  if (getElement('#movieList')) {
    renderMovies();
    getElements('.movie').forEach(section => {
      section.addEventListener('click', () => {
        showMovieDetails(section.dataset.movie);
      });
    });
  }

  const contactForm = getElement('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
  }

  getElement('#themeToggle').addEventListener('click', () => {
    setTheme(localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
  });
});