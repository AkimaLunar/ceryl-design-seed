import React from 'react'
import PropTypes from 'prop-types'
import { calcSpace } from 'Styles/Layout'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Styleguide from 'Utilities/styleguide'

import C from 'Styles/Constants'
import 'Global'

const Swatch = styled.div(
    {
        height: '10rem',
        marginBottom: calcSpace(3)
    },
    props => ({
        boxShadow: props.shadow
    })
)

const shadows = {
    0: C.SHADOW_0,
    2: C.SHADOW_2,
    4: C.SHADOW_4,
    6: C.SHADOW_6
}

const Swatches = () =>
    Object.keys(shadows).map(shadow => (
        <article key={shadow}>
            <Swatch shadow={shadows[shadow]} />
            <Styleguide.Description>
                <strong>{`Level ${shadow}`}</strong>
                <br />
                {shadows[shadow]}
            </Styleguide.Description>
        </article>
    ))

Swatches.propTypes = {
    scheme: PropTypes.object
}

storiesOf('Styles/Plane', module).add('Shadows', () => (
    <Styleguide>
        <Styleguide.Title>Shadow Levels</Styleguide.Title>
        <Styleguide.Grid>
            <Swatches />
        </Styleguide.Grid>
    </Styleguide>
))
