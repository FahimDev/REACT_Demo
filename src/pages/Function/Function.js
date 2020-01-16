import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import HowWeFunction from "../../components/howWeFunction/howWeFunction";
import Footer from "../../components/footer/footer";

class Function extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle="How We Function" />
                <HowWeFunction/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Function;