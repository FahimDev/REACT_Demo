import React, {Component, Fragment} from 'react';
import Profile from "../../components/profile/profile";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

class MemberProfile extends Component {

    constructor({match}) {
        super();
        this.state={
            profileID:match.params.memberID
        }

    }


    render() {
        return (
            <Fragment>
                <NavBar/>
                <Profile id={this.state.profileID} />
                <Footer/>
            </Fragment>
        );
    }
}

export default MemberProfile;