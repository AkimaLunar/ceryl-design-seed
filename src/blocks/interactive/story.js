import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Styleguide from 'Utilities/styleguide'
import { button } from './index'

storiesOf('Blocks/Button', module).add('button', () => {
    const Button = styled.div(button.base)

    return (
        <Styleguide>
            <Button />
        </Styleguide>
    )
})
