import "./styles.css";

const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Part 1
const mainEL = document.getElementById("main");
mainEL.style.backgroundColor = "var(--main-bg)";

const h1 = document.createElement("h1");
h1.innerText = "DOM Manipulation";
mainEL.appendChild(h1);

mainEL.classList.add("flex-ctr");
console.log(mainEL, "huh");

//Part 2
const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

//Part 3
for (let i = 0; i < menuLinks.length; i++) {
  let a = document.createElement("a");
  a.href = menuLinks[i].href;
  a.innerText = menuLinks[i].text;
  topMenuEl.appendChild(a);
}
