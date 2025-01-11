const year = document.querySelector("#year");
const lastModify = document.querySelector("#lastModify");

const today = new Date();
const theLastModify = document.lastModified;

year.innerHTML = `&copy${today.getFullYear()} | Kevin Andres Yanez | Ecuador`;
lastModify.innerHTML = `<span>Last Modification: ${theLastModify}</span>`;