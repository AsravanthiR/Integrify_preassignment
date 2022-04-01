import React from "react";
import axios from "axios";
import Footer from "./components/Footer";

// import { Route, BrowserRouter } from "react-router-dom";
// import Layout from "./components/Layout";
// import NotFound from "./pages/NotFound";

import { useState, useEffect } from "react";

export default function App() {
  const [actualData, setActualData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  //const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries`)
      .then((response) => {
        const dataArray = response.data;
        setActualData(dataArray);
        setIsLoading(false);
        dataArray.map((brewery) => {
          console.log(brewery);
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    setSearchData(
      actualData.filter(
        (value) =>
          value.name?.toLowerCase().includes(search.toLowerCase()) ||
          value.postal_code
            ?.toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          value.city?.toLowerCase().includes(search.toLowerCase()) ||
          value.brewery_type?.toLowerCase().includes(search.toLowerCase()) ||
          value.state?.toLowerCase().includes(search.toLowerCase()) ||
          value.country?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [actualData, search]);

  function clearSearch() {
    if (search !== "") {
      setSearch("");
      setSearchData([]);
    }
  }

  return (
    <div>
      <ul>
        {!isLoading &&
          actualData.map((brewery) => (
            <div className="card">
              <p>{brewery.name}</p>
              <p>{brewery.brewery_type}</p>
              <p>{brewery.city}</p>
            </div>
          ))}
      </ul>

      {/* <BrowserRouter>
        <Route path="/" element={<Layout />}></Route>

        <Route path="/" exact>

          {!error && searchData.length === 0 ? (
            <label>No brewery is found</label>
          ) : (
            ""
          )}
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </BrowserRouter>{" "} */}
      {<Footer />}
    </div>
  );
}
