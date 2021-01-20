import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";

function App() {
  const [nasaData, setNASAData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
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
    <div className="App">
      <h1>{nasaData.title}</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
