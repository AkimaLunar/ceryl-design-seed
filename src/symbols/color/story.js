import React from 'react'
import { storiesOf } from '@storybook/react'
import Styleguide from 'Utilities/styleguide'
import notes from './notes.md'

import S from 'Symbols'

storiesOf('Symbols/Colors', module)
    .add(
        'Theme Colors',
        () => (
            <>
                <Styleguide.Title>Theme Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Styleguide.Swatches
                        property="backgroundColor"
                        scheme={S.COLOR_THEME}
                    />
                </Styleguide.Grid>
            </>
        ),
        { notes }
    )
    .add(
        'UI Colors',
        () => (
            <>
                <Styleguide.Title>UI Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Styleguide.Swatches
                        property="backgroundColor"
                        scheme={S.COLOR_UI}
                    />
                </Styleguide.Grid>
            </>
        ),
        { notes }
    )
    .add(
        'Grey Colors',
        () => (
            <>
                <Styleguide.Title>Grey Colors</Styleguide.Title>
                <Styleguide.Grid>
                    <Styleguide.Swatches
                        property="backgroundColor"
                        scheme={S.COLOR_GREYS}
                    />
                </Styleguide.Grid>
            </>
        ),
        { notes }
    )
