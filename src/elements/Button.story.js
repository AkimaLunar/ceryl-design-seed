import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from 'Elements/Button'
import { boolean } from '@storybook/addon-knobs'

storiesOf('Elements/Button', module)
    .add('default', () => (
        <Button onClick={action('clicked')}>Default Button</Button>
    ))
    .add('solid', () => (
        <Button
            solid
            alert={boolean('Alert', false)}
            error={boolean('Error', false)}
            primary={boolean('Primary', false)}
            secondary={boolean('Secondary', false)}
            success={boolean('Success', false)}
            onClick={action('clicked')}
        >
            Solid Button
        </Button>
    ))
    .add('outline', () => (
        <Button
            outline
            alert={boolean('Alert', false)}
            error={boolean('Error', false)}
            primary={boolean('Primary', false)}
            secondary={boolean('Secondary', false)}
            success={boolean('Success', false)}
            onClick={action('clicked')}
        >
            Outline Button
        </Button>
    ))
    .add('small', () => (
        <Button outline small>
            Small Button
        </Button>
    ))
    .add('large', () => (
        <Button outline large>
            Large Button
        </Button>
    ))
