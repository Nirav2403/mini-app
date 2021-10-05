import React from 'react'
import logo from '../MyComponentImage/website-designing.png'
import '../App.css'
import { Col, Container, Row } from 'react-bootstrap'

export const Header = () => {
    return (
        <>
            {/* <header>
                <div id='MainHeader'>
                    <img src={Logo} alt="Not Found" />
                    <div id="MainTitle">
                        <h1>Digital Market</h1>
                        <h5>E-Commerce Company</h5>
                    </div>
                </div>
            </header> */}
            <Container fluid>
                <Row id="mainheader">
                <div id='MainHeader'>
                    <img src={logo} alt="Not Found" />
                    <div id="MainTitle">
                       <h1>Web Designing</h1>
                       <h3>Project</h3>
                    </div>
                </div>
                </Row>
            </Container>
        </>
    )
}
