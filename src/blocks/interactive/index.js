import S from 'Symbols'
import { lighten } from 'polished'

const { calcFontSize, calcLineHeight, calcSpace } = S

export const base = {
    cursor: 'pointer',
    transition: S.MOTION_DEFAULT_TRANSITION,

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5
    }
}

export const area = {
    ...base,
    backgroundColor: 'transparent',
    borderRadius: S.LINE_BORDER_RADIUS,
    borderStyle: 'solid',
    borderWidth: '0',
    boxShadow: S.PLANE_SHADOW_2
}

export const link = {
    ...base,
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    textDecoration: 'none',
    color: S.COLOR_UI.ACTION,
    '&:hover': {
        color: lighten(0.1, S.COLOR_UI.ACTION)
    }
}

export const button = {
    ...area,
    ...link,
    textTransform: 'uppercase',
    fontSize: calcFontSize(1),
    letterSpacing: '0.1rem',

    alignItems: 'center',
    appearance: '',
    backgroundColor: S.COLOR_GREYS.WHITE,
    cursor: 'pointer',
    display: 'inline-flex',
    fontSmoothing: 'antialiased',
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    height: calcSpace(5),
    lineHeight: calcLineHeight(1),
    paddingBottom: 0,
    paddingLeft: calcSpace(3),
    paddingRight: calcSpace(3),
    paddingTop: 0,
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
}

export const makeSolidModifier = color => ({
    color: S.GREY_COLORS.white,
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
        color: S.GREY_COLORS.white
    },
    '&:focus': {
        backgroundColor: color,
        color: S.GREY_COLORS.white
    }
})

/**
 * @todo: Reimplement constructThemes()
 */
// export const colorThemes = constructThemes([
//     {
//         modifier: 'solid',
//         makeStyle: makeSolidModifier,
//         schemes: [S.THEME_COLORS, S.UI_COLORS]
//     },
//     {
//         modifier: 'outline',
//         makeStyle: makeOutlineModifier,
//         schemes: [S.THEME_COLORS, S.UI_COLORS]
//     }
// ])
