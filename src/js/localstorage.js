import "../css/style.css";
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  toolBar: document.querySelector(".toolbar"),
  switch: document.querySelector("#theme-switch-toggle"),
  body: document.body,
};

const savedDark = localStorage.getItem("theme");
if (savedDark === "dark-theme") {
  refs.switch.checked = true;
  refs.body.classList.add("dark-theme");
}

refs.body.classList.add("light-theme");
refs.toolBar.addEventListener("change", handleSwitchTheme);

function handleSwitchTheme(event) {
  event.preventDefault();
  if (!event.target.checked) {
    refs.body.classList.remove("dark-theme");
    refs.body.classList.add("light-theme");
    localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT);
  } else {
    refs.body.classList.remove("light-theme");
    refs.body.classList.add("dark-theme");
    localStorage.setItem("theme", Theme.DARK);
  }
}

// switch (event.target.checked) {
//   case true:
//     //   console.log("object", localStorage.getItem("theme") === Theme.DARK);
//     // case savedDark === Theme.DARK:
//     refs.body.classList.remove("light-theme");
//     refs.body.classList.add("dark-theme");
//     localStorage.setItem("theme", Theme.DARK);
//     break;
//   case refs.switch.checked === (savedDark === "dark-theme"):
//     console.log(
//       "my try",
//       refs.switch.checked === (savedDark === "dark-theme"),
//     );
//     refs.body.classList.remove("light-theme");
//     refs.body.classList.add("dark-theme");
//     localStorage.setItem("theme", Theme.DARK);
//     break;

//   default:
//     refs.body.classList.remove("dark-theme");
//     refs.body.classList.add("light-theme");
//     localStorage.removeItem("theme");
//     localStorage.setItem("theme", Theme.LIGHT);
//     break;
// }
// }
// const savedDark = localStorage.getItem("theme", Theme.DARK);
// console.log("savedDark", !savedDark);
// if (!savedDark) {
//   refs.body.classList.replace("dark-theme", "light-theme");
//   localStorage.removeItem("theme");
//   localStorage.setItem("theme", Theme.LIGHT);

// else {
//   refs.switch.checked = true;
//   document.body.classList.add("dark-theme");
// }
// function handleSwitchTheme(event) {
//   event.preventDefault();
//   console.log(event.target.checked);
//   const checked = event.target.checked;
//   if (checked) {
//     document.body.classList.add("dark-theme");
//     localStorage.setItem("theme", Theme.DARK);
//   } else {
//     document.body.classList.replace("dark-theme", "light-theme");
//     localStorage.removeItem("theme");
//     localStorage.setItem("theme", Theme.LIGHT);
//   }
// }
// const savedDark = localStorage.getItem("theme", Theme.DARK);
// if (savedDark) document.body.classList.add("dark-theme");
//   document.body.classList.add("dark-theme");
// } else {
//   document.body.classList.replace("dark-theme", "light-theme");
//   localStorage.removeItem("theme");
//   localStorage.setItem("theme", Theme.LIGHT);

// console.log("theme!", savedDark);
