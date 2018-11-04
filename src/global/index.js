import React from 'react'
import C from 'Styles/Constants'
import Typography from 'Styles/Typography'
// import { calcSpace } from 'Styles/Layout'
import { Global } from '@emotion/core'

import LinkStyles from 'Elements/Link.styles'
import ButtonStyles from 'Elements/Button.styles'

export const globalStyles = {
    ['*']: {
        boxSizing: 'border-box'
    },
    html: {
        lineHeight: 1.15,
        ['-webkit-text-size-adjust']: '100%',
        fontSize: C.BASE_SCALE,
        fontFamily: C.TEXT_FONT,
        color: C.GREY_COLORS.dark,
        height: '100%',
        position: 'relative',
        backgroundColor: C.GREY_COLORS.light,
        margin: 0,
        padding: 0
    },

    body: {
        height: '100%',
        position: 'relative',
        backgroundColor: C.GREY_COLORS.light,
        margin: 0,
        padding: 0,
        ...Typography.paragraph
    },
    p: {
        ...Typography.paragraph
    },

    a: {
        ...LinkStyles.base,
        ...LinkStyles.primary
    },

    button: {
        ...ButtonStyles.base
    }
}

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
