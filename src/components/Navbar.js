import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
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