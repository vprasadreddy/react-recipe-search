import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Jumbotron, Button, Form, Col } from "react-bootstrap";
import ScrollToTop from "./ScrollToTop";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const handleInputChange = (e) => {
    setQueryText(e.target.value);
  };
  const [queryText, setQueryText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  async function getRecipes(e) {
    e.preventDefault();
    if (queryText != "") {
      setIsLoading(true);
      let APIURL = `https://api.edamam.com/search?q=${queryText}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`;
      const result = await axios.get(APIURL);
      setIsLoading(false);
      if (result.data.hits.length > 0) {
        setRecipes(result.data.hits);
        //console.log(result.data.hits);
      } else {
        setRecipes(result.data.hits);
        Swal.fire({
          icon: "error",
          text: "Sorry, no recipes found."
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter name of the recipe."
      });
    }
  }

  return (
    <div className="App">
      <h1 className="d-flex justify-content-center mt-3">
        Food Recipe Search Application using React
      </h1>
      <div className="d-flex justify-content-center m-5">
        <form className="form-inline">
          <label className="mb-2 mr-sm-2" htmlFor="recipequerytext">
            Enter a Recipe Name:
          </label>
          <input
            type="search"
            className="form-control mb-2 mr-sm-2"
            id="recipequerytext"
            placeholder="for ex: pasta"
            onChange={handleInputChange}
            required
            pattern="[a-zA-Z0-9\s]+"
          />
          <button
            type="submit"
            className="btn btn-primary mb-2 mr-sm-2"
            onClick={getRecipes}
          >
            Search
          </button>
        </form>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row">
          {recipes.length > 0 ? (
            <>
              {recipes.map((recipe, index) => {
                //console.log(recipe.recipe["label"]);
                return (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                    <div
                      className="card m-2 card-style"
                      key={index}
                      style={{ minWidth: "250px", maxWidth: "250px" }}
                    >
                      <img
                        className="card-img-top"
                        src={recipe.recipe.image}
                        alt="Card image cap"
                        style={{ width: "248px", height: "250px" }}
                      />
                      <div className="card-body">
                        <p className="card-title text-truncate text-secondary">
                          {recipe.recipe.label}
                        </p>
                        <a
                          href={recipe.recipe.url}
                          target="_blank"
                          className="btn btn-secondary"
                        >
                          View Recipe
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      )}
      <ScrollToTop />
    </div>
  );
}

export default App;
