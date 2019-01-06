import ms from 'modular-scale'
import C from 'Styles/Constants'

// =============================================================================
// Scale
// =============================================================================

export const modularScale = ms({
    ratio: C.RATIO,
    base: C.STEP
})

export const getScale = n => {
    const factor = n + 4
    const scale = modularScale(factor, true)
    const full = Math.ceil(scale / C.STEP) * C.STEP

    if (full - scale < C.STEP) {
        return full + C.STEP
    }

    return full
}

export const calcScale = n => {
    const factor = n + 4
    const scale = modularScale(factor, true)
    const full = Math.ceil(scale / C.STEP) * C.STEP

    if (full - scale < C.STEP) {
        return `${(full + C.STEP) / C.REM}rem`
    }

    return `${full / C.REM}rem`
}

export default {}
