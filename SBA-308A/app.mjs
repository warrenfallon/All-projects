import catImage from "./ImageFactory.js";

const result = document.querySelector(".resultcat")
const button = document.querySelector(".catbtn")

async function getCat() {
    const response = await fetch("https://cataas.com/cat?type=square");
    const cats = await response
    console.log(cats);
    return cats
  }



button.addEventListener("click", () =>{

  getCat().then((data) =>{
    console.log(data.url)

    if (result.children.length) {
      result.removeChild(result.children[0]);
    }
    let cat = catImage(data.url)
    console.log(cat)

    result.appendChild(cat)

})
})

