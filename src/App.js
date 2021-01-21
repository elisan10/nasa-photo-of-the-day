import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Photo from "./components/Photo";
import styled from "styled-components";

function App() {
  const [nasaData, setNASAData] = useState(null);

  useEffect(() => {
    axios
      // .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setNASAData(res.data);
      })
      .catch((err) =>
        console.log(err, "Error in the nasa api, check nasaaxios")
      );
  }, []);

  console.log("this is nasa data", nasaData);
  if (!nasaData) return <h3>Loading...</h3>;

  return (
    <StyledFriend className="App">
      <h1>NASA Photo of the Day!</h1>
      <p>{nasaData.date}</p>
      <div>
        <Photo nasaData={nasaData} />
      </div>
    </StyledFriend>
  );
}

const StyledFriend = styled.div`
  color: ${(pr) => pr.theme.danger};
`;

export default App;
