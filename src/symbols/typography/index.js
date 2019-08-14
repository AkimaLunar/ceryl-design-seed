// =============================================================================
// Typography
// =============================================================================

import { SCALE_STEP, SCALE_REM, getScale } from '../scale'

export const TYPOGRAPHY_TEXT_FONT = `'Source Sans Pro', sans-serif`
export const TYPOGRAPHY_HEADING_FONT = TYPOGRAPHY_TEXT_FONT
export const TYPOGRAPHY_FONT_WEIGHT_REGULAR = 400
export const TYPOGRAPHY_FONT_WEIGHT_BOLD = 700
export const TYPOGRAPHY_RHYTM = SCALE_STEP / 2
export const TYPOGRAPHY_BASELINE = SCALE_STEP * 2
export const TYPOGRAPHY_FONT_RATIO = 0.875

export const calcFontSize = n => {
    const scale = getScale(n)
    return `${(scale * TYPOGRAPHY_FONT_RATIO) / SCALE_REM}rem`
}

export const calcLineHeight = n => {
    const scale = getScale(n)
    return `${scale / SCALE_REM}rem`
}

export const getFontScale = n => ({
    fontSize: calcFontSize(n),
    lineHeight: calcLineHeight(n)
})
