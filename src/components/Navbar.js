import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends React.Component {
    
    constructor () {
        super()
        this.state = {
            searchInput: ""
        }
    }

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
          searchInput: event.target.value
        })
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault()
        const name = this.state.searchInput
        // alert(name)
        fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`)
        .then(res => res.json())
        .then(data => {
            this.props.filterPokemon(data.cards)
        })
        .catch(console.log())
    }

    render() { 
        const { searchInput } = this.state

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
                        <Form onSubmit={this.handleOnSubmit} inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchInput} onChange={this.handleInputChange}/>
                            <Button type="submit" variant="primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
 
export default NavigationBar;