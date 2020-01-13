import React from 'react';
import TopBanner from "./components/top_banner/top_banner";
import Services from "./components/services/services";
import NavBar from "./components/navBar/navBar";
import Analysis from "./components/ProductAnalysis/analysis"
import HowWeFunction from "./components/howWeFunction/howWeFunction";
import ResearchProject from "./components/research_project/researchProject";


function App() {
  return (
    <div>

    <NavBar/>
    <TopBanner/>
    <Services/>
    <Analysis/>
    <HowWeFunction/>
    <ResearchProject/>

    </div>
  );
}

export default App;
