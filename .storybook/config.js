import { configure } from '@storybook/react'

// TODO: Remove
// require.context(directory, useSubdirectories = false, regExp = /^\.\//);
// Allows you to pass in a directory to search,a flag indicating whether
// subdirectories should be searched too, and a regular expression to match
// files against.
const req = require.context('../src', true, /.story.js$/)

// TODO: Remove
// keys() is a function that returns an array of all possible requests that the
// context module can handle
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
