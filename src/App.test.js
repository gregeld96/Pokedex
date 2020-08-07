import React from 'react';
import { render, fireEvent, findByTestId } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'

describe('Testing Works', () => {
  test('Content testing before fetch', () => {
    const { getByText, getByTestId, debug } = render(<Provider store={store}><App /></Provider>);

    const loading = getByTestId("loading")
    const content = getByText(/loading..../i)

    expect(loading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  })

  test('Navbar Testing', () => {
    const { getByText, getByTestId, getByPlaceholderText, } = render(<Provider store={store}><App /></Provider>);

    const navbar = getByTestId("navbar")
    const linkElement = getByText(/pokedex master/i);
    const placeHolder = getByPlaceholderText(/search/i)

    expect(linkElement).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
    expect(placeHolder).toBeInTheDocument();
  });
})

describe('Testing Change Page', () => {
  test('Render file on home page', (done) => {
    const { findAllByTestId, debug, container } = render(<Provider store={store}><App /></Provider>);
    
    findAllByTestId("image")
    .then(element => {
      expect(element).toHaveLength(100)
      expect(element[0]).toBeInTheDocument()
      done()
    })
  })
})

describe('Testing Search function', () => {
  test('Search input component', () => {
    const { getByPlaceholderText, debug } = render(<Provider store={store}><App /></Provider>);

    const placeHolder = getByPlaceholderText("Search")
    const pokemonSearch = "blaistoise"

    fireEvent.change(placeHolder, {
      target: {value: pokemonSearch}
    })

    expect(placeHolder).toHaveValue(pokemonSearch)
  })

  test('Click change Page component', (done) => {
    const { getByText, findByTestId, debug } = render(<Provider store={store}><App /></Provider>);

    const leftClick = { button: 0 }

    fireEvent.click(getByText('Trainer'), leftClick)

    findByTestId('supertype')
    .then(element => {
      expect(element).toBeInTheDocument()

      fireEvent.click(getByText('Pokedex Master'), leftClick)
      return findByTestId('home')
    })
    .then(element => {
      debug()
      expect(element).toBeInTheDocument()
      done()
    })
  })
})