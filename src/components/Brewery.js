import React from "react";
import axios from "axios";
import { Button } from "bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Brewery = () => {
  const [actualData, setActualData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries`)
      .then((response) => {
        const dataArray = response.data;
        setActualData(dataArray);
        setIsLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  function searchHandler(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  function clearSearch() {
    if (search !== "") {
      setSearch("");
      setSearchData([]);
    }
  }
  const BreweryFilter = actualData.filter((brewery) => {
    return brewery.name.toLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <div>
      <input type="text" name="search" onChange={searchHandler} />
      <Container className="card-container">
        {!isLoading &&
          BreweryFilter.map((brewery) => (
            <Card className="card">
              <p className="breweryname">{brewery.name}</p>
              <p>{brewery.brewery_type}</p>
              <p>{brewery.city}</p>
              <LinkContainer to={`/${brewery.id}`}>
                <button>Read more</button>
              </LinkContainer>
            </Card>
          ))}
      </Container>
    </div>
  );
};

export default Brewery;
