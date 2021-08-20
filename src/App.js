import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideo from './RecommendedVideo.js';
import SearchPage from './SearchPage.js';
import './App.css';



function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app_page">
        
        <Sidebar/>
        
        <SearchPage/>

      </div>
          </Route>
          <Route path = "/">
           
      
      <div className="app_page">
        
        <Sidebar/>
        
        <RecommendedVideo/>

      </div>
          </Route>
        </Switch>
      </Router>
      
      
</div>
  );
}

export default App;
