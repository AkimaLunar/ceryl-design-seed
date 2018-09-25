import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion'
import Styleguide from 'Utilities/styleguide'
import Typography, { calcFontSize, RHYTM, FONT_RATIO } from 'Styles/Typography'
import { calcSpace } from 'Styles/Layout'
import { REM } from 'Styles/Scale'

storiesOf('Styles/Typography', module)
    .add('Sizes', () => {
        const array = Array(6)
            .fill()
            .map((_, i) => i + 1)

        const Factor = styled(({ className, factor }) => (
            <p className={className}>Size factor of {factor}.</p>
        ))(props => calcFontSize(props.factor), {
            margin: `0 0 ${calcSpace(2)} 0`
        })

        return (
            <Styleguide>
                <Styleguide.Title>Sizes</Styleguide.Title>
                <Styleguide.DefinitionList>
                    {array.map(factor => (
                        <React.Fragment key={factor}>
                            <Styleguide.DefinitionTerm>
                                <Factor factor={factor} />
                            </Styleguide.DefinitionTerm>
                            <Styleguide.DefinitionDescription>
                                Font Size: `
                                {((factor + 4) * RHYTM * FONT_RATIO) / REM}
                                `rem <br />
                                Line Height: `{((factor + 4) * RHYTM) / REM}
                                rem`
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
                <Styleguide.Title>Headings Typography</Styleguide.Title>
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
                <Styleguide.Title>Body Typography</Styleguide.Title>
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
