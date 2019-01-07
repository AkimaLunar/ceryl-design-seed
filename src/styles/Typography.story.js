import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Styleguide from 'Utilities/styleguide'
import C from 'Styles/Constants'
import Typography, { getFontScale } from 'Styles/Typography'
import { calcSpace } from 'Styles/Layout'

storiesOf('Styles/Typography', module)
    .add('Fonts', () => {
        const Font = styled(({ className, fontFamily }) => (
            <p className={className}>{fontFamily}</p>
        ))(({ fontFamily, fontWeight }) => ({
            fontFamily,
            fontWeight,
            margin: `0 0 ${calcSpace(2)} 0`
        }))

        return (
            <Styleguide>
                <Styleguide.Title>fonts</Styleguide.Title>
                <Styleguide.DefinitionList>
                    <Styleguide.DefinitionTerm>
                        <Font
                            fontFamily={C.HEADING_FONT}
                            fontWeight={C.FONT_WEIGHT_REGULAR}
                        />
                        <Font
                            fontFamily={C.HEADING_FONT}
                            fontWeight={C.FONT_WEIGHT_BOLD}
                        />
                    </Styleguide.DefinitionTerm>
                    <Styleguide.DefinitionDescription>
                        Heading Font:
                        {C.HEADING_FONT}
                        <br />
                        Font Weights: {C.FONT_WEIGHT_REGULAR},{' '}
                        {C.FONT_WEIGHT_BOLD}
                    </Styleguide.DefinitionDescription>
                    <Styleguide.DefinitionTerm>
                        <Font
                            fontFamily={C.TEXT_FONT}
                            fontWeight={C.FONT_WEIGHT_REGULAR}
                        />
                        <Font
                            fontFamily={C.TEXT_FONT}
                            fontWeight={C.FONT_WEIGHT_BOLD}
                        />
                    </Styleguide.DefinitionTerm>
                    <Styleguide.DefinitionDescription>
                        Text Font:
                        {C.TEXT_FONT}
                        <br />
                        Font Weights: {C.FONT_WEIGHT_REGULAR},{' '}
                        {C.FONT_WEIGHT_BOLD}
                    </Styleguide.DefinitionDescription>
                </Styleguide.DefinitionList>
            </Styleguide>
        )
    })
    .add('Sizes', () => {
        const array = Array(7)
            .fill()
            .map((_, i) => i + 1)

        const Factor = styled(({ className, factor }) => (
            <p className={className}>Size factor of {factor}.</p>
        ))(props => getFontScale(props.factor), {
            margin: `0 0 ${calcSpace(2)} 0`
        })

        return (
            <Styleguide>
                <Styleguide.Title>sizes</Styleguide.Title>
                <Styleguide.DefinitionList>
                    {array.map(factor => (
                        <React.Fragment key={factor}>
                            <Styleguide.DefinitionTerm>
                                <Factor factor={factor} />
                            </Styleguide.DefinitionTerm>
                            <Styleguide.DefinitionDescription>
                                {JSON.stringify(
                                    getFontScale(factor),
                                    null,
                                    '\n'
                                )}
                            </Styleguide.DefinitionDescription>
                        </React.Fragment>
                    ))}
                </Styleguide.DefinitionList>
            </Styleguide>
        )
    })
    .add('Headings', () => {
        const Title = styled.h1(Typography.title)
        const Heading = styled.h1(Typography.heading)
        const Subheading = styled.h1(Typography.subheading)

        return (
            <Styleguide>
                <Styleguide.Title>headings typography</Styleguide.Title>
                <Title>Title</Title>
                <Heading>Title</Heading>
                <Subheading>Title</Subheading>
            </Styleguide>
        )
    })
    .add('Body', () => {
        const Paragraph = styled.p(Typography.paragraph)
        const Caption = styled.p(Typography.caption)

        return (
            <Styleguide>
                <Styleguide.Title>body typography</Styleguide.Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet, ea nominati salutatus ius, vix
                    cu ubique corrumpit concludaturque. Ne tollit mentitum
                    invenire pro, in sit etiam essent euismod, propriae oporteat
                    vituperatoribus mei in. Sit in solet dolore dissentiunt,
                    sumo reque appareat ne eos. Te utamur tibique petentium eos,
                    vis in fabulas disputationi, mea quis natum lucilius an. Eu
                    sit dicit ponderum, vel dico melius vivendum ex, vel amet
                    numquam ut. Cu nibh rebum persecuti vis, laoreet instructior
                    vim ut. Ei libris theophrastus sit.
                </Paragraph>
                <Caption>
                    Lorem ipsum dolor sit amet, ea nominati salutatus ius, vix
                    cu ubique corrumpit concludaturque. Ne tollit mentitum
                    invenire pro, in sit etiam essent euismod, propriae oporteat
                    vituperatoribus mei in. Sit in solet dolore dissentiunt,
                    sumo reque appareat ne eos. Te utamur tibique petentium eos,
                    vis in fabulas disputationi, mea quis natum lucilius an. Eu
                    sit dicit ponderum, vel dico melius vivendum ex, vel amet
                    numquam ut. Cu nibh rebum persecuti vis, laoreet instructior
                    vim ut. Ei libris theophrastus sit.
                </Caption>
            </Styleguide>
        )
    })
