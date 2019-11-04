import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand={'sm'} className={'mb-5'}>
                    <Container>
                        <NavbarBrand href="/" className="mr-auto">my MERN app</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className={'ml-auto'} navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/serhiiVek/mern-story-app">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;