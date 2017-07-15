## Reddit Clone
This is a clone-version of Reddit. By default, this app will build in `Production` mode.

[![Build Status](https://travis-ci.org/AaronKow/reddit-clone.svg?branch=master)](https://travis-ci.org/AaronKow/reddit-clone)
[![license](https://img.shields.io/github/license/AaronKow/reddit-clone.svg)](https://github.com/AaronKow/reddit-clone/blob/master/LICENSE)

View the [live demo](https://goo.gl/PTtq54) of Reddit-Clone.


- [Features in this Project](https://github.com/AaronKow/reddit-clone#features-in-this-project)
- [To build the output](https://github.com/AaronKow/reddit-clone#to-build-the-output)
- [Launch the App](https://github.com/AaronKow/reddit-clone#launch-the-app)
- [Plugins](https://github.com/AaronKow/reddit-clone#superpowers-plugins-used-in-this-project)
- [File Structure for reddit-clone](https://github.com/AaronKow/reddit-clone#file-structure-for-reddit-clone)
- [Roadmap](https://github.com/AaronKow/reddit-clone#roadmap)


## Features in this Project
- contains a list of topics which allows users to upvote or downvote multiple times
- allow user to submit topics, which topic is simply a string that does not exceed 255 characters.
- 20 sample topics listed on the page initially, user can add more
- unit test are included in this project


## To build the output

```bash
$ npm install

# for development
$ npm run dev

# to output the build
$ npm run build
```

## Launch the App

Go to `./dist` folder, just launch the `index.html` in your browser.

## To test the App

```bash
$ npm run test
```

## Superpowers (plugins) used in this project

- Icons: `Font-Awesome`
- Build System: `Webpack` [Boilerplate Credits: @emiloberg](https://github.com/emiloberg/webpack-tutorial)
- Transpiler: `Babel`
- Additional Javascript Library: `Underscore.js`
- Test Runner + Framework: `Jest`

## File Structure for reddit-clone

```
> [reddit-clone]
    |
    ├── [__test__]            ::> folder contains all test scripts
    |
    ├── [dist]                ::> output folder for this project
    |
    ├── [src]                 ::> source folder, where all the logic reside
    |     |
    |     ├── [components]    ::> logic structure to be injected into the Html backbone
    |     |
    |     ├── [css]           ::> styling sheets for this project
    |     |
    |     ├── [data]          ::> holds the static data (list of entries)
    |     |
    |     ├── [img]           ::> images used in this project
    |     |
    |     ├── [methods]       ::> logics that altered the page and list
    |     |
    |     ├── $global.js      ::> global scope variables used throughout the app
    |     |
    |     └── index.js        ::> the starter of script
    |
    ├── index.html            ::> Project Html Backbone
    |
    ├── package.json          ::> List of NPM Packages required for this project
    |
    └── webpack.config.js     ::> Webpack Configuration File
```

### Roadmap

- ~~create the mock page for Reddit list~~
- ~~include build system: Webpack~~
- ~~include a Javascript Library: underscore.js~~
- ~~Maintain a list of topics and its upvotes/downvotes in-memory data structure (20 topics in a page)~~
- ~~Allow the user to upvote or downvote a topic multiple times and sort the list~~
- ~~Allow the user to submit topics, a "topic" is simply a string that does not exceed 255 characters.~~
- ~~Writing unit test~~
- ~~update readme document~~
- modularize css (using SCSS preprocessor)
- ensure it fits for other devices
