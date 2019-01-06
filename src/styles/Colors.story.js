import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Styleguide from 'Utilities/Styleguide'

import C from 'Styles/Constants'
import 'Global'

const Swatch = styled.div(
    {
        height: '20rem'
    },
    props => ({
        backgroundColor: props.color
    })
)

const Swatches = ({ scheme }) =>
    Object.keys(scheme).map(color => (
        <article key={color}>
            <Swatch color={scheme[color]} />
            <Styleguide.Description>
                {color}
                <br />
                {scheme[color]}
            </Styleguide.Description>
        </article>
    ))

Swatches.propTypes = {
    scheme: PropTypes.object
}

storiesOf('Styles/Colors', module)
    .add('Theme Colors', () => (
        <Styleguide>
            <Styleguide.Title>Theme Colors</Styleguide.Title>
            <Styleguide.Grid>
                <Swatches scheme={C.THEME_COLORS} />
            </Styleguide.Grid>
        </Styleguide>
    ))
    .add('UI Colors', () => (
        <Styleguide>
            <Styleguide.Title>UI Colors</Styleguide.Title>
            <Styleguide.Grid>
                <Swatches scheme={C.UI_COLORS} />
            </Styleguide.Grid>
        </Styleguide>
    ))
    .add('Grey Colors', () => {
        return (
            <Styleguide>
                <Styleguide.Title>Grey Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Swatches scheme={C.GREY_COLORS} />
                </Styleguide.Grid>
            </Styleguide>
        )
    })
