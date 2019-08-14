import React from 'react'
import { text, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Picture from 'Elements/picture'
import notes from './notes.md'

storiesOf('Elements', module).add(
    'Picture',
    () => (
        <Picture
            src={text('src', 'https://source.unsplash.com/random/800x600')}
            srcSets={[
                {
                    srcSet:"https://source.unsplash.com/random/800x600",
                    media:`(min-width: ${number('minWidth', 400)}px)`
                }
            ]}
        />
    ),
    { notes }
)
