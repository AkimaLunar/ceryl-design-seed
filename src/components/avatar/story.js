import React from 'react'
import { text, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Avatar from 'Components/avatar'
import notes from './notes.md'

storiesOf('Components', module).add(
    'Avatar',
    () => (
        <Avatar
            size={text('size', 'Large')}
            src={text('src', 'https://source.unsplash.com/random/80x80')}
            srcSets={[
                {
                    srcSet:"https://source.unsplash.com/random/80x80",
                    media:`(min-width: ${number('minWidth', 400)}px)`
                }
            ]}
        />
    ),
    { notes }
)
