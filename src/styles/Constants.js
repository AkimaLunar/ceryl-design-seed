// =============================================================================
// Constants
// =============================================================================

import { calcGrey, calcGradient } from 'Utilities/colors'

// Layout // ===================================================================
export const CONTAINTER = 1080

// Scale // ====================================================================
export const REM = 10
export const BASE_SCALE = `${(100 / 16) * REM}%`
export const STEP = 8
// Ratio optins: https://www.modularscale.com/
export const RATIO = 1.5

// Typography // ===============================================================
export const TEXT_FONT = `'Source Sans Pro', sans-serif`
export const HEADING_FONT = TEXT_FONT
export const FONT_WEIGHT_REGULAR = 400
export const FONT_WEIGHT_BOLD = 800

export const RHYTM = STEP / 2
export const BASELINE = STEP * 2
export const FONT_RATIO = 0.875

// Colors // ================================================================
export const THEME_COLORS = {
    primary: '#5f27cd',
    secondary: '#341f97'
}

export const UI_COLORS = {
    alert: '#f19066',
    action: '#2e86de',
    error: '#e66767',
    info: '#54a0ff',
    success: '#1dd1a1'
}

export const GREY_HUE = 254

export const GREY_COLORS = {
    black: '#000000',
    dark: calcGrey(GREY_HUE, 30),
    medium: calcGrey(GREY_HUE, 60),
    light: calcGrey(GREY_HUE, 98),
    white: '#FFFFFF',
    grey90: calcGrey(GREY_HUE, 90),
    grey80: calcGrey(GREY_HUE, 80),
    grey70: calcGrey(GREY_HUE, 70),
    grey60: calcGrey(GREY_HUE, 60),
    grey50: calcGrey(GREY_HUE, 50),
    grey40: calcGrey(GREY_HUE, 40),
    grey30: calcGrey(GREY_HUE, 30),
    grey20: calcGrey(GREY_HUE, 20),
    grey10: calcGrey(GREY_HUE, 10)
}

export const GRADIENT_COLORS = {
    accent: calcGradient(135, THEME_COLORS.primary, THEME_COLORS.secondary)
}

export const BACKGROUND_COLOR = GREY_COLORS.light

// Line // =====================================================================
export const BORDER_RADIUS = '0.4rem'
export const LINE_WIDTH = '0.1rem'
export const DEFAULT_BORDER = `${LINE_WIDTH} solid ${GREY_COLORS.grey80}`

// Motion // ===================================================================
export const BASE_DURATION = '0.2s'
export const BASE_TIMING = 'ease'

export default {
    // Layout // ===================================================================
    CONTAINTER,

    // Scale // ====================================================================
    REM,
    BASE_SCALE,
    STEP,
    RATIO,

    // Typography // ===============================================================
    TEXT_FONT,
    HEADING_FONT,
    FONT_WEIGHT_REGULAR,
    FONT_WEIGHT_BOLD,

    RHYTM,
    BASELINE,
    FONT_RATIO,

    // Colors // ================================================================
    THEME_COLORS,
    UI_COLORS,
    GREY_HUE,
    GREY_COLORS,
    GRADIENT_COLORS,
    BACKGROUND_COLOR,

    // Line // =====================================================================
    BORDER_RADIUS,
    LINE_WIDTH,
    DEFAULT_BORDER,

    // Motion // ===================================================================
    BASE_DURATION,
    BASE_TIMING
}