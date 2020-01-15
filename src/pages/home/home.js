import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import TopBanner from "../../components/top_banner/top_banner";
import Services from "../../components/services/services";
import Analysis from "../../components/ProductAnalysis/analysis";
import HowWeFunction from "../../components/howWeFunction/howWeFunction";
import ResearchProject from "../../components/research_project/researchProject";
import DemoReel from "../../components/demo_reel/demo_reel";
import Footer from "../../components/footer/footer";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <HowWeFunction/>
                <ResearchProject/>
                <DemoReel/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;