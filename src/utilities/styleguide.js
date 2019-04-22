import React from 'react'
import { calcGrey } from 'Utilities/colors'
import { withSpacing } from 'Utilities/spacing'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import S from 'Symbols'
import styled from '@emotion/styled'
import text from 'Blocks/text'

const { calcSpace } = S

class Styleguide extends React.Component {
    static Title = styled.h1(text.title, {
        borderBottom: `0.1rem solid ${calcGrey(92)}`,
        paddingBottom: calcSpace(1),
        margin: `${calcSpace(4)} 0`,
        fontWeight: S.TYPOGRAPHY_FONT_WEIGHT_BOLD
    })

    static Description = styled.p({
        color: S.COLOR_GREYS.MEDIUM
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

    static DefinitionDescription = styled.dd(text.caption, {
        color: S.COLOR_GREYS.MEDIUM
    })
    static Caption = withSpacing(
        styled.p(text.caption, {
            color: S.COLOR_GREYS.MEDIUM
        })
    )

    static Swatch = styled.div(
        {
            height: '20rem'
        },
        props => ({
            backgroundColor: props.color
        })
    )

    static Swatches = ({ scheme }) => {
        return Object.keys(scheme).map(color => (
            <article key={color}>
                <Styleguide.Swatch color={scheme[color]} />
                <Styleguide.Description>
                    {color}
                    <br />
                    {scheme[color]}
                </Styleguide.Description>
            </article>
        ))
    }

    static Font = styled(({ className, fontFamily }) => (
        <p className={className}>{fontFamily}</p>
    ))(({ fontFamily, fontWeight }) => ({
        fontFamily,
        fontWeight,
        margin: `0 0 ${S.calcSpace(2)} 0`
    }))

    static Markdown = (source) => (
        <ReactMarkdown source={source} />
    )

    render() {
        return <Styleguide.Main>{this.props.children}</Styleguide.Main>
    }
}

Styleguide.propTypes = {
    children: PropTypes.node
}

export default Styleguide
