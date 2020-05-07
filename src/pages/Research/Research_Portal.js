import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import ResearchProject from "../../components/research_project/researchProject";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Footer from "../../components/footer/footer";
import DemoReel from "../../components/demo_reel/demo_reel";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";

class ResearchPortal extends Component {

    constructor() {
        super();
        this.state={
            pageTitle:"Research [404]"
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({pageTitle:result[3]['page_title']})
        }).catch(error=>{
            this.setState({pageTitle:"Research Project [404]"})
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle={this.state.pageTitle} />
                <ResearchProject/>
                <DemoReel/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ResearchPortal;