const container = document.querySelector(".grid_1-1-1");

const selectCuisine = document.querySelector("#cuisine");
selectCuisine.addEventListener("change", filterCuisine);
const url = "https://dummyjson.com/recipes?limit=0"; // limit=0 henter alle 50 opskrifter

let allRecipes,
  filteredData,
  cuisine = "All";

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.recipes;
      filteredData = allRecipes;
      buildSelects();
      visListe(allRecipes);
    });
}

hentData();

function buildSelects() {
  // Først dannes et nyt array med en liste over cuisine (kun en gang hver)
  const uniqueCuisines = Array.from(new Set(allRecipes.map((recipe) => recipe.cuisine)));
  // Herefter dannes en select-liste med de cuisines der findes i det hentede data
  const markup = uniqueCuisines.map((cuisine) => ` <option value="${cuisine}">${cuisine}</option>`).join("");
  selectCuisine.innerHTML += markup;
}

function visListe(data) {
  const markup = data
    .map(
      (opskrift) => `  
       <a href="produkt.html?id=${opskrift.id}">      
      <div class="liste_container">
          <img src="${opskrift.image}" alt="meal" class="liste_img">
          <div class="liste_tekst">
            <h4>${opskrift.name}</h4>
            <img src="svg/time.svg" alt="ur" class="ur">
           <p class="ur_tekst">${opskrift.cookTimeMinutes}</p>
            <img src="svg/servings.svg" alt="bestik" class="bestik">
             <p class="bestik_tekst">${opskrift.servings}</p>
           </div>
         </div>
         </a>`
    )
    .join("");
  container.innerHTML = markup;
  h2.textContent = cuisine + " (" + data.length + ")"; // data.length giver antallet af opskrifter på listen
}

function filterCuisine(event) {
  // Hvilken cuisine er valgt på select-listen?
  cuisine = event.target.value;
  if (cuisine == "All") {
    filteredData = allRecipes;
  } else {
    // hvis der valgt andet end "All" filtreres data med den valgte cuisine
    filteredData = allRecipes.filter((recipe) => recipe.cuisine == cuisine);
  }
  // Det filtrerede data vises
  visListe(filteredData);

  // overskriften rettes så den viser, hvad der er valgt
  h2.textContent = cuisine + " (" + filteredData.length + ")";

  // Når opskrifterne er filtreret dannes en ny liste med kun de mealTypes der findes i det filtrerede data:
  const uniqueMTypes = Array.from(new Set(filteredData.map((recipe) => recipe.mealType[0])));
  const markup = uniqueMTypes.map((element) => `<option value="${element}">${element}</option>`).join("");
  selectMealType.innerHTML = '<option value="All">All</option>' + markup;
}
