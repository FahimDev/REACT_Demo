import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Analysis from "../../components/ProductAnalysis/analysis";
import Footer from "../../components/footer/footer";

class ProjectAnalysisPortal extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle="Project Analysis" />
                <Analysis/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectAnalysisPortal;