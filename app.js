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
  
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});