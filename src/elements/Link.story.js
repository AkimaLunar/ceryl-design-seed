import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Link from 'Elements/Link'
// import LinkNotes from './Link.md'
// import { text } from '@storybook/addon-knobs'

storiesOf('Elements/Link', module)
    .add('default', () => <Link onClick={action}>Link</Link>)
    .add('underline', () => (
        <Link underline onClick={action}>
            Link
        </Link>
    ))
