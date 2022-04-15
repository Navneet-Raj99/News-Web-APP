import { useEffect, useState } from "react";
import "./App.css";
import Newscard from "./Newscard";

function App() {
  useEffect(()=>
  {
     fetchapi();
  },[])
  const [city, setcity] = useState("Enter the place");
  const [newsarray, setnewsarray] = useState([]);

  async function fetchapi(e) {
    e.preventDefault();
    let temp = city.substring(0, 2);
    console.log(temp);
    const url = `https://newsapi.org/v2/top-headlines?country=${temp}&apiKey=2a8263efb9554baba35672b096565868`;
    const response = await fetch(url);
    const japi = await response.json();
    setnewsarray(japi.articles);
    console.log(japi.articles);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SearcHNEWS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Finance
                    </a>
                  </li>
                  
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Country Name"
                aria-label="Search"
                onChange={(event) => {
                  setcity(event.target.value);
                  console.log(city);
                }}
              />
              <button className="btn btn-outline-success" onClick={fetchapi}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div id="main_container">
        {newsarray.length != 0
          ? newsarray.map((Element) => {
              let source = Element.source.name;
              return (
                <Newscard
                  author={Element.author}
                  title={Element.title}
                  description={Element.description}
                  time={source}
                  image={Element.urlToImage}
                  url={Element.url}
                />
              );
            })
          : "No Country with this Name Exists"}
      </div>
    </div>
  );
}

export default App;
