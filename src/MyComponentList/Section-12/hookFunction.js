import React, { useState } from 'react'
import Accordian from './Accordian'
import SeachBar from './seachBar'
import Dropdown from './Dropdown'
import Translate from './Translate';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function HookFunction() {

    const items = [
        {
            title: 'What is React?',
            content: 'React is Front end javascript framework.'
        },
        {
            title: 'Why use React?',
            content: 'React is favorite JS library among engineers.'
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating component.'
        }
    ]

    const options = [
        {
            label: 'The Color Red',
            value: 'Red'
        },
        {
            label: 'The Color Green',
            value: 'Green'
        },
        {
            label: 'The Color Blue',
            value: 'Blue'
        }
    ]
    const [selectOption, setselectOption] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <>
            <Container>
                <Router>
                    <Row style={{ height: '51em' }}>
                        <Col xs={3}>
                            <ProSidebar>
                                <SidebarHeader>
                                    Project
                                </SidebarHeader>
                                <SidebarContent>
                                    <Menu iconShape="square">
                                        <MenuItem><Link to="/acc" />Accordian</MenuItem>
                                        <MenuItem><Link to="/sea" />WiKi-Pedia</MenuItem>
                                        <MenuItem><Link to="/dro" />Dropdown</MenuItem>
                                        <MenuItem><Link to="/tra" />Translater</MenuItem>
                                    </Menu>
                                </SidebarContent>
                                <SidebarFooter>
                                    @gmail.com
                                </SidebarFooter>
                            </ProSidebar>
                        </Col>
                        <Col md={{ span: 5, offset: 1 }} className='mt-3'>
                            <Switch>
                                <Route exact path="/acc" render={() => <Accordian items={items} />} />
                                <Route path="/sea" render={() => <SeachBar />} />
                                <Route path="/dro" render={() => <Dropdown selected={selectOption} onSelected={setselectOption} options={options} />} />
                                <Route path="/tra" render={() => <Translate />} />
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </>
    )
}
