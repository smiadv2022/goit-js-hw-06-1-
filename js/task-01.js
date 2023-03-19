const categ = document.querySelectorAll(".item");
console.log("Number of categories: ", categ.length);
categ.forEach(el => {
  console.log("Category: ", el.firstElementChild.innerHTML);
  console.log("Elements: ", el.querySelectorAll("li").length);

  
});
