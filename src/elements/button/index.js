import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { withStyles } from 'Utilities/styles'
import { constructStyles } from './styles'

const Button = ({ children, onClick, className }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default withSpacing(withStyles(Button)(constructStyles))
