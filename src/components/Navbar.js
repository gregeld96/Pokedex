import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavigationBar ({ filterPokemon }) {
    
    const [searchInput, setSearchInput] = useState("")

    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault()
        filterPokemon(searchInput)
    }

        return (  
            <>
                <Navbar bg="dark" expand="lg" variant="dark" className="mb-3">
                    <Navbar.Brand href="#home">Pokedex Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/cardlist">Card List</Link></Nav.Link>
                            <Nav.Link><Link to="/favorites">Favorites</Link></Nav.Link>
                        </Nav>
                        <Form onSubmit={handleOnSubmit} inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchInput} onChange={handleInputChange}/>
                            <Button type="submit" variant="primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
}
 
export default NavigationBar;