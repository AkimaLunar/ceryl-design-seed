import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Link from 'Elements/Link'
// import LinkNotes from './Link.md'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('Elements/Link', module)
    .add('default', () => (
        <Link
            onClick={action}
            primary={boolean('Primary', false)}
            secondary={boolean('Secondary', false)}
            medium={boolean('Medium', false)}
            light={boolean('Light', false)}
        >
            {text('Text', 'Link')}
        </Link>
    ))
    .add('underline', () => (
        <Link
            underline
            onClick={action}
            primary={boolean('Primary', false)}
            secondary={boolean('Secondary', false)}
            medium={boolean('Medium', false)}
            light={boolean('Light', false)}
        >
            {text('Text', 'Link')}
        </Link>
    ))
