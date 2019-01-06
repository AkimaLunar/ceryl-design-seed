import C from 'Styles/Constants'
import { TEXT_FONT } from 'Styles/Constants'
import { constructThemes } from 'Utilities/styles'

export const base = {
    cursor: 'pointer',
    fontFamily: TEXT_FONT,
    textDecoration: 'none',
    transition: `all ${C.BASE_DURATION} ${C.BASE_TIMING}`,

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5
    }
}

export const makeColorModifier = color => ({
    color,
    '&:hover': {
        color
    },
    '&:focus': {
        color: color
    }
})

export const colorThemes = constructThemes([
    {
        makeStyle: makeColorModifier,
        schemes: [C.THEME_COLORS, C.GREY_COLORS]
    }
])

export default {
    base,
    modifiers: {
        underline: {
            textDecoration: 'underline'
        }
    },
    themes: colorThemes
}
