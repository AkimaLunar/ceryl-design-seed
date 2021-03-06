// =============================================================================
// Typography
// =============================================================================

import S from 'Symbols'

const { getFontScale } = S

export const paragraph = {
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    ...getFontScale(1)
}

export const emphasis = {
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD
}

export const title = {
    fontFamily: S.TYPOGRAPHY_HEADING_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_REGULAR,
    ...getFontScale(5)
}

export const heading = {
    fontFamily: S.TYPOGRAPHY_HEADING_FONT,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    ...getFontScale(3)
}

export const subheading = {
    fontFamily: S.TYPOGRAPHY_HEADING_FONT,
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    ...getFontScale(2)
}

export const label = {
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD,
    letterSpacing: '0.015rem',
    ...getFontScale(1)
}

export const caption = {
    fontFamily: S.TYPOGRAPHY_TEXT_FONT,
    letterSpacing: '0.025rem',
    ...getFontScale(1)
}

export default {
    caption,
    emphasis,
    heading,
    label,
    paragraph,
    subheading,
    title
}
