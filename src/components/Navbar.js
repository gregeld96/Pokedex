import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import useDebounce from '../hooks/useBounce'

function NavigationBar () {
    
    const history = useHistory()
    const [searchInput, setSearchInput] = useState("")

    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }
    
    const handleOnSubmit = (event) => {
        event.preventDefault()
        history.push(`/${searchInput}`)
    }
    
    function superTypeLink (name) {
        history.push(`/${name}`)
    }

    function favorite () {
        history.push(`/favorites`)
    }

    function home () {
        history.push(`/`)
    }

        return (  
            <>
                <Navbar bg="dark" expand="lg" variant="dark" className="mb-3">
                    <Navbar.Brand onClick={() => home()}>Pokedex Master</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => superTypeLink("pokemons")}>Pokemon</Nav.Link>
                            <Nav.Link onClick={() => superTypeLink("trainers")}>Trainer</Nav.Link>
                            <Nav.Link onClick={() => superTypeLink("energies")}>Energy</Nav.Link>
                            <Nav.Link onClick={() => favorite()}>Favorites</Nav.Link>
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