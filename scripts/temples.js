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
