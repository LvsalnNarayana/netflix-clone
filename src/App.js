import React from "react";
import "./App.css";
import Row from "./components/row/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Banner />
        <Row
          title="Netflix Originals"
          fetch_url={requests.fetchTrending}
          is_large_row
        />
        <Row
          title="Top Rated"
          fetch_url={requests.fetchTopRated}
        />
        <Row
          title="Action Movies"
          fetch_url={requests.fetchActionMovies}
        />
        <Row
          title="Comedy Movies"
          fetch_url={requests.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          fetch_url={requests.fetchHorrorMovies}
        />
        <Row
          title="Romantic Movies"
          fetch_url={requests.fetchRomanceMovies}
        />
        <Row
          title="Mystery Movies"
          fetch_url={requests.fetchMystery}
        />
        <Row
          title="Sci-Fi Movies"
          fetch_url={requests.fetchSciFi}
        />
        <Row
          title="Western Movies"
          fetch_url={requests.fetchWestern}
        />
        <Row
          title="Animation Movies"
          fetch_url={requests.fetchAnimation}
        />
        <Row
          title="TV"
          fetch_url={requests.fetchTV}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
