import React from 'react'
import { shallow } from 'enzyme' // renders react component, subcomponents will not be fully rendered.
// one level deep!

import { App } from '.' // import App component

describe('components:App', () => {
  it('renders the App with a blank game board and nine squares', () => {
    expect(toJson(shallow(<App />).dive())).toMatchSnapshot()
  })

  it('renders the App with a game board three moves: center, top-left, top-right', () => {
    expect(toJson(shallow(<App moves={[4, 0, 2]} />).dive())).toMatchSnapshot()
  })
})

// NOTES

// describe blocks are just function calls. Takes a string description and a function that group one or more tests together.
// describe('components:App', () => {
//   it('renders the App with a game board and nine squares', () => {
//     // "'it' is alias from 'test'"
//     expect(toJson(shallow(<App />).dive())).toMatchSnapshot() // "call shallow(<App />), passing app component and render <App /> 'ONE LEVEL DEEP'"
//   }) // pass it 'toJson' function imported from enzyme-to-json to make it prettier for us
// }) // then call expects "Matcher" method 'toMatchSnapshot
// this creates a snapshot if it doesnt exist and puts it in a '__snapshots__' folder
// if a snapshot exists, then it compares the two and either passes if they match, or throws an error if they don't
