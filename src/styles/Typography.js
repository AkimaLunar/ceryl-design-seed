import C from 'Styles/Constants'
import { getScale } from 'Styles/Scale'

// =============================================================================
// Typography
// =============================================================================

export const calcFontSize = n => {
    const scale = getScale(n)
    return `${(scale * C.FONT_RATIO) / C.REM}rem`
}

export const calcLineHeight = n => {
    const scale = getScale(n)
    return `${scale / C.REM}rem`
}

export const getFontScale = n => ({
    fontSize: calcFontSize(n),
    lineHeight: calcLineHeight(n)
})

export const paragraph = {
    fontFamily: C.TEXT_FONT,
    ...getFontScale(1)
}

export const emphasis = {
    fontWeight: C.FONT_WEIGHT_BOLD
}

export const title = {
    fontFamily: C.HEADING_FONT,
    fontWeight: C.FONT_WEIGHT_REGULAR,
    ...getFontScale(5)
}

export const heading = {
    fontFamily: C.HEADING_FONT,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontWeight: C.FONT_WEIGHT_BOLD,
    ...getFontScale(3)
}

export const subheading = {
    fontFamily: C.HEADING_FONT,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontWeight: C.FONT_WEIGHT_BOLD,
    ...getFontScale(2)
}

export const label = {
    fontFamily: C.TEXT_FONT,
    fontWeight: C.FONT_WEIGHT_BOLD,
    letterSpacing: '0.015rem',
    ...getFontScale(1)
}

export const caption = {
    fontFamily: C.TEXT_FONT,
    letterSpacing: '0.025rem',
    ...getFontScale(1)
}

// =============================================================================
export default {
    caption,
    emphasis,
    heading,
    label,
    paragraph,
    subheading,
    title
}
