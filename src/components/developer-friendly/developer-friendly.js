import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
//import BootstrapSwitchButton from 'bootstrap-switch-button-react'


import uiGIF from '../../asset/img/DeveloperNeeds/tempUI.jpg'

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
import xam  from '../../asset/img/DeveloperNeeds/flutter.png';
import cSharp  from '../../asset/img/DeveloperNeeds/C_Sharp.png';
import git  from '../../asset/img/DeveloperNeeds/git.png';
import ListGroup from "react-bootstrap/ListGroup";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import BootstrapSwitchButton from "bootstrap-switch-button-react/lib/bootstrap-switch-button-react";
import {faPrayingHands} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons/faEyeSlash";


class DeveloperFriendly extends Component {

    constructor() {
        super();
        this.state={
            checked:true,
            language:true,
        }
        this.handleChanged = this.handleChanged.bind(this);
        this.langChange = this.langChange.bind(this);
    }
    handleChanged(checked){
        this.setState({checked})
    }
    langChange(language){
        this.setState({language})
    }

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
                                    <Card.Header className="text-center" >Flutter</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-center">Dart</Card.Title>
                                        <img src={xam} height={80} />
                                        <Dropdown className="dev-stoty">
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                View Details
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    <Card.Text className="text-center text-justify" >
                                                        Flutter is Google’s UI toolkit<br/>
                                                        for building beautiful,<br/>
                                                        natively compiled applications <br/>
                                                        for mobile, web, and <br/>
                                                        desktop from a single codebase.<br/>
                                                        Dart is AOT (Ahead Of Time) compiled <br/>
                                                        to fast, predictable, native code, <br/>
                                                        which allows almost  <br/>
                                                        all of Flutter to be written in Dart.<br/>
                                                        Because Flutter apps are compiled to native code, <br/>
                                                        they do not require a slow bridge between<br/>
                                                        realms They also start up much faster.<br/>
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

                                                    <Col className="text-justify dev-person-pic" lg={12} md={12} sm={12}>
                                                        <Card border="info" style={{  }}>
                                                            <Card.Body>
                                                                <h5>{this.state.language&&this.state.checked==false?"কিছু কথা:":"Some Words:"}</h5>
                                                                <BootstrapSwitchButton onChange={this.handleChanged} id="visibility" onlabel=<FontAwesomeIcon icon={faEye} /> offlabel=<FontAwesomeIcon icon={faEyeSlash} /> checked={this.state.checked} onstyle="outline-success" offstyle="outline-danger"/>
                                                                <br/>
                                                                <p> Click to {this.state.checked ? "show" : "hide"}</p>
                                                                <br/>
                                                                <ToggleButtonGroup onChange={this.langChange} type="radio" name="options" defaultValue={true}>
                                                                    <ToggleButton value={false}>English</ToggleButton>
                                                                    <ToggleButton value={true}>বাংলা</ToggleButton>
                                                                </ToggleButtonGroup>
                                                                <br/>
                                                                <br/>
                                                                <p>
                                                                    {this.state.checked==true ? ""
                                                                        :
                                                                        this.state.language ?
                                                                        "২০১৮ থেকে সরাসরি html+php এবং ক্রমান্বয়ে Laravel framework দিয়ে কাজ করলেও FrontEnd এ blade বা Node.js এর ক্ষেত্রে ejs এর উপর নির্ভর করতাম। এই website টি আমার প্রথম এবং একক React প্রজেক্ট।এই React সাইট ফুল dynamic যা আমার একটি Lumen project এর API দ্বারা নিন্ত্রিত হচ্ছে। এই website এ এর কোন Admin Panel নেই৷ এর Admin Panel হিসেবে আছে আমার বানানো আরেকটি flutter (Dart) application যার মাধ্যমে Admin login করতে পারবে৷ Super Admin এর ক্ষেত্রে রয়েছে C# Desktop application।সব মিলিয়ে একটি সিস্টেম ৪টি আলাদা প্লাটফর্মের সমন্বয়ে চলমান আছে যার প্রতিটি আমার একক কাজ।প্রতিদিনের ব্যস্ততার মধ্যেও কিছু সময় বের করে যা আমি করেছি।তাই কিছু ক্ষুত হয়তো থাকতেও পারে।তবে Admin operations এখানেই রয়েছে একটি বিশেষত্ব, যাতে সকল ধরনের admin কে লাগইন করার সময় user-name আর password প্রদানের পর একটি অতিগোপন encrypted Token দেওয়া হয়৷ প্রতিবার login এ এই টোকেন হয় আলাদা। আর একটি নির্দিষ্ট সময় পর তা expire হয়ে যাবে। এর সময় পর সেই encrypted token আমার নিজের server application ও আর decrypt করতে পারবে না।বিষয় টা Digital Certificate এর সাথে রিলেটেড। তবে এইখানে আমি symmetric key কে নিজের মতো modifyকরে asymmetric করেছি। যার ফলে এইখানে private key & public key দুটোই দরকার হলেও কাজ করার ধরণ আমার নিজের মতো design করা। সব থেকে বড় ব্যাপার হচ্ছে admin সঠিক password দিয়ে login করার পরেও প্রতিটি কাজের জন্য তার application কে এই টোকেন ব্যবহার করতে হবে যা এতটা কঠিন নিরাপত্তা দিয়ে নিয়ন্ত্রিত। সুতরাং কোন অনধিকার প্রবেশকারী পাসওয়ার্ড পেলেও যেকোন স্থান থেকে HTTP request দিয়ে এই website এর কোন তথ্য পরিবর্তন করতে পারবে না।এমনকি প্রতিটি Password কে Argon2 algorithm দ্বারা হ্যাশ করা যেখানে একই password এর ভিন্ন Hash Value থাকে। যার জন্য Brute Force Attack বা Dictionary Attack এতটা সহজ নয়।এই Argon2 যে একটা হ্যাশিং আলগোরিদিম যাতে হ্যাশ হওয়া পাসওয়ার্ড এর প্রকৃত ভ্যালু আর জানা যায় না। শুধুমাত্র যাচাই করা যায়। একে \" most recommended for password hashing\" বলা হয়।\n" +
                                                                            "কিন্তু মজার বিষয় হলো এত জটিল নিরাপত্তা-বলয় সম্পূর্ণ স্বয়ংক্রিয়। user এই application অন্য সব application এর মত সহজেই ব্যাবহার করতে পারবে। শুধুমাত্র বাকি সব application এর মত নিজের user-name এবং password গোপন এবং মনে রাখতে হবে।\n" +
                                                                            "[ বিঃদ্রঃ উপরের কথাগুলোর মানে এই নয় যে আমার এই এপ্লিকেশন সম্পূর্ণ নিরাপদ। Cyber World এ একটা কথা আছে \"No System is Safe\"। আমি শুধুমাত্র W3C এর আন্তর্জাতিক নিতীমালা অনুসরণ করে এই system বানানোর চেষ্টা করেছি। আর কারো জানার ইচ্ছা থাকলে তার সুভিদার জন্য এই পেইজে এমন system বানানোর সব দরকারি বিষয় সমূহের নাম মনোগ্রাম সম্বলিত করে দিয়ে রেখেছি।পাশাপাশি এই সিস্টেম এর জন্য ব্যবহার করা ৪টি প্রজেক্ট (React.js , Lumen,Flutter,C#.NET) এর source code আমি open source করে দিচ্ছি। রিয়েক্ট শেখানোর জন্য 'রাব্বিল হাসান রূপম ভাই' , ফ্রেমওয়ার্ক ভিত্তিক ডেভেলোপমেন্ট এর সাথে পরিচিত করানোর জন্য 'আল-আমিন স্যার' , প্রোগ্রামিং শেখাটা সহজ করে দেবার জন্য 'আন্তোনিন' এবং কম্পিউটার সাইন্স এর মতো এত অসাধারণ একটা ডিপার্টমেন্ট এ আমাকে আসার জন্য উৎসাহিত করায় 'মাহির ফয়সাল' কে বিশেষ ভাবে কৃতজ্ঞতা । ওয়েবসাইটের লিখিত তথ্য সম্পাদনা সহায়তায় তুর্জকে ধন্যবাদ।]"
                                                                        :
                                                                        "Ami English"
                                                                    }
                                                                </p>

                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Col>
                                            </Row>

                                            <Col lg={6} md={12} sm={12}>
                                                <Card border="info" style={{  }}>
                                                    <Card.Body>
                                                        <h5>Member's Application UI:</h5>
                                                        <ListGroup variant="flush">
                                                            <img className="centerImage"
                                                                 src={uiGIF} height="400rem" />
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