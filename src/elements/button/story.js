import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Button from 'Elements/button'
import notes from './notes.md'

storiesOf('Elements', module)
    .add(
        'Button',
        () => (
            <Button
                solid={boolean('solid', false)}
                outline={boolean('outline', false)}
                colorScheme={text('colorScheme', '')}
                size={text('size', '')}
                disabled={boolean('disabled', false)}
                onClick={action}
            >
                I AM A Button
            </Button>
        ),
        { notes }
    )
    .add('Test', () => (
        <Button outline colorScheme="error" size="large">
            I AM A Button
        </Button>
    ))
