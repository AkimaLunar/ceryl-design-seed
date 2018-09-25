import { css } from 'emotion'
import { STEP, REM } from 'Styles/Scale'

// =============================================================================
// Layout
// =============================================================================

// Constants // ================================================================
export const TEXT_FONT = `'Source Sans Pro', sans-serif`
export const HEADING_FONT = TEXT_FONT
export const FONT_WEIGHT_REGULAR = 400
export const FONT_WEIGHT_BOLD = 700

export const RHYTM = STEP / 2
export const BASELINE = STEP * 2
export const FONT_RATIO = 0.75

// Functions // ================================================================
export const calcFontSize = (factor = 1) => {
    const initSize = 4
    const size = factor > 0 ? factor + initSize : initSize
    return css({
        fontSize: `${(size * RHYTM * FONT_RATIO) / REM}rem`,
        lineHeight: `${(size * RHYTM) / REM}rem`
    })
}

// Style Blocks // =============================================================
export const paragraph = css(
    {
        fontFamily: TEXT_FONT
    },
    calcFontSize(2)
)

export const title = css(
    {
        fontFamily: HEADING_FONT,
        fontWeight: FONT_WEIGHT_REGULAR
    },
    calcFontSize(8)
)

export const heading = css(
    {
        fontFamily: HEADING_FONT,
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontWeight: FONT_WEIGHT_BOLD
    },
    calcFontSize(4)
)

export const subheading = css(
    {
        fontFamily: HEADING_FONT,
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontWeight: FONT_WEIGHT_BOLD
    },
    calcFontSize(3)
)

export const caption = css(
    {
        fontFamily: TEXT_FONT,
        letterSpacing: '0.025rem'
    },
    calcFontSize(1)
)

// =============================================================================
export default {
    caption,
    heading,
    paragraph,
    subheading,
    title
}
