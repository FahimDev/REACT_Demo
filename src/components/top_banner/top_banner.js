import React, {Component, Fragment} from 'react';
import {Container,Row} from "react-bootstrap";
import '../../asset/css/custom.css'
class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="topFixedBanner" >
                    <div className="topBannerOverlay" >

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;