const pokemon = [
    {
        name: "Sailor Mercury",
        subname: "Star Power Stick",
        description: "air",
        image :"https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Sailor_Merkur_01.jpg/220px-Sailor_Merkur_01.jpg"
    },

    {
        name: "Sailoor Venus",
        subname: "love-beauty",
        description: "light",
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Sailor_Venus_01.jpg/220px-Sailor_Venus_01.jpg"
    },
    {
        name: "Sailor Mars",
        subname: "Controls fire",
        description: "fire",
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Sailor_Mars_01.jpg/220px-Sailor_Mars_01.jpg"
    },

    {
        name: "Sailor Uranus",
        subname: "controls wind and sky",
        description: "sky",
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Sailoruranus.jpg/220px-Sailoruranus.jpg"
    },
    

    
]

console.log(pokemon)

const container = document.getElementById("container")

const form = document.querySelector(".form")
const loadingBar = document.querySelector(".loading-bar")



  form.addEventListener( "submit",(e)=>{
    e.preventDefault()
    loadingBar.classList.remove("hide")

    setTimeout(() => {
       loadingBar.classList.add("hide")
       let values = [...document.forms["form"].getElementsByTagName("input")].map(input => input.value)

       console.log(values)
   
      let pokemonData =  {
           name: values[0],
           subname: values[1],
           description: values[2],
           image : values[3]
       }
       MakeTheCards(pokemonData)
       
    form.reset()
      }, 2000);
  })




  for (let i = 0; i < pokemon.length; i++){

    MakeTheCards(pokemon[i])
  }

function MakeTheCards(pokemon){
    
    let column = document.createElement("div")
    column.classList.add("column")
    container.append(column)

//1st Part of Card
    let uiCard = document.createElement("div")
   uiCard.className = "ui card"
    column.append(uiCard)

    let imageContainer = document.createElement("div")
    imageContainer.className = "image"
    uiCard.appendChild(imageContainer)

    let image = document.createElement("img")
    image.src = pokemon.image
    imageContainer.appendChild(image)
//2nd Part Of Cards

    let content = document.createElement("div")
    content.classList.add("content")
    uiCard.appendChild(content)

    let header = document.createElement("a")
    header.classList.add("header")
    header.innerText = pokemon.name
    content.appendChild(header)

    let meta = document.createElement("div")
    meta.classList.add("meta")
    content.appendChild(meta)


    let data = document.createElement("span")
    data.classList.add("date")
    data.innerText = pokemon.subname
    meta.appendChild(data)

    let description = document.createElement("div")
    description.classList.add("description")
    description.innerText = pokemon.description
    content.appendChild(description)


    //Part 3

    let extraContent = document.createElement("div")
    extraContent.className = " extra content"
    uiCard.appendChild(extraContent)

    let aContainer = document.createElement("a")
  
    extraContent.appendChild(aContainer)

    let cameraIcon = document.createElement("i")
//     cameraIcon.className = "checkmark icon"
// aContainer.appendChild(cameraIcon)
aContainer.innerHTML = `<i class=" x icon red status"></i>Not Captured`

aContainer.addEventListener("click", (e)=>{
   if (e.target.innerHTML == `<i class=" x icon red status"></i>Not Captured`){
    aContainer.innerHTML =  `<i class=" check icon green status"></i>Captured`
   } else {
   aContainer.innerHTML = `<i class=" x icon red status"></i>Not Captured`
   }
})

}