import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
import {Link} from "react-router-dom";
//import profileImage from "../../asset/img/DeveloperNeeds/Dev.jpg";
//import profileImage1 from "../../asset/img/DeveloperNeeds/gilbrt007.jpg";

class Member extends Component {

    constructor() {
        super();
        this.state={
            member:[],
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.member).then(result=>{
            this.setState({member: result})
        }).catch(error=>{
            this.setState({member:"No Member [404]"})
        })
    }

    render() {

        const serviceList = this.state.member;
        const serviceView = serviceList.map(serviceList=>{
            return <Col lg={12} md={12} sm={12} >
                <div className="mb-5 text-justify text-center" >
                    <Button variant="dark">
                        <Link  to={'/Profile/'+serviceList.userName}>
                            <img className="mr-2" style={{borderRadius: "50%" ,
                                borderColor:"#13D4D4",border:"solid",}}
                                 src={serviceList.imgPath} height="50rem" />
                        {serviceList.fullName} <Badge variant="light">{serviceList.title}</Badge>
                        </Link>
                    </Button>
                </div>
            </Col>

        })


        return (
            <Fragment>

                <Container fluid={true} className="p-0" >

                    <Container>
                        <h2 className="portal text-center" >Members List</h2>
                        <Row>
                            {serviceView}
                        </Row>
                    </Container>

                </Container>
            </Fragment>
        );
    }
}

export default Member;