import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

import DevPerson  from '../../asset/img/DeveloperNeeds/Dev.jpg';
import react from '../../asset/img/DeveloperNeeds/react logo.png';
import reactBootsrap from '../../asset/img/DeveloperNeeds/react-bootstrap.png';
import fontAwesome  from '../../asset/img/DeveloperNeeds/Font-Awesome.png';
import reactRouter  from '../../asset/img/DeveloperNeeds/react-router-dom.jpg';
import axios  from '../../asset/img/DeveloperNeeds/axios.png';
import node  from '../../asset/img/DeveloperNeeds/Node.js_logo.png';
import composer  from '../../asset/img/DeveloperNeeds/composer.png';
import mySQL  from '../../asset/img/DeveloperNeeds/mySQL.png';
import phpMyAdmin  from '../../asset/img/DeveloperNeeds/PhpMyAdmin.svg';
import lumen  from '../../asset/img/DeveloperNeeds/lumen.jpg';
import jwt  from '../../asset/img/DeveloperNeeds/jwt.png';
import swagger  from '../../asset/img/DeveloperNeeds/swagger-opendox.png';
import xam  from '../../asset/img/DeveloperNeeds/Xamarin.png';
import cSharp  from '../../asset/img/DeveloperNeeds/C_Sharp.png';
import git  from '../../asset/img/DeveloperNeeds/git.png';
import ListGroup from "react-bootstrap/ListGroup";


class DeveloperFriendly extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="p-0" >

                    <Container>
                        <h2 className="contactTitle text-center" >Development Info</h2>
                        <h4 className="dev-stoty text-center" >developer-friendly</h4>
                        <hr/>
                        <Row>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >REACT</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">User Interface</Card.Title>
                                        <img src={react} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        React is a JavaScript library<br/>
                                                        for building user interfaces.<br/>
                                                        It is maintained by <b style={{color: "#3b5998"}} >Facebook</b><br/>
                                                        and a community of individual<br/>
                                                        developers and companies.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >React Bootstrap</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">User Interface</Card.Title>
                                        <img src={reactBootsrap} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        React Bootstrap. The most popular<br/>
                                                        front-end framework. Rebuilt for React.<br/>
                                                        React-Bootstrap replaces the Bootstrap JavaScript.<br/>
                                                        Each component has been built from scratch as<br/>
                                                        a true React component, without unneeded<br/>
                                                        dependencies like jQuery.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Font Awesome</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">User Interface</Card.Title>
                                        <img src={fontAwesome } height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Font Awesome now has an official<br/>
                                                        React component that's available<br/>
                                                        for all who want to use our icons<br/>
                                                        in their React projects.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >react-router-dom</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Routing Library</Card.Title>
                                        <img src={reactRouter} height={80} />

                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        A router allows your application<br/>
                                                        to navigate between different components,<br/>
                                                        changing the browser URL, modifying the<br/>
                                                        browser history, and keeping the UI state<br/>
                                                        in sync. React is a popular library for<br/>
                                                        building SPAs. However, as React focuses<br/>
                                                        only on building user interfaces, it doesn’t<br/>
                                                        have a built-in solution for routing.React Router<br/>
                                                        is the most popular routing library for React.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Axios</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Http Requesting Library </Card.Title>
                                        <img src={axios} height={50} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Axios is a library that helps us make<br/>
                                                        http requests to external resources.<br/>
                                                        In our React application we often need<br/>
                                                        to retrieve data from our external APIs<br/>
                                                        so it can be displayed in our web pages.<br/>
                                                        Axios uses methods like get() and post()<br/>
                                                        that perform http GET and POST requests<br/>
                                                        for retrieving or creating resources.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Node.js</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Node Package Manager</Card.Title>
                                        <img src={node} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Nodejs is the most convenient platform for<br/>
                                                        hosting as well as running a web server for a<br/>
                                                        React application. It's because of two main<br/>
                                                        reasons: Using an NPM (Node Package Manager),<br/>
                                                        Node works alongside the NPM registry to easily<br/>
                                                        install any package through the NPM CLI.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Composer </Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Application-level Package Manager</Card.Title>
                                        <img src={composer} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Composer is an application-level package manager<br/>
                                                        for the PHP programming language that provides<br/>
                                                        a standard format for managing dependencies of<br/>
                                                        PHP software and required libraries.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >My SQL</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Database</Card.Title>
                                        <img src={mySQL} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        MySQL is an open-source relational database management system.<br/>
                                                        Developed by: <b style={{color: "red",fontFamily: "Agency FB"}}>Oracle Corporation</b>
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >phpMyAdmin</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Administration Tool</Card.Title>
                                        <img src={phpMyAdmin } height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        phpMyAdmin is a free and open source<br/>
                                                        administration tool for MySQL and MariaDB.<br/>
                                                        As a portable web applicationwritten primarily<br/>
                                                        in PHP, it has become one of the most<br/>
                                                        popular MySQL administration tools, <br/>
                                                        especially for web hosting services
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Lumen </Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Micro Web Framework [Our API support]</Card.Title>
                                        <img src={lumen} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Lumen is a micro web framework written in PHP, created by <b style={{color: "#F05340",fontFamily: "Agency FB"}}>Laravel.</b><br/>
                                                        The source code of Lumen is hosted on GitHub and licensed under the terms of MIT License.
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >JSON Web Token</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Authenticity Validator</Card.Title>
                                        <img src={jwt} height={70} />
                                            <Dropdown className="dev-stoty">
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    View Details
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">
                                                        <Card.Text className="text-center text-justify" >
                                                        JSON Web Token is an internet standard <br/>
                                                        for creating JSON-based access tokens <br/>
                                                        that assert some number of claims.<br/>
                                                        JWT or JSON Web Token is a string which<br/>
                                                        is sent in HTTP request (from client to server)<br/>
                                                        to validate authenticity of the client. <br/>
                                                        JWT is created with a secret key and that <br/>
                                                        secret key is private to you. When you<br/>
                                                        receive a JWT from the client, you can verify<br/>
                                                        that JWT with this that secret key.
                                                        </Card.Text>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Swagger</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">REST API Documentation<br/>[swagger-opendox]</Card.Title>
                                        <img src={swagger } height={50} />
                                        <Card.Text className="text-center text-justify" >
                                            <Dropdown className="dev-stoty">
                                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                    View Details
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">
                                                        Swagger is a specification <br/>
                                                        for documenting REST API.<br/>
                                                        It specifies the format <br/>
                                                        (URL, method, and representation)<br/>
                                                        to describe REST web services. <br/>
                                                        The methods, parameters,<br/>
                                                        and models description are <br/>
                                                        tightly integrated into<br/>
                                                        the server code, thereby<br/>
                                                        maintaining the synchronization in <br/>
                                                        APIs and its documentation.
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Xamarin</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Developer Platform <br/>[ .NET ]</Card.Title>
                                        <img src={xam} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Xamarin is a .NET developer<br/>
                                                        platform made up of tools,<br/>
                                                        programming languages, and <br/>
                                                        libraries for building many <br/>
                                                        different types of applications. <br/>
                                                        Xamarin supplies add-ins to <br/>
                                                        Microsoft Visual Studio that <br/>
                                                        allows developers to build <br/>
                                                        Android, iOS, and Windows <br/>
                                                        apps within the IDE using <br/>
                                                        code completion and IntelliSense.<br/>
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >C#.NET</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Programming Language<br/>[ .NET ]</Card.Title>
                                        <img src={cSharp} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        C# is a strong Object Oriented <br/>
                                                        programming language that is mostly<br/>
                                                        built on the .NET libraries can <br/>
                                                        run on the CLR.We used it to develop <br/>
                                                        our admin's Login application.<br/>
                                                        Developed by: <b style={{color: "gray",fontFamily: "Agency FB"}}>Microsoft</b><br/>
                                                        Family: <b style={{color: "purple"}}>C</b>
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" lg={4} md={6} sm={12}>
                                <Card border="light" style={{ width: '18rem' }}>
                                    <Card.Header className="text-center" >Git Hub</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Version Control System</Card.Title>
                                        <img src={git} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        GitHub, Inc. is a United States-based <br/>
                                                        global company that provides hosting for<br/>
                                                        software development version control<br/>
                                                        using Git. It is a subsidiary of <b style={{color: "gray",fontFamily: "Agency FB"}}>Microsoft,</b><br/>
                                                        which acquired the company in 2018
                                                    </Card.Text>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>



                    <Container className="dev-stoty">
                        <Card border="light">
                            <Card.Body>
                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <h5>Developer of this Website</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card border="info">
                            <Card.Body>
                                <Row className="text-justify">
                                    <Col className="dev-person-pic" lg={3} md={6} sm={12}>
                                        <Card border="light">
                                            <Card.Body>
                                                <img className="centerImage" src={DevPerson} height={150} />
                                            </Card.Body>
                                        </Card>
                                        <Col className="dev-person-pic text-center" lg={12} md={12} sm={12}>
                                            <Card border="info" style={{  }}>
                                                <Card.Body>
                                                    <ListGroup variant="flush">
                                                        <p>মোঃ আরিফুল ইসলাম ফাহিম</p>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Col>
                                    <Col lg={9} md={6} sm={12}>
                                        <Row>
                                            <Row>
                                                <Col className="dev-person-pic" lg={12} md={12} sm={12}>
                                                    <Col className="dev-person-pic" lg={12} md={12} sm={12}>
                                                        <Card border="info" style={{  }}>
                                                            <Card.Body>
                                                                <h5>Md.Ariful Islam Fahm</h5>
                                                                <p>
                                                                    Software Engineering Department<br/>
                                                                    +8801712844177<br/>
                                                                    fahim.arif0373@outlook.com<br/>
                                                                    Chittagong,Bangladesh
                                                                </p>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>

                                                    <Col className="dev-person-pic" lg={12} md={12} sm={12}>
                                                        <Card border="info" style={{  }}>
                                                            <Card.Body>
                                                                <h5>Development Tools:</h5>
                                                                <ListGroup variant="flush">
                                                                    <ListGroup.Item>Visual Studio</ListGroup.Item>
                                                                    <ListGroup.Item>Web Storm</ListGroup.Item>
                                                                    <ListGroup.Item>Unity</ListGroup.Item>
                                                                    <ListGroup.Item>Auto Desk Maya</ListGroup.Item>
                                                                    <ListGroup.Item>Adobe Photoshop & Illustrator</ListGroup.Item>
                                                                    <ListGroup.Item>Adobe After Effect</ListGroup.Item>
                                                                </ListGroup>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Col>
                                            </Row>

                                            <Col lg={6} md={12} sm={12}>
                                                <Card border="info" style={{  }}>
                                                    <Card.Body>
                                                        <h5>Experties:</h5>
                                                        <ListGroup variant="flush">
                                                            <ListGroup.Item>Computer Software Development</ListGroup.Item>
                                                            <ListGroup.Item>Mobile Application Development</ListGroup.Item>
                                                            <ListGroup.Item>Web Application Development</ListGroup.Item>
                                                            <ListGroup.Item>Game Development</ListGroup.Item>
                                                            <ListGroup.Item>AR,VR Games & Applications</ListGroup.Item>
                                                            <ListGroup.Item>Voice Command Applications</ListGroup.Item>
                                                            <ListGroup.Item>3D Modeling</ListGroup.Item>
                                                            <ListGroup.Item>3D Animation</ListGroup.Item>
                                                            <ListGroup.Item>CGI & VFX</ListGroup.Item>
                                                            <ListGroup.Item>Video Post Production</ListGroup.Item>
                                                            <ListGroup.Item>Graphics Design</ListGroup.Item>
                                                            <ListGroup.Item>Photography</ListGroup.Item>
                                                        </ListGroup>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Container>

                </Container>
            </Fragment>
        );
    }
}

export default DeveloperFriendly;