const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl=document.querySelector("#ingredients");
const  ingredientsArr= ingredients.map(ingredient=>{
  const li = document.createElement("li");
  li.textContent=ingredient;
  li.classList="item";
  return li;
});

ingredientsUl.append(...ingredientsArr);