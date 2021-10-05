import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, Container, Row, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Tutorial from './Tutorial';
import Practice from './Pratice';
import FillForm from './Section-7/Form';
import FetchApi from './FetchApi';
import Login from './Login';
import '../MyComponentCSS/Navigation.css';
import { Header } from './Header';
import UserInformation from './Section-7/UserInformation';
import '../App.css';
import FetchImage from './Section-8,9,10/Image';
import FetchVideo from './Section-11/video';
import hookFunction from './Section-12/hookFunction';

export default function Navigation() {
    const [tData, setTdata] = useState([])

    const LoginPage = () => {
        ReactDOM.render(
            <Login />,
            document.getElementById('root')
        );
    }

    const tableData = (tdata) => {
        setTdata(tdata, () => console.log(tdata));
    }
    return (
        <>

            <Container fluid className="p-0">
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Router>
                        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                            <Container>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                                <Navbar.Collapse id="responsive-navbar-nav ">
                                    <Nav className="me-auto mx-auto link-red">
                                        <Nav.Link style={{ color: 'red' }} className="mx-4 color-dark" href="/">Home</Nav.Link>
                                        <Nav.Link style={{ color: 'red' }} className="mx-4" href="/tutorial">Tutorial</Nav.Link>
                                        <NavDropdown className="mx-4" title={<span className="text-danger my-auto">Practice</span>} id="nav-dropdown">
                                            <NavDropdown.Item style={{ color: 'red' }} href="/fetchimage">Image</NavDropdown.Item>
                                            <NavDropdown.Item style={{ color: 'red' }} href="/fetchvideo">Video</NavDropdown.Item>                
                                            <NavDropdown.Item style={{ color: 'red' }} href="/accrodian">Accordian</NavDropdown.Item>                
                                        </NavDropdown>
                                        <NavDropdown className="mx-4" title={<span className="text-danger my-auto">Tasks</span>} id="nav-dropdown">
                                            <NavDropdown.Item style={{ color: 'red' }} href="/form">Form Fill</NavDropdown.Item>
                                            <NavDropdown.Item style={{ color: 'red' }} href="/userdata">Form Userdata</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item style={{ color: 'red' }} href="/fetchapi">FetchApi data</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                                <Form className="d-flex">
                                    <FormControl 
                                        type="search"
                                        placeholder="Search"
                                        className="mr-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success" className="mx-3">Search</Button>
                                </Form>
                            </Container>
                        </Navbar>
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route path='/tutorial' component={Tutorial}></Route>
                            <Route path='/practice' component={Practice}></Route>
                            <Route path='/form' component={FillForm}></Route>
                            <Route path='/userdata' component={UserInformation}></Route>
                            <Route path='/fetchapi' component={FetchApi}></Route>
                            <Route path='/fetchimage' component={FetchImage}></Route>
                            <Route path='/fetchvideo' component={FetchVideo}></Route>
                            <Route path='/accrodian' component={hookFunction}></Route>
                        </Switch>
                    </Router>
                </Row>
            </Container>
            {/* <Router>
                <Header/>
                <div className="AppNav">
                    <ul id="NavMenu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                        <li>
                            <Link to="/client">Client</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <div id="NavBtn">
                        <button className="SignBtn" onClick={()=>LoginPage()}>Sign In</button>
                        <button className="SignBtn" onClick={()=>LoginPage()}>Sign Out</button>
                    </div>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route  path='/about' component={About}></Route>
                    <Route  path='/service' component={Service}></Route>
                    <Route  path='/client' component={Client}></Route>
                    <Route  path='/contact' render={() => <Contact tableData={tableData}/>}></Route>
                </Switch>
            </Router> */}
        </>
    )
}