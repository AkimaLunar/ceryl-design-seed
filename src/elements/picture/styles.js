import { css } from '@emotion/core'

const base = css({
    img: {
        width: '100%'
    }
})

export const constructStyles = () => {
    const styles = new Set([base])

    styles.delete(undefined)

    return Array.from(styles)
}
