import { css } from '@emotion/core'
import { getCssFromBoolean } from 'Utilities/styles'
import {
    caption,
    emphasis,
    heading,
    label,
    paragraph,
    subheading,
    title
} from 'Blocks/text'

const base = css(paragraph)

export const constructStyles = props => {
    const styles = new Set([base])
    styles.add(getCssFromBoolean(props, 'title', title))
    styles.add(getCssFromBoolean(props, 'heading', css(heading)))
    styles.add(getCssFromBoolean(props, 'subheading', css(subheading)))
    styles.add(getCssFromBoolean(props, 'caption', css(caption)))
    styles.add(getCssFromBoolean(props, 'emphasis', css(emphasis)))
    styles.add(getCssFromBoolean(props, 'label', css(label)))

    styles.delete(undefined)
    return Array.from(styles)
}
