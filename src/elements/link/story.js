import React from 'react'
import { action } from '@storybook/addon-actions'
// import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Link from 'Elements/link'
import notes from './notes.md'

storiesOf('Elements', module).add(
    'Link',
    () => <Link onClick={action}>I am a link.</Link>,
    { notes }
)
