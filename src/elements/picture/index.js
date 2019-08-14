import React from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { withStyles } from 'Utilities/styles'
import { constructStyles } from './styles'

const Source = ({ srcSet, media }) => <source srcSet={srcSet} media={media} />

Source.propTypes = {
    srcSet: PropTypes.string,
    media: PropTypes.string
}

const Picture = ({ src, srcSets, className }) => (
    <picture className={className}>
        {srcSets.map(({ srcSet, media }) => (
            <Source key={srcSet} srcSet={srcSet} media={media} />
        ))}
        <img src={src} />
    </picture>
)
Picture.defaultProps = {
    srcSets: []
}

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    srcSets: PropTypes.array
}

export default withSpacing(withStyles(Picture)(constructStyles))
