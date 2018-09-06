import React from 'react'
import { shallow } from 'enzyme' // renders react component, subcomponents will not be fully rendered.
// one level deep!

import App from '.' // import App component

describe('components:App', () => {
  it('renders the App with a blank game board and nine squares', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })
})

// if importing default function there is no need for curly braces
