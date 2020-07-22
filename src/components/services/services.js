import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import '../../asset/css/custom.css'
import webIco from '../../asset/img/webDev.png'
import softIco from '../../asset/img/softDev.png'
import animIco from '../../asset/img/animDev.png'
import gameIco from '../../asset/img/gameDev.png'
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";
class Services extends Component {

    constructor() {
        super();
        this.state={
            title:"Services [404]",
            ourServices:[]
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.services).then(result=>{
            this.setState({ourServices: result})
        }).catch(error=>{
            this.setState({ourServices:"Nothing [404]"})
        })

        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[1]['title']})
        }).catch(error=>{
            this.setState({title:"Our Services [404]"})
        })
    }

    render() {

        const serviceList = this.state.ourServices;
        const serviceView = serviceList.map(serviceList=>{
            return <Col lg={3} md={6} sm={12} >
                <div className="serviceSlot text-center" >
                    <img src={serviceList.title_img} height={100} width={100} />
                    <h2>{serviceList.title}</h2>
                    <p>{serviceList.description}</p>
                </div>
            </Col>

        })

        return (
            <Fragment>

                <Container className="text-center" >
                    <h2 className="serviceTitle" >{this.state.title}</h2>
                    <Row>

                        {serviceView}

                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default Services;