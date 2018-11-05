import React from 'react'
import C from 'Styles/Constants'
import Typography from 'Styles/Typography'
import { calcSpace } from 'Styles/Layout'
import { Global } from '@emotion/core'

import LinkStyles from 'Elements/Link.styles'
import ButtonStyles from 'Elements/Button.styles'
import { calcFontSize, calcLineHeight } from '../styles/Typography'

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
        ...Typography.paragraph,
        marginBottom: calcSpace(2),
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0
    },
    ['h1, h2, h3, h4, h5, h6']: {
        fontSize: calcFontSize(2),
        lineHeight: calcLineHeight(2),
        marginBottom: calcSpace(2),
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0
    },
    a: {
        ...LinkStyles.base,
        ...LinkStyles.themes.primary.base
    },
    button: {
        ...ButtonStyles.base
    },
    blockquote: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        marginInlineStart: calcSpace(4),
        marginInlineEnd: calcSpace(4)
    },
    cite: {
        fontStyle: 'normal',
        ...Typography.caption
    },
    dl: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        marginInlineStart: 0,
        marginInlineEnd: 0,
        ...Typography.paragraph
    },
    dt: {
        marginBottom: calcSpace(1),
        marginTop: calcSpace(2),
        marginLeft: 0,
        marginRight: 0
    },
    dd: {
        marginInlineStart: calcSpace(4)
    },
    img: {
        width: '100%'
    },
    figure: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        marginInlineStart: 0,
        marginInlineEnd: 0
    },
    figcaption: {
        ...Typography.caption,
        fontStyle: 'normal',
        marginBottom: calcSpace(2),
        marginTop: calcSpace(2),
        marginLeft: 0,
        marginRight: 0
    },
    hr: {
        margin: 0,
        height: 0,
        border: 'none',
        borderTop: C.DEFAULT_BORDER,
        marginBottom: C.LINE_WIDTH
    },

    ['ul, ol']: {
        marginBlockStart: calcSpace(2),
        marginBlockEnd: calcSpace(2),
        paddingInlineStart: 0,
        listStylePosition: 'inside'
    },

    ul: {
        listStyle: 'square',
        listStylePosition: 'inside'
    },
    ['strong, em']: {
        fontStyle: 'normal',
        ...Typography.emphasis
    }
}

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles
