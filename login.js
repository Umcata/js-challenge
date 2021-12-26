const loginForm = document.querySelector("form");
const username = document.querySelector(".uname");
const greeting = document.querySelector(".greeting");
const knock = document.querySelector(".knockknock");
const todocontain = document.querySelector("#todo_contain");
function savename(event) {
  event.preventDefault();
  const uname = username.value;
  localStorage.setItem("username", uname);
  printgreeting(uname);
}

function printgreeting(uname) {
  loginForm.className = "hidden";
  greeting.innerText = `Hello ${uname}`;
}
const savedname = localStorage.getItem("username");

const bgpic = document.createElement("img");

function changeimg() {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const changepic = images[parseInt(Math.random() * images.length)];
  bgpic.src = `img/${changepic}`;
  document.body.appendChild(bgpic);
  bgpic.className = "changeimgs";
}
if (localStorage.getItem("username") === null) {
  bgpic.src = `img/door.jpg`;
  document.body.appendChild(bgpic);
  bgpic.className = "startimg";
  loginForm.addEventListener("submit", savename);
  todocontain.className = "hidden";
} else {
  printgreeting(savedname);
  changeimg();
}
function removeimg() {
  document.body.removeChild(bgpic);
  changeimg();
  todocontain.className = "todo_contain";
}
knock.addEventListener("submit", removeimg);
