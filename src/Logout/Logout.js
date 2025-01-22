import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import Button from '../Button';


class signOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded"  light expand="md">
                    <NavbarBrand  style={{
                        float: 'left',
                        position: 'absolute',
                        top: 0,
                        right: 20
                        }} href="/">Logout</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default signOut; 
      