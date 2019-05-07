import { link } from 'Blocks/interactive'
import { css } from '@emotion/core'

const base = css(link)

export const constructStyles = () => {
    const styles = new Set([base])

    styles.delete(undefined)

    return Array.from(styles)
}
