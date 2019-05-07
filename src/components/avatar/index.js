import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { withStyles } from 'Utilities/styles'
import { constructStyles } from './styles'
import Picture from 'Elements/picture'

const Avatar = ({ className, src, srcSets }) => (
    <Picture className={className} src={src} srcSets={srcSets} />
)

Avatar.propTypes = {
    className: PropTypes.string,
    srcSets: PropTypes.array,
    src: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default withSpacing(withStyles(Avatar)(constructStyles))
