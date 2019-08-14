import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { withStyles } from 'Utilities/styles'
import { constructStyles } from './styles'

const Text = ({ element: Element, children, className }) => {
    return <Element className={className}>{children}</Element>
}

Text.defaultProps = {
    element: 'p'
}

Text.propTypes = {
    children: PropTypes.node,
    element: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default withSpacing(withStyles(Text)(constructStyles))
