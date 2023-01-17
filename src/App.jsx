import React from 'react';
import './App.css';
import requests from './axiReq/request';
import Banner from './Banner/Banner ';
import Nav from './Nav/Nav';
import Row from './Row/Row';
// import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Kid movies" fetchUrl={requests.fetchFamilyMovies}/>
    <Row title="Mystery" fetchUrl={requests.fetchMystery}/>
    <Row title="Adventure" fetchUrl={requests.fetchAdventureMovies}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction}/>
    </div>
  );
}

export default App;


