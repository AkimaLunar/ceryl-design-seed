import { css } from '@emotion/core'
import C from 'Styles/Constants'
// =============================================================================
// Colors
// =============================================================================

const interactive = css({
    color: C.UI_COLORS.success,
    transition: `color ${C.BASE_DURATION} ${C.BASE_TIMING}`,

    '&:hover': {
        color: C.UI_COLORS.success
    },
    '&:focus': {
        color: C.UI_COLORS.success
    }
})

const interactiveBackground = css({
    color: C.GREY_COLORS.white,
    backgroundColor: C.GREY_COLORS.white,
    transition: `all ${C.BASE_DURATION} ${C.BASE_TIMING}`,
    '&:hover': {
        color: C.GREY_COLORS.white
    },
    '&:focus': {
        color: C.GREY_COLORS.white
    }
})

// =============================================================================

export default {
    interactive,
    interactiveBackground
}
