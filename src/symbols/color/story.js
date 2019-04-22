import React from 'react'
import { storiesOf } from '@storybook/react'
import Styleguide from 'Utilities/styleguide'
import notes from './notes.md'

import S from 'Symbols'

storiesOf('Symbols/Colors', module)
    .add(
        'Theme Colors',
        () => (
            <Styleguide>
                <Styleguide.Title>Theme Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Styleguide.Swatches scheme={S.COLOR_THEME} />
                </Styleguide.Grid>
            </Styleguide>
        ),
        { notes }
    )
    .add(
        'UI Colors',
        () => (
            <Styleguide>
                <Styleguide.Title>UI Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Styleguide.Swatches scheme={S.COLOR_UI} />
                </Styleguide.Grid>
            </Styleguide>
        ),
        { notes }
    )
    .add(
        'Grey Colors',
        () => {
            return (
                <Styleguide>
                    <Styleguide.Title>Grey Colors</Styleguide.Title>
                    <Styleguide.Grid>
                        <Styleguide.Swatches scheme={S.COLOR_GREYS} />
                    </Styleguide.Grid>
                </Styleguide>
            )
        },
        { notes }
    )
