import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import Navigation from './Navigation';
import Image from '../MyComponentImage/bg.jpg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import '../App.css'


export default function Login() {
    const [usename, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onClickSignInBtn = (e) => {

        if (usename === "" && password === "") {
            alert("Enter your username and password")
        }
        else {
            if (validator.isEmail(usename)) {
                if (password === "") {
                    alert('Enter your password')
                }
                else {
                    ReactDOM.render(
                        <React.StrictMode>
                            <Navigation />
                        </React.StrictMode>,
                        document.getElementById('root'));
                }
            }
            else {
                alert('Enter valid Email!')
            }
        }
    }



    return (
        <>
            <Container fluid className='p-0 ' >
                <Row style={{ height: "100vmin", width:'100vw' }}>
                    <Col xs={3} className='p-0'>
                        <img src={Image} style={{ height: "100vmin", width:'25vw'}} />
                    </Col>
                    <Col className="bg-primary p-0 d-flex align-items-center">
                        <Col xs={{ span: 4, offset: 4 }} style={{backgroundColor:"darkkhaki", borderRadius:'8px'}}>
                            <Col >
                                <Form className='mx-auto' style={{ width: '20rem' }}>
                                    <h3 id="HeadingLogin">Login</h3>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" value={usename} onChange={(e) => { setUsername(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Show Password" />
                                    </Form.Group>
                                    <Button className='my-2 mx-auto d-block' variant="primary" type="submit" onClick={onClickSignInBtn}>
                                        Sign in
                                    </Button>
                                    <p>or</p>
                                    <Button className='my-2 mx-auto d-block' variant="primary"  style={{ backgroundColor: "blue" }}>Login With Facebook</Button>
                                    <Button className='mb-2 mx-auto d-block' variant="primary"  style={{ backgroundColor: "red" }}>Login with Google</Button>
                                </Form>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}