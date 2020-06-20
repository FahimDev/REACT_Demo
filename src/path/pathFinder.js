import React, {Component, Fragment} from 'react';
import {Switch,Route} from "react-router-dom";
import Home from '../pages/home/home'
import Service from '../pages/Service/ServicePortal'
import Analysis from '../pages/Analysis/Project_Analysis_Portal'
import Function from '../pages/Function/Function'
import Research from '../pages/Research/Research_Portal'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import DevStory from '../pages/dev-story/dev-story'
import Portal from '../pages/Portal/Portal'
import Member from '../pages/Member/member'
import Profile from '../pages/Profile/MemberProfile'

class PathFinder extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/OurServices" component={Service} />
                    <Route exact path="/OurProjectAnalysis" component={Analysis} />
                    <Route exact path="/HowWeDo" component={Function} />
                    <Route exact path="/Research" component={Research} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Dev-Story" component={DevStory} />
                    <Route exact path="/Portal" component={Portal} />
                    <Route exact path="/Member" component={Member} />
                    <Route exact path="/Profile" component={Member} />
                    <Route exact path="/Profile/:memberID" component={Profile} />
                    //memberID will be sent as a parameter and the pages/MemberProfile.js will catch it as ProfileID
                    //the Profile page will send this value to component/profile.js and profile.js will catch it with props and store it as MasterID
                </Switch>
            </Fragment>
        );
    }
}

export default PathFinder;