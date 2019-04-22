import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { withStyles } from 'Utilities/styles'
import { constructStyles } from './styles'

const Text = ({ element, children, className }) => {
    const Tag = typeof element === 'string' ? element : 'p'
    return <Tag className={className}>{children}</Tag>
}

Text.propTypes = {
    children: PropTypes.node,
    element: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default withSpacing(withStyles(Text)(constructStyles))
