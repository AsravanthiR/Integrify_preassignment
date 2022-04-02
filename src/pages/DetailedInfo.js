import React from "react";
import { useParams, useHistory } from "react-router-dom";
import BrewerySingle from "../components/BrewerySingle";

function DetailedInfo({ data }) {
  const history = useHistory();

  function goBackButtonHandler() {
    history.push("/");
  }

  const params = useParams();
  const brewery = data.find((brewery) => brewery.id === params.breweryId);

  return (
    <div>
      <BrewerySingle brewery={brewery} onClick={goBackButtonHandler} />
    </div>
  );
}

export default DetailedInfo;
