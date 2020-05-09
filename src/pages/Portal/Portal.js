import React, {Component, Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import PortalPath from "../../components/portal/portal";
import Footer from "../../components/footer/footer";

class Portal extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <PortalPath/>

            </Fragment>
        );
    }
}

export default Portal;