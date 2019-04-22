import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from 'Elements/text'
import notes from './notes.md'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('Elements', module).add(
    'Text',
    () => (
        <React.Fragment>
            <Text
                title={boolean('title', false)}
                heading={boolean('heading', false)}
                subheading={boolean('subheading', false)}
                caption={boolean('caption', false)}
                emphasis={boolean('emphasis', false)}
                label={boolean('label', false)}
            >
                {text('Text', 'Intelligentsia food truck chia taxidermy tbh.')}
            </Text>
        </React.Fragment>
    ),
    { notes }
)
