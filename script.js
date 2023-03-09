"use strict";

const projects = ["Natours", "Nexter", "Trillo"];
const projectsList = document.querySelector(".projectsList");

projects.forEach((project) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");

  link.href = `./${project}/index.html`;
  link.innerText = project;

  listItem.appendChild(link);
  projectsList.appendChild(listItem);
});
