import React, {Component, Fragment} from 'react';
import Profile from "../../components/profile/profile";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

class MemberProfile extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Profile/>
                <Footer/>
            </Fragment>
        );
    }
}

export default MemberProfile;