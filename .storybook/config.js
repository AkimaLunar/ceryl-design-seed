import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import GlobalStyles from 'Global'
import Styleguide from 'Utilities/styleguide'

/**
 * @todo Import stories in a specified order
 * @body The correct order should be: symbols, blocks, global, elements,
 * components, (optional) constructs, (optional), views
 */
const req = require.context('../src', true, /.story.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}
addDecorator(story => (
    <div>
        <GlobalStyles />
        <Styleguide>{story()}</Styleguide>
    </div>
))
addDecorator(withA11y)
addDecorator(withKnobs)

configure(loadStories, module)
