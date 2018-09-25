// =============================================================================
// Colors
// =============================================================================

// Constants // ================================================================
export const theme = {
    primary: '#5f27cd',
    secondary: '#341f97'
}

export const ui = {
    alert: '#f19066',
    default: '#2e86de',
    error: '#e66767',
    info: '#54a0ff',
    success: '#1dd1a1'
}

// Functions // ================================================================
export const calcGrey = value => `hsl(230, 20%, ${value}%)`

export const grey = {
    black: '#000000',
    dark: calcGrey(30),
    medium: calcGrey(60),
    light: calcGrey(98),
    white: '#FFFFFF'
}

export const gradient = {
    accent: `linear-gradient(135deg, ${theme.primary} 0%, ${
        theme.secondary
    } 100%)`
}

export const background = grey.light
// Style Blocks // =============================================================

// =============================================================================

export default {
    theme,
    ui,
    grey,
    gradient,
    background
}
