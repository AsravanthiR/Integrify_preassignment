import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Brewery = ({ name, city, type }) => {
  return (
    <div>
      <Card bg="dark" text="light" key={name} className="brewerycard">
        <Card.Header>{name.toUpperCase()}</Card.Header>

        <LinkContainer to={`/${name}`}>
          <Button variant="outline-secondary" size="sm">
            More Info
          </Button>
        </LinkContainer>
      </Card>
    </div>
  );
};

export default Brewery;
