import React, {Component, Fragment} from 'react';
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";
import {Col, Container, Row} from "react-bootstrap";
import DevCycle from '../../asset/img/agileDev.png'
import restClient from "../../REST_API/restClient";
import appURL from "../../REST_API/appURL";


class Analysis extends Component {
    constructor(){
        super();
        this.state={
            title:"Analysis",

            data:[
                {Technology:'C#', Projects:100},
                {Technology:'node.js', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Open GL', Projects:65},
                {Technology:'Jquery', Projects:90},
                {Technology:'React', Projects:60},
                {Technology:'PHP', Projects:90},
                {Technology:'Laravel', Projects:85}
            ]
        }
    }

    componentDidMount() {
        restClient.GetRequest(appURL.pageTitle).then(result=>{
            this.setState({title:result[6]['title']})
        }).catch(error=>{
            this.setState({title:"Project Analysis"})
        })
    }

        render()
        {
            let blue="rgba(51, 51, 255,0.8)"
            return (
                <Fragment>
                    <Container fluid={true}>
                        <h2 className="serviceTitle text-center">{this.state.title}</h2>
                        <Row>
                            <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="Technology"/>
                                        <Tooltip/>
                                        <Bar dataKey="Projects" fill={blue} >
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>


                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <img className="centerImage" width="300rem" src={DevCycle}/>
                            </Col>
                            <Col lg={12} md={12} sm={12}>
                                <p className="text-justify">
                                    Glitch Studio is a hub of engineers. Research,Analysis,Development & Testing this
                                    are the main nodes of our pipeline.
                                    HCI is also a very important concern for us. No matter what is the product Human
                                    Interaction is our priority and Agile
                                    is our development method.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }

export default Analysis;