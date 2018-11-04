import React from 'react'
import styled from '@emotion/styled'
import merge from 'lodash.merge'

/**
 * Constructs a theme styles object.
 * @param Array theme
 */
export const constructThemes = themes => {
    const _themes = {}
    const makeTheme = ({ modifier = 'base', makeStyle, schemes }) => {
        schemes.forEach(scheme =>
            Object.keys(scheme).reduce((acc, color) => {
                acc[color] = {
                    ...acc[color],
                    [modifier]: makeStyle(scheme[color])
                }
                return acc
            }, _themes)
        )
        return _themes
    }

    themes.forEach(theme => makeTheme(theme))
    return _themes
}

export const constructStyles = (componentStyles, props) => {
    // (1.1) Separate styling props.
    const _props = { ...props }
    // (1.2) Pass props unrelated to styling as restProps.
    const restProps = {}
    // (2) Get component’s base, modifier, and theme styles.
    const { base, modifiers = {}, themes = {}, ...restStyles } = componentStyles
    // (3) Apply base and extra styles by default.
    const styles = {}
    let appliedStyles = [base, restStyles]

    // (4) If provided themes, find matches.
    let appliedTheme = {}
    if (Object.keys(themes).length !== 0) {
        Object.keys(_props).forEach(key => {
            // (4.2) Merge applied themes into modifiers keys.
            if (props[key] === true && themes[key]) {
                merge(appliedTheme, themes[key])
                delete _props[key]
            }
            if (props[key] === true && themes[key]) {
                merge(appliedTheme, themes[key])
                delete _props[key]
            }
            // (4.3) Remove disabled themes.
            if (props[key] === false && themes[key]) {
                delete _props[key]
            }
        })
    }
    // (4.4) Apply base themes.
    if (appliedTheme.base) {
        appliedStyles = [...appliedStyles, appliedTheme.base]
    }

    // (5) If provided modifiers, find matches.
    if (Object.keys(modifiers).length !== 0) {
        Object.keys(_props).map(key => {
            if (props[key] === true && modifiers[key]) {
                // (5.1) Apply theme (if exists).
                const modifier = {}
                merge(modifier, modifiers[key], appliedTheme[key])
                appliedStyles = [...appliedStyles, modifier]
                delete _props[key]
            } else if (props[key] === false && modifiers[key]) {
                // (5.2) Remove disabled modifiers.
                delete _props[key]
            } else {
                restProps[key] = props[key]
            }
        })
    } else {
        // (6) Else pass all the props.
        merge(restProps, _props)
    }

    merge(styles, ...appliedStyles)
    return { styles, restProps }
}

export const withStyleBlocks = Component => componentStyles => {
    const WithStyleBlocks = props => {
        const { styles, restProps } = constructStyles(componentStyles, props)
        const StyledComponent = styled(Component)(styles)

        return <StyledComponent {...restProps} />
    }

    WithStyleBlocks.displayName = `withStyleBlocks(${Component.displayName ||
        Component.name ||
        'Component'})`

    return WithStyleBlocks
}
