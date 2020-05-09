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
                    <Route exact path="/Profile" component={Profile} />
                </Switch>
            </Fragment>
        );
    }
}

export default PathFinder;