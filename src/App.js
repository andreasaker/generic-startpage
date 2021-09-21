import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Page from "./pages/page";
import { data } from "./fakeData";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(process.env.REACT_APP_USERNAME);
    if (token === null) {
      axios
        .post(`${process.env.REACT_APP_API}/auth/local`, {
          identifier: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        })
        .then((resp) => setToken(resp.data.jwt))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (token !== null) {
      axios
        .get(`${process.env.REACT_APP_API}/pages`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((resp) => setApiData(resp))
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <div>
      <Page data={data} apiData={apiData} loading={loading} />
    </div>
  );
};

export default App;
