import React from 'react';
import { NavLink } from 'react-router-dom';
import { Session } from '../requests';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
    <Navbar bg="light">
        <Nav className="me-auto">
            <Navbar.Brand style={{marginLeft: "10px"}} href="/">Taste Buds</Navbar.Brand>
            <NavLink className="navBarLink btn btn-primary" to="/recipes">Recipes</NavLink>
            { currentUser ? (
                <React.Fragment> 
                    <NavLink className="navBarLink btn btn-primary" to='/recipes/new'>New Recipe</NavLink>
                    <span class="navBarLink" style={{marginTop: "12px"}}>Welcome, {currentUser.first_name}</span>
                    <button className="navBarLink btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                </React.Fragment>
            ) : (
                <>
                <NavLink className="navBarLink btn btn-primary" to='/sign_in'>Sign In</NavLink>
                <NavLink className="navBarLink btn btn-primary" to='/sign_up'>Sign Up</NavLink>
                </>
            )
        }
        </Nav>
    </Navbar>
    )
}
export default NavBar;