import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Styles/Layout'
import { withStyleBlocks } from 'Utilities/styles'
import styles from './Link.styles'

const Link = ({ children, className, ...rest }) => {
    return (
        <a className={className} {...rest}>
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string,
    onClick: PropTypes.func
}
export default withSpacing(withStyleBlocks(Link)(styles))
