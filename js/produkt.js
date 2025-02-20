console.log("script loaded");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myElement = urlParams.get("id");

console.log("This recipe id is", myElement);

let elementId = myElement;
let elementContainer = document.querySelector(".elementContainer");

fetch(`https://dummyjson.com/recipes/${elementId}`)
  .then((response) => response.json())
  .then((data) => showElement(data));

function showElement(data) {
  elementContainer.innerHTML = `
            <div class="grid4_1">
                <div class="liste_opskrift">
                    <h2>${data.name}</h2>
                    <p>${data.cuisine}, ${data.mealType}</p>
                    <p class="ingredisener_overskrift"> Ingredients:</p>
                    <ul class="ingredients">
                        
                    </ul>
                </div>
                <div class="billede_produkt_centreret">
                    <img class="image" src="${data.image}" alt="mad">
                </div>
            </div>
            <div class="instruktioner_container">
                <h2 class="instruktioner_overskrift">Instructions</h2>
                <p class="instruktion_tekst">${data.instructions}</p>
            </div>
            <div class="illusion_i_bunden">
                <div class="servings">
                    <p class="servings_number">${data.servings}</p>
                    <p>Servings</p>
                </div>
                <div class="streg">
                </div>
                <div class="prep_time">
                    <p class="prepTimeMinutes">${data.prepTimeMinutes}</p>
                    <p>Prep time</p>
                </div>
                <div class="streg">
                </div>
                <div class="cook_time">
                    <p class="cookTimeMinutes">${data.cookTimeMinutes}</p>
                    <p>Cook time</p>
                </div>
            </div>
`;

  document.querySelector(".ingredients").innerHTML = data.ingredients
    .map((ing) => {
      return `<li>${ing}</li>`;
    })
    .join("");
}
