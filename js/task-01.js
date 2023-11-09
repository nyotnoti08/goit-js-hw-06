const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

let categoryCount = 0;

console.log("Number of categories: " + categoryItems.length);
console.log(" ");

categoryItems.forEach((item) => {
  const categoryHeader = item.querySelector("h2");
  const categoryElements = item.querySelectorAll("ul > li");

  console.log("Category: " + categoryHeader.textContent);
  console.log("Elements: " + categoryElements.length);
  console.log(" ");
});


