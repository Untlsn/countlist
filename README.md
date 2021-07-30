# CountList
Site similar to ToDo List but point can be change to count. Inspired by Microsoft TO DO.
# Usage
Site went through gatsby and craco to vite, next generation frontend tooling.
Site use React in development but in production it uses Preact 3kb react alternative
### Site using:
Site have typical vite scripts:
dev for development server
build for building
# Tests
* State manager has been tested by Jest
* React Components have been by Storybook
# State
State manager is Redux write with Redux Toolkit
### States in application
* mini - state containing simple value, all actions only assigns payload to new state
* lists - state containing all data about lists and point. Each list or point has unique ID and this is a core of selecting data
# Code
* Default language is TypeScript
* For style site use styled-components
# Used technology:
* [Typescript](https://github.com/microsoft/TypeScript) - superset of JS with types
* [Preact](https://github.com/preactjs/preact) - main technology for production
* [React](https://github.com/facebook/react) - main technology for development
* [Styled-components](https://github.com/styled-components/styled-components) - for styling react app
* [Redux](https://github.com/reduxjs/redux) - State manager
* [Lodash](https://github.com/lodash/lodash) - main helpers lib
* [Jest](https://github.com/facebook/jest) - main testing technology
* [Storybook](https://github.com/storybookjs/storybook) - interface for testing components in separation
* [vite](https://github.com/vitejs/vite) - next generation frontend tooling
* [faker](https://github.com/marak/Faker.js/) - lib for create fake data
## React addons
* [react-icons](https://github.com/react-icons/react-icons) - easiest way to dat icons to react app
* [react-portal](https://github.com/tajo/react-portal) - lib for react portals
## Small addons
* [uid](https://github.com/lukeed/uid) - lib for create unique IDs