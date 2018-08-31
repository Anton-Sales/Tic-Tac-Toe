// !!!This is a global configuration for all tests!!!
// Whatever is in setupTests.js for creact-react-app will be loaded before any tests are run.

import Enzyme from 'enzyme' // helps render and test React components
import Adapter from 'enzyme-adapter-react-16' // use React version 16, which is what is used to build the game
import 'jest-enzyme' // import test "matcher" methods from 'jest-enzyme library
import 'jest-styled-components' // lets us work with styled-components in our snapshot tests
import toJson from 'enzyme-to-json' // makes our snapshotsprettier ad easier to read

Enzyme.configure({ adapter: new Adapter() })
// tell enzyme to use React 16 Adapter

global.toJson = toJson
// put enzyme-to-json function in global object, which is imported into all test files.
// this prevents from having to import it in every test file
