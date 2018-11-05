import C from 'Styles/Constants'
import { calcSpace } from 'Styles/Layout'
import { calcFontSize, calcLineHeight } from 'Styles/Typography'
import { constructThemes } from 'Utilities/styles'

export const base = {
    alignItems: 'center',
    appearance: '',
    backgroundColor: 'transparent',
    borderRadius: C.BORDER_RADIUS,
    borderStyle: 'solid',
    borderWidth: '0',
    color: 'currentColor',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: C.TEXT_FONT,
    fontSize: calcFontSize(1),
    fontSmoothing: 'antialiased',
    fontWeight: C.FONT_WEIGHT_BOLD,
    height: calcSpace(5),
    letterSpacing: '0.1rem',
    lineHeight: calcLineHeight(1),
    paddingBottom: 0,
    paddingLeft: calcSpace(3),
    paddingRight: calcSpace(3),
    paddingTop: 0,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: `all ${C.BASE_DURATION} ${C.BASE_TIMING}`,
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5
    }
}

export const makeSolidModifier = color => ({
    color: C.GREY_COLORS.white,
    backgroundColor: color,
    '&:hover': {
        backgroundColor: color
    },
    '&:focus': {
        backgroundColor: color
    }
})

export const makeOutlineModifier = color => ({
    color,
    backgroundColor: 'transparent',
    borderWidth: '0.1rem',
    borderColor: color,
    '&:hover': {
        backgroundColor: color,
        color: C.GREY_COLORS.white
    },
    '&:focus': {
        backgroundColor: color,
        color: C.GREY_COLORS.white
    }
})

export const colorThemes = constructThemes([
    {
        modifier: 'solid',
        makeStyle: makeSolidModifier,
        schemes: [C.THEME_COLORS, C.UI_COLORS]
    },
    {
        modifier: 'outline',
        makeStyle: makeOutlineModifier,
        schemes: [C.THEME_COLORS, C.UI_COLORS]
    }
])

// =============================================================================

export default {
    base,
    modifiers: {
        small: {
            fontSize: calcFontSize(1),
            height: calcSpace(4),
            lineHeight: calcLineHeight(1),
            paddingLeft: calcSpace(2),
            paddingRight: calcSpace(2)
        },
        large: {
            fontSize: calcFontSize(2),
            fontWeight: C.FONT_WEIGHT_REGULAR,
            height: calcSpace(6),
            lineHeight: calcLineHeight(2),
            paddingLeft: calcSpace(4),
            paddingRight: calcSpace(4)
        },
        outline: makeOutlineModifier(C.UI_COLORS.action),
        solid: makeSolidModifier(C.UI_COLORS.action)
    },
    themes: colorThemes
}
