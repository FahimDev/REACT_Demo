import React from 'react';
import TopBanner from "./components/top_banner/top_banner";
import Services from "./components/services/services";
import NavBar from "./components/navBar/navBar";
import Analysis from "./components/ProductAnalysis/analysis"


function App() {
  return (
    <div>

    <NavBar/>
    <TopBanner/>
    <Services/>
    <Analysis/>

    </div>
  );
}

export default App;
