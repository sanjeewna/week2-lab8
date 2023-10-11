const express = require("express");
const app = express();
const port = 3000; // You can use any available port

// Middleware for parsing JSON data
app.use(express.json());

// Dummy data for recipes (for testing purposes)
let recipes = [
  { id: 1, name: "Spaghetti Bolognese", ingredients: ["pasta", "ground beef", "tomato sauce"] },
  { id: 2, name: "Chicken Stir-Fry", ingredients: ["chicken", "vegetables", "soy sauce"] },
];

// Your API routes will go here

app.get("/api/recipes", (req, res) => {
    res.json(recipes);
  });


  app.post("/api/recipes", (req, res) => {
    const newRecipe = {
      id: recipes.length + 1,
      name: req.body.name,
      ingredients: req.body.ingredients,
    };

    app.post("/api/recipes", (req, res) => {
      // ... (existing code)
    
      // Your code to add a new recipe here
    });

    app.post("/api/recipes", (req, res) => {
      const newRecipe = {
        id: recipes.length + 1,
        name: req.body.name,
        ingredients: req.body.ingredients,
      };
    
      recipes.push(newRecipe);
      res.status(201).json(newRecipe);
    });

    app.put("/api/recipes/:id", (req, res) => {
      // ... (existing code)
    
      // Your code to update a recipe here
    });

    app.put("/api/recipes/:id", (req, res) => {
      const recipeId = parseInt(req.params.id);
      const updatedRecipe = req.body;
    
      // Find the index of the recipe with the given ID
      const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
    
      if (recipeIndex !== -1) {
        // Update the recipe with the new data
        recipes[recipeIndex] = { id: recipeId, ...updatedRecipe };
        res.json(recipes[recipeIndex]);
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    });

    app.delete("/api/recipes/:id", (req, res) => {
      // ... (existing code)
    
      // Your code to delete a recipe here
    });

    app.delete("/api/recipes/:id", (req, res) => {
      const recipeId = parseInt(req.params.id);
    
      // Find the index of the recipe with the given ID
      const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
    
      if (recipeIndex !== -1) {
        // Remove the recipe from the array
        recipes.splice(recipeIndex, 1);
        res.json({ message: "Recipe deleted" });
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    });
  
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});