import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe'
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar'

const Recipes = [
  {
    name: "Baked Ziti",
    desc: "This bubbling baked ziti is perfect for feeding a crowd, and it freezes well too.",
    time: 90,
    servings: 8,
    ingredients: ["1 lb ziti noodles", "1.5 lbs ground spicy or sweet Italian sausage (or removed from casings)", "4 cloves garlic, minced", "1 (28-oz) can crushed tomatoes", "1 teaspoon salt", "1½ teaspoons sugar", "¼ teaspoon crushed red pepper flakes", "1 cup heavy cream", "⅓ cup plus 3 tablespoons grated pecorino Romano (or Parmigiano Reggiano) cheese, divided", "⅓ cup chopped fresh basil, plus more for serving", "8 oz whole milk mozzarella cheese, shredded (about 2 cups)"],
    image: "/images/Baked-Ziti.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Recipe recipe={Recipes[0]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
