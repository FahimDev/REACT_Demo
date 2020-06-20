import React, {Component, Fragment} from 'react';
import NavBar from "../../components/navBar/navBar";
import MemberList from "../../components/member/member";

class Member extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <MemberList/>
            </Fragment>
        );
    }
}

export default Member;