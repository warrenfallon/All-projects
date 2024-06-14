import "./styles.css";

const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//Part 1
const mainEL = document.getElementById("main");
mainEL.style.backgroundColor = "var(--main-bg)";

const h1 = document.createElement("h1");
h1.innerText = "DOM Manipulation";
mainEL.appendChild(h1);

mainEL.classList.add("flex-ctr");

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

// SECTION 2

//Part 3
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

//Part4

const topMenuLinks = document.getElementsByTagName("a");
console.log(topMenuLinks);
console.log(topMenuEl);
topMenuEl.addEventListener("click", (e) => {
  console.log(e.preventDefault);
  console.log(e.target);
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  e.target.classList.add("active");
  console.log(e.target.innerText);
  console.log(menuLinks[1].text);
  if (e.target.innerText === "CATALOG") {
    while (subMenuEl.hasChildNodes()) {
      subMenuEl.removeChild(subMenuEl.firstChild);
    }
    console.log(menuLinks[1].subLinks);
    for (let n = 0; n < menuLinks[1].subLinks.length; n++) {
      let sublink = document.createElement("a");
      sublink.href = menuLinks[1].subLinks[n].href;
      sublink.innerText = menuLinks[1].subLinks[n].text;
      console.log(menuLinks[1].subLinks[n].href);
      console.log(sublink);

      subMenuEl.appendChild(sublink);
    }
  }

  if (e.target.innerText === "ORDERS") {
    console.log(menuLinks[1].subLinks);
    while (subMenuEl.hasChildNodes()) {
      subMenuEl.removeChild(subMenuEl.firstChild);
    }
    for (let n = 0; n < menuLinks[2].subLinks.length; n++) {
      let sublink = document.createElement("a");
      sublink.href = menuLinks[2].subLinks[n].href;
      sublink.innerText = menuLinks[2].subLinks[n].text;
      console.log(menuLinks[2].subLinks[n].href);
      console.log(sublink);

      subMenuEl.appendChild(sublink);
    }
  }
});

// console.log(menuLinks[1]);
