import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import Services from "../../components/services/services";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Footer from "../../components/footer/footer";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";

class ServicePortal extends Component {

    constructor() {
        super();
        this.state={
            pageTitle:"Services [404]"
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({pageTitle:result[1]['page_title']})
        }).catch(error=>{
            this.setState({pageTitle:"Service List [404]"})
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle={this.state.pageTitle} />
                <Services/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePortal;