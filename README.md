# CountList
Site similar to ToDo List but point can be change to count. Inspired by Microsoft TO DO.
# Usage
Site went through gatsby and craco to vite, next generation frontend tooling.
### Site can be serve using:
```shell
npm start
yarn start
```
### Or build with:
```shell
npm build
yarn build
```
# Tests
* State manager is tested by Jest
* React Components are tested by Storybook
# State
State manager is Redux write with Redux Toolkit
### States in aplication
* mini - state containg simple value, all actions only assigns payload to new state
* lists - state containg all data about lists and point. Each list or point has unique ID and this is a core of selecting data
# Code
* Default language is TypeScript
* For style site use styled-components
* Storybook is write with TS
* Netlify Functions is write in GoLang
# Used technology:
* [Typescript](https://github.com/microsoft/TypeScript) - superset of JS with types
* [React](https://github.com/facebook/react) - main technology for write whole app
* [Styled-components](https://github.com/styled-components/styled-components) - for styling react app
* [Redux](https://github.com/reduxjs/redux) - State manager
* [Ramda](https://github.com/ramda/ramda) - main helpers lib
* [Jest](https://github.com/facebook/jest) - main testing technology
* [Storybook](https://github.com/storybookjs/storybook) - interface for testing components in separation
* [vite](https://github.com/vitejs/vite) - next generation frontend tooling
* [faker](https://github.com/marak/Faker.js/) - lib for create fake data
## React addons
* [react-icons](https://github.com/react-icons/react-icons) - easiest way to dat icons to react app
* [react-portal](https://github.com/tajo/react-portal) - lib for react portals
## Small addons
* [uid](https://github.com/lukeed/uid) - lib for create unique IDs