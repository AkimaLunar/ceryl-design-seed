import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { withStyles } from 'Utilities/styles'
import { constructStyles } from './styles'

const Link = ({ children, onClick, className }) => (
    <a className={className} onClick={onClick}>
        {children}
    </a>
)

Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default withSpacing(withStyles(Link)(constructStyles))
