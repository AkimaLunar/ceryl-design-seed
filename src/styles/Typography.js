import C from 'Styles/Constants'
import ms from 'modular-scale'
import { getScale } from 'Styles/Scale'

// =============================================================================
// Typography
// =============================================================================

export const typographicScale = ms({
    ratio: C.RATIO,
    base: C.STEP
})

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
    ...getFontScale(2)
}

export const title = {
    fontFamily: C.HEADING_FONT,
    fontWeight: C.FONT_WEIGHT_REGULAR,
    ...getFontScale(8)
}

export const heading = {
    fontFamily: C.HEADING_FONT,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontWeight: C.FONT_WEIGHT_BOLD,
    ...getFontScale(4)
}

export const subheading = {
    fontFamily: C.HEADING_FONT,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontWeight: C.FONT_WEIGHT_BOLD,
    ...getFontScale(3)
}

export const caption = {
    fontFamily: C.TEXT_FONT,
    letterSpacing: '0.025rem',
    ...getFontScale(1)
}

// =============================================================================
export default {
    caption,
    heading,
    paragraph,
    subheading,
    title
}
