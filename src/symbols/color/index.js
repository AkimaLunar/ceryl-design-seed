// =============================================================================
// Color
// =============================================================================

import { calcGrey, calcGradient } from 'Utilities/colors'

export const COLOR_THEME = {
    PRIMARY: '#7043E0', // Ultraviolet
    SECONDARY: '#2CB0FC', // Modern Sky
    DARK: '#4C2E9A', // Deep Ocean
    LIGHT: '#E0F5FF' // Ether,
}
COLOR_THEME.DEFAULT = COLOR_THEME.PRIMARY

export const COLOR_UI = {
    ALERT: '#F2C94C', // Mustard
    ACTION: '#2CB0FC', // Modern Sky
    ERROR: '#EB5757', // Tomato
    INFO: '#56B9F2', // Blueberry
    SUCCESS: '#6FCF97' // Limeade,
}
COLOR_UI.DEFAULT = COLOR_UI.ACTION

export const COLOR_GREY_HUE = 254

export const COLOR_GREYS = {
    BLACK: '#000000',
    DARK: calcGrey(COLOR_GREY_HUE, 30),
    MEDIUM: calcGrey(COLOR_GREY_HUE, 60),
    LIGHT: calcGrey(COLOR_GREY_HUE, 98),
    WHITE: '#FFFFFF',
    GREY_90: calcGrey(COLOR_GREY_HUE, 90),
    GREY_80: calcGrey(COLOR_GREY_HUE, 80),
    GREY_70: calcGrey(COLOR_GREY_HUE, 70),
    GREY_60: calcGrey(COLOR_GREY_HUE, 60),
    GREY_50: calcGrey(COLOR_GREY_HUE, 50),
    GREY_40: calcGrey(COLOR_GREY_HUE, 40),
    GREY_30: calcGrey(COLOR_GREY_HUE, 30),
    GREY_20: calcGrey(COLOR_GREY_HUE, 20),
    GREY_10: calcGrey(COLOR_GREY_HUE, 10)
}
COLOR_GREYS.DEFAULT = COLOR_UI.DARK

export const GRADIENT = {
    ACCENT: calcGradient(135, COLOR_THEME.PRIMARY, COLOR_THEME.SECONDARY)
}
GRADIENT.DEFAULT = GRADIENT.ACCENT

export const COLOR_TEXT = COLOR_GREYS.DARK
export const COLOR_BACKGROUND = COLOR_GREYS.LIGHT
