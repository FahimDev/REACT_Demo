import React, {Component,Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import PageTitleBar from "../../components/pageTitleBar/page_title_bar";
import HowWeFunction from "../../components/howWeFunction/howWeFunction";
import Footer from "../../components/footer/footer";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";

class Function extends Component {

    constructor() {
        super();
        this.state={
            pageTitle:"How we Function [404]"
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({pageTitle:result[2]['page_title']})
        }).catch(error=>{
            this.setState({pageTitle:"Doing Things [404]"})
        })
    }

    render() {
        return (
            <Fragment>
                <NavBar/>
                <PageTitleBar pageTitle={this.state.pageTitle} />
                <HowWeFunction/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Function;