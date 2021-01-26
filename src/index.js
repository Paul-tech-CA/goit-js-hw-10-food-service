import ingredientsData from "./data-base/menu.json";
import dishTemplate from "./templates/dish.hbs";

import "./css/style.css";

const markup = dishTemplate(ingredientsData);
document.querySelector(".js-menu").insertAdjacentHTML("afterbegin", markup);

console.log(ingredients);
