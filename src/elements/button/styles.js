import { css } from '@emotion/core'
import { button } from 'Blocks/interactive'
import { logger } from 'Utilities/logger'
import S from 'Symbols'
import { getCssFromBoolean, getCssFromMap } from 'Utilities/styles'
const { calcSpace } = S

const makeSolidModifier = color =>
    css({
        color: S.COLOR_GREYS.WHITE,
        backgroundColor: color,
        '&:hover': {
            color: S.COLOR_GREYS.WHITE,
            backgroundColor: color
        },
        '&:focus': {
            color: S.COLOR_GREYS.WHITE,
            backgroundColor: color
        }
    })

const makeOutlineModifier = color =>
    css({
        color,
        backgroundColor: 'transparent',
        borderWidth: '0.1rem',
        borderColor: color,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: color,
            color: S.COLOR_GREYS.WHITE,
            boxShadow: S.PLANE_SHADOW_2
        },
        '&:focus': {
            backgroundColor: color,
            color: S.COLOR_GREYS.WHITE
        }
    })

const SIZES = {
    SMALL: calcSpace(5),
    MEDIUM: calcSpace(6),
    LARGE: calcSpace(8)
}
SIZES.DEFAULT = SIZES.MEDIUM

const base = css(button)

const disabled = css({
    opacity: 0.5,
    cursor: 'not-allowed'
})

const makeSizeModifier = size =>
    css({
        height: size
    })

export const constructStyles = props => {
    const styles = new Set([base])

    styles.add(makeSizeModifier(SIZES.DEFAULT))
    styles.add(getCssFromMap(props, 'size', SIZES, makeSizeModifier))
    styles.add(
        getCssFromBoolean(props, 'solid', makeSolidModifier(S.COLOR_UI.DEFAULT))
    )
    styles.add(
        getCssFromBoolean(
            props,
            'outline',
            makeOutlineModifier(S.COLOR_UI.DEFAULT)
        )
    )

    if (props.hasOwnProperty('colorScheme') && props.colorScheme) {
        const { colorScheme, outline } = props
        const _color = S.COLOR_UI[colorScheme.toUpperCase()]
        if (!_color) {
            logger.warn(`
                        ${colorScheme.toUpperCase()} is not available in ${Object.keys(
    S.COLOR_UI
)}.
                    `)
            return
        }
        styles.add(
            outline ? makeOutlineModifier(_color) : makeSolidModifier(_color)
        )
    }

    styles.add(getCssFromBoolean(props, 'disabled', disabled))
    styles.delete(undefined)

    return Array.from(styles)
}
