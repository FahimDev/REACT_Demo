import React, {Component, Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import DevHistory from "../../components/developer-friendly/developer-friendly";
import Footer from "../../components/footer/footer";

class DevStory extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <DevHistory/>
                <Footer/>
            </Fragment>
        );
    }
}

export default DevStory;