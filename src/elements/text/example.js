import React from 'react'

const BackgroundImage = props => (
    <div
        css={css({
            backgroundUrl: props.backgroundUrl
        })}
        {...props}
    />
)
