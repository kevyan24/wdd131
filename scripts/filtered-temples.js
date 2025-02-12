const year = document.querySelector("#year");
const lastModify = document.querySelector("#lastModify");

const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#menu');

const today = new Date();
const theLastModify = document.lastModified;

year.innerHTML = `&copy${today.getFullYear()} | Kevin Andres Yanez | Ecuador`;
lastModify.innerHTML = `<span>Last Modification: ${theLastModify}</span>`;

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

// Get DOM elements
const displayDiv = document.querySelector('main div');
const menuLinks = document.querySelectorAll('nav a');
const mainHeading = document.querySelector('main h2');

// Add three more temples to the array
temples.push(
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2019, November, 24",
    area: 32000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/400x250/quito_ecuador_temple.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
  }
);

// Function to create temple cards
function createTempleCard(temple) {
  const article = document.createElement('article');

  const html = `
    <figure><img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    <figcaption><h3>${temple.templeName}</h3>
    <p>${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area.toLocaleString()} sq ft</p></figcaption></figure>
  `;

  article.innerHTML = html;
  return article;
}

// Function to display temples
function displayTemples(templeList) {
  displayDiv.innerHTML = '';
  templeList.forEach(temple => {
    const card = createTempleCard(temple);
    displayDiv.appendChild(card);
  });
}

// Function to filter temples by date
function filterByDate(temples, year, isOlder) {
  return temples.filter(temple => {
    const templeYear = parseInt(temple.dedicated.split(', ')[0]);
    return isOlder ? templeYear < year : templeYear > year;
  });
}

// Function to filter temples by size
function filterBySize(temples, size, isLarger) {
  return temples.filter(temple => {
    return isLarger ? temple.area > size : temple.area < size;
  });
}

// Event handler for menu clicks
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const filter = event.target.textContent;
    mainHeading.textContent = filter;

    let filteredTemples;
    switch (filter) {
      case 'Home':
        filteredTemples = temples;
        break;
      case 'Old':
        filteredTemples = filterByDate(temples, 1900, true);
        break;
      case 'New':
        filteredTemples = filterByDate(temples, 2000, false);
        break;
      case 'Large':
        filteredTemples = filterBySize(temples, 90000, true);
        break;
      case 'Small':
        filteredTemples = filterBySize(temples, 10000, false);
        break;
      default:
        filteredTemples = temples;
    }

    displayTemples(filteredTemples);
  });
});

// Initial display of all temples
displayTemples(temples);