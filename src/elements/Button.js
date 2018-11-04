import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Styles/Layout'
import { withStyleBlocks } from 'Utilities/styles'
import styles from './Button.styles'

const Button = ({ children, onClick, className }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default withSpacing(withStyleBlocks(Button)(styles))
