import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import Loader from "./Loader";
const BrewerySingle = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [brewery, setBrewery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((res) => {
        console.log(res.data);
        setBrewery(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container className="card-container">
      {isLoading && <Loader />}
      {!isLoading && (
        <Card className="card" bg="dark" text="light">
          <p className="breweryname">Name: {brewery.name}</p>
          <p>Country: {brewery.country ? brewery.country : "null"}</p>
          <p>Address_2: {brewery.address_2 ? brewery.address_2 : " null"}</p>
          <p>Address_3: {brewery.address_3 ? brewery.address_3 : "null"}</p>
          <p>City: {brewery.city ? brewery.city : "null"}</p>
          <p>Street: {brewery.street ? brewery.street : "null"}</p>
          <p>State: {brewery.state ? brewery.state : "null"}</p>
          <p>
            Postal_code: {brewery.postal_code ? brewery.postal_code : "null"}
          </p>
          <Button variant="dark" size="sm" onClick={() => navigate(-1)}>
            Back to list
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default BrewerySingle;
