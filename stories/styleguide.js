import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion'
import Colors from '../src/styleguide/Colors'

const Color = styled.div(
    {
        height: '20rem',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    props => ({
        backgroundColor: props.color,
        color: props.dark,
        color: props.inverse && Colors.grey.white
    })
)

// const Swatch = styled(({ color, className, children }) => (
//     <figure className={className}>
//         <Color>{color}</Color>
//         <figcaption>{children}</figcaption>
//     </figure>
// ))({
//     height: '20rem',
//     borderRadius: '3px'
// })

storiesOf('Styleguide/Colors', module).add('Theme', () => (
    <Color color={Colors.theme.primary}>{Colors.theme.primary}</Color>
))
