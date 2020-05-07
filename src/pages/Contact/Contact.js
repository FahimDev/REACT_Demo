import React, {Component, Fragment} from 'react';
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
import NavBar from "../../components/navBar/navBar";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import Contacts from "../../components/contact/contact";
import Footer from "../../components/footer/footer";

class Contact extends Component {
    constructor() {
        super();
        this.state={
            pageTitle:"Contact: +8801712844177 [404]"
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({pageTitle:result[5]['page_title']})
        }).catch(error=>{
            this.setState({pageTitle:"Contact: +8801712844177 [404] [404]"})
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle={this.state.pageTitle} />
                <Contacts/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contact;