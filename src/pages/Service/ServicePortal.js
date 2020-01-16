import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import Services from "../../components/services/services";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Footer from "../../components/footer/footer";

class ServicePortal extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle="Services" />
                <Services/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePortal;