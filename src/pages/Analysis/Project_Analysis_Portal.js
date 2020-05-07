import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Analysis from "../../components/ProductAnalysis/analysis";
import Footer from "../../components/footer/footer";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";

class ProjectAnalysisPortal extends Component {

    constructor() {
        super();
        this.state={
            pageTitle:"Project Analysis [404]"
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({pageTitle:result[6]['page_title']})
        }).catch(error=>{
            this.setState({pageTitle:"Product Analysis [404]"})
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle={this.state.pageTitle} />
                <Analysis/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectAnalysisPortal;