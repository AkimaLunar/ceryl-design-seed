import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion'
import Styleguide from 'Utilities/styleguide'

import Colors from 'Styles/Colors'
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
                <Swatches scheme={Colors.theme} />
            </Styleguide.Grid>
        </Styleguide>
    ))
    .add('UI Colors', () => (
        <Styleguide>
            <Styleguide.Title>UI Colors</Styleguide.Title>
            <Styleguide.Grid>
                <Swatches scheme={Colors.ui} />
            </Styleguide.Grid>
        </Styleguide>
    ))
    .add('Grey Colors', () => {
        return (
            <Styleguide>
                <Styleguide.Title>Grey Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Swatches scheme={Colors.grey} />
                </Styleguide.Grid>
            </Styleguide>
        )
    })
