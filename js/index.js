document.getElementById("recipe_form_one").addEventListener("submit", function (event) {
  event.preventDefault();

  const recipeData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    name: document.getElementById("recipeName").value,
    cuisine: document.getElementById("country").value,
    prepTimeMinutes: parseInt(document.getElementById("prepTime").value),
    cookTimeMinutes: parseInt(document.getElementById("cookTime").value),
    servings: parseInt(document.getElementById("servings").value),
  };

  fetch("https://dummyjson.com/recipes/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Recipe added successfully!");
      console.log(data);
    })
    .catch((error) => {
      alert("Error adding recipe.");
      console.error(error);
    });
});
