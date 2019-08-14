import { css } from '@emotion/core'
import { getCssFromMap } from 'Utilities/styles'
import S from 'Symbols'

const { calcSpace } = S

const SIZES = {
    SMALL: calcSpace(8),
    MEDIUM: calcSpace(12),
    LARGE: calcSpace(16)
}
SIZES.DEFAULT = SIZES.MEDIUM

const makeSizeModifier = size =>
    css({
        img: {
            height: size,
            width: size
        }
    })

const base = css({
    img: {
        borderRadius: '50%'
    }
})

export const constructStyles = props => {
    const styles = new Set([base])
    styles.add(makeSizeModifier(SIZES.DEFAULT))
    styles.add(getCssFromMap(props, 'size', SIZES, makeSizeModifier))
    styles.delete(undefined)
    return Array.from(styles)
}
