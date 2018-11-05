import React from 'react'
import { storiesOf } from '@storybook/react'
import Styleguide from 'Utilities/Styleguide'

storiesOf('Global/Typography', module)
    .add('h1-h6', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                h1
            </Styleguide.Caption>
            <h1>Heading 1</h1>
            <Styleguide.Caption mt2 mb1>
                h2
            </Styleguide.Caption>
            <h2>Heading 2</h2>
            <Styleguide.Caption mt2 mb1>
                h3
            </Styleguide.Caption>
            <h3>Heading 3</h3>
            <Styleguide.Caption mt2 mb1>
                h4
            </Styleguide.Caption>
            <h4>Heading 4</h4>
            <Styleguide.Caption mt2 mb1>
                h5
            </Styleguide.Caption>
            <h5>Heading 5</h5>
            <Styleguide.Caption mt2 mb1>
                h6
            </Styleguide.Caption>
            <h6>Heading 6</h6>
        </Styleguide>
    ))
    .add('blockquote, cite, q', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                blockquote
            </Styleguide.Caption>
            <blockquote cite="https://www.huxley.net/bnw/four.html">
                <p>
                    Words can be like X-rays, if you use them properly – they’ll
                    go through anything. You read and you’re pierced.
                </p>
            </blockquote>
            <Styleguide.Caption mt2 mb1>
                cite
            </Styleguide.Caption>
            <cite>— Aldous Huxley, Brave New World</cite>
            <Styleguide.Caption mt2 mb1>
                q
            </Styleguide.Caption>
            <p>
                <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
                    I’m sorry, Dave. I’m afraid I can’t do that.
                </q>
            </p>
        </Styleguide>
    ))
    .add('dl, dd, dt', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                dl, dd, dt
            </Styleguide.Caption>
            <dl>
                <dt>HTML</dt>
                <dd>
                    HyperText Markup Language describes the structure of the
                    page and its contents.
                </dd>
                <dt>CSS</dt>
                <dd>
                    Cascading Style Sheets describes how a site looks and even
                    to some extent how it responds to certain events.
                </dd>
                <dt>JavaScript</dt>
                <dd>
                    JavaScript is the programming language used to define the
                    logic and function of a site beyond simple look and feel.
                    Any computation or “thinking” is done using JavaScript.
                </dd>
            </dl>
        </Styleguide>
    ))
    .add('img, figure, figcaption', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                img, figure, figcaption
            </Styleguide.Caption>
            <figure>
                <img src="https://source.unsplash.com/random" alt="Tree frog" />
                <figcaption>
                    Simple embedding for{' '}
                    <a href="https://unsplash.com">Unsplash</a> photos. For a
                    more advanced integration, see{' '}
                    <a href="https://unsplash.com/developers">Unsplash API</a>.
                </figcaption>
            </figure>
        </Styleguide>
    ))
    .add('hr', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                hr
            </Styleguide.Caption>
            <hr />
        </Styleguide>
    ))
    .add('ul, ol, li', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                ul, li
            </Styleguide.Caption>
            <ul>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
            </ul>
            <Styleguide.Caption mt2 mb1>
                ol, li
            </Styleguide.Caption>
            <ol>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
            </ol>
        </Styleguide>
    ))
    .add('p', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                p
            </Styleguide.Caption>
            <p>
                Lorem ipsum dolor amet viral blue bottle master cleanse, four
                loko knausgaard twee la croix. Hammock green juice you probably
                haven’t heard of them banjo fixie. Offal raw denim squid flannel
                poke, kogi fam tofu actually. Offal selfies thundercats
                gochujang raclette cloud bread, raw denim locavore. Humblebrag
                90’s pabst keffiyeh narwhal tousled. Cliche aesthetic artisan
                tacos mlkshk, sustainable freegan mixtape tattooed whatever.
                Church-key iceland tousled gentrify crucifix la croix, venmo
                distillery.
            </p>
            <p>
                Man braid taiyaki vaporware, squid tilde hot chicken cronut
                hexagon next level photo booth fingerstache sustainable edison
                bulb cornhole tacos. Keytar stumptown roof party hashtag,
                lumbersexual yuccie hexagon whatever four dollar toast 8-bit
                shabby chic DIY photo booth. Portland tilde chartreuse mustache
                air plant chia. Single-origin coffee venmo pinterest hoodie tbh
                scenester. Chia skateboard green juice kickstarter, glossier
                cardigan food truck. Ugh kickstarter XOXO dreamcatcher celiac
                iPhone small batch post-ironic migas trust fund.
            </p>
        </Styleguide>
    ))
    .add('strong, em', () => (
        <Styleguide>
            <Styleguide.Caption mt2 mb1>
                strong
            </Styleguide.Caption>
            <p>
                <strong>Viral blue bottle master cleanse</strong>
            </p>
            <Styleguide.Caption mt2 mb1>
                em
            </Styleguide.Caption>
            <p>
                <em>Man braid taiyaki vaporware</em>
            </p>
        </Styleguide>
    ))
