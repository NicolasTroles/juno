// Modules
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { translate } from 'react-translate';

// Components
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

// Types
import { TOKEN_DECODED } from 'redux/authentication/types';

// Aqui aplicaria o Design System com o tema do styled components em todos os componentes.
const NavbarStyled = styled(Navbar)`
    ${({ theme }) => `
        a {
            text-decoration: none;
            color: rgba(0,0,0,.5);
            transition: all .2s;
            cursor: pointer;
        }
        a:hover {
            text-decoration: none;
            color: rgba(0,0,0,.8);
        }
        
        .ml-auto.navbar-nav{
            display: flex;
            align-items: center;
        }
        
        .ml-auto.navbar-nav .nav-item{
            padding-right: .5rem;
            padding-left: .5rem;
        }   
`};`



class Header extends Component {
    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = () => {
        const { props: { dispatch, history } } = this;
        dispatch({
            type: TOKEN_DECODED.RESET,
        })
        localStorage.removeItem('token');
        history.push('/login');
    }

    render() {
        const { state, props: { authenticationReducer: { tokenDecoded: { name } } } } = this;
        return (
            <>
                <NavbarStyled className='Header' color="light" light expand="md">
                    <Link to="/"><img width='110px' alt='logo' src='https://juno.com.br/assets/images/junohigh-blue-3.png' /> - {name} </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Menu
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem >
                                        <Link to='myInfo'>Meus dados</Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.logout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </NavbarStyled>
            </>

        );
    }
}

function mapStateToProps(state) {
    return {
        authenticationReducer: state.authenticationReducer,
    }
}

export default withRouter(translate('Header')(connect(mapStateToProps)(Header)));