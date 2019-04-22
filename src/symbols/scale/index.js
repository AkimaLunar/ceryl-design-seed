// =============================================================================
// Scale
// =============================================================================

/**
 * @todo Deprecate Modular Scale
 * @body Replace modular scale with a better scaling solution for UI purposes.
 */
import ms from 'modular-scale'

export const SCALE_REM = 10
export const SCALE_BASE = `${(100 / 16) * SCALE_REM}%`
export const SCALE_STEP = 8
export const SCALE_RATIO = 1.5 // Ratio optins: https://www.modularscale.com/

const modularScale = ms({
    ratio: SCALE_RATIO,
    base: SCALE_STEP
})

/**
 * Gets a rem value for n units of space.
 * @param   {number} n Units of space
 * @returns {string} Rem value
 */
export const calcSpace = n => `${(SCALE_STEP * n) / SCALE_REM}rem`

/**
 * Gets an n’th unit of scale.
 * @param   {number} n Scale factor
 * @returns {number}
 */
export const getScale = n => {
    const factor = n + 4
    const scale = modularScale(factor, true)
    const full = Math.ceil(scale / SCALE_STEP) * SCALE_STEP

    if (full - scale < SCALE_STEP) {
        return full + SCALE_STEP
    }

    return full
}

/**
 * Gets a rem value for an n’th unit of scale.
 * @param   {number} n Scale factor
 * @returns {number} Rem value
 */
export const calcScale = n => {
    const factor = n + 4
    const scale = modularScale(factor, true)
    const full = Math.ceil(scale / SCALE_STEP) * SCALE_STEP

    if (full - scale < SCALE_STEP) {
        return `${(full + SCALE_STEP) / SCALE_REM}rem`
    }

    return `${full / SCALE_REM}rem`
}
