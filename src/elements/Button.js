import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Colors from 'Styles/Colors'

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
export default styled(Button)({
    color: Colors.ui.default
})
