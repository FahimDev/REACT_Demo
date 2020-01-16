import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import ResearchProject from "../../components/research_project/researchProject";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Footer from "../../components/footer/footer";
import DemoReel from "../../components/demo_reel/demo_reel";

class ResearchPortal extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle="Research Project" />
                <ResearchProject/>
                <DemoReel/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ResearchPortal;