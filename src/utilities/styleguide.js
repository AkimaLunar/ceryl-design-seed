import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import C from 'Styles/Constants'
import Typography from 'Styles/Typography'
import { withSpacing } from 'Utilities/spacing'
import { calcGrey } from 'Utilities/colors'
import { calcSpace } from 'Styles/Layout'

class Styleguide extends React.Component {
    static Title = styled.h1(Typography.title, {
        borderBottom: `0.1rem solid ${calcGrey(92)}`,
        paddingBottom: calcSpace(1),
        margin: `${calcSpace(4)} 0`,
        fontWeight: C.FONT_WEIGHT_BOLD
    })

    static Description = styled.p({
        color: C.GREY_COLORS.medium
    })

    static Main = styled.div({
        maxWidth: '76rem',
        margin: '0 auto',
        padding: `${calcSpace(4)} ${calcSpace(2)}`
    })

    static Grid = styled.div({
        gridTemplateColumns: `repeat(auto-fill, minmax(14rem, 1fr))`,
        display: `grid`,
        gridGap: `${calcSpace(2)}`
    })

    static DefinitionList = styled.dl({
        gridTemplateColumns: `repeat(2, 1fr)`,
        display: `grid`,
        gridGap: `${calcSpace(2)}`
    })

    static DefinitionTerm = styled.dt({})

    static DefinitionDescription = styled.dd(Typography.caption, {
        color: C.GREY_COLORS.medium
    })
    static Caption = withSpacing(
        styled.p(Typography.caption, {
            color: C.GREY_COLORS.medium
        })
    )

    render() {
        return <Styleguide.Main>{this.props.children}</Styleguide.Main>
    }
}

Styleguide.propTypes = {
    children: PropTypes.node
}

export default Styleguide
