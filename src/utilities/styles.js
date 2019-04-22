import React from 'react'
import styled from '@emotion/styled'
import { logger } from 'Utilities/logger'

export const getCssFromBoolean = (props, prop, css) => {
    if (props.hasOwnProperty(prop) && props[prop]) {
        return css
    }
}

export const getCssFromMap = (props, prop, map, makeCSS) => {
    if (props.hasOwnProperty(prop) && !!props[prop]) {
        const _key = props[prop].toUpperCase()
        const _value = map[_key]
        if (!_value) {
            logger.warn(`
                ${_key} is not available in ${Object.keys(map)}.
            `)
            if (!map.DEFAULT) {
                logger.warn(`
                    There is no DEFAULT for ${map} map.
                `)
                return
            }
        }
        return makeCSS(_value || map.DEFAULT)
    }
}

export const withStyles = Component => constructStyles => {
    const WithStyles = props => {
        const styles = constructStyles(props)
        const StyledComponent = styled(Component)(styles)

        return <StyledComponent {...props} />
    }

    WithStyles.displayName = `withStyles(${Component.displayName ||
        Component.name ||
        'Component'})`

    return WithStyles
}
