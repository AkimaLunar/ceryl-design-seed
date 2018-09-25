import { injectGlobal } from 'emotion'
import Colors from 'Styles/Colors'
import { BASE_SCALE } from 'Styles/Scale'
import Typography, { TEXT_FONT, calcFontSize } from 'Styles/Typography'
import { calcSpace } from 'Styles/Layout'

// Based on normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css
// Injected global styling

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-size: ${BASE_SCALE};
    font-family: ${TEXT_FONT};
    color: ${Colors.grey.dark};
  }
  
  html,
  body {
    height: 100%;
    position: relative;
    background-color: ${Colors.grey.light};
    margin: 0;
    padding: 0;
  }

  body {
    ${Typography.paragraph}
  }

  p {
    ${Typography.paragraph}
  }




h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  ${Typography.caption}
}

sub,
sup {
  font-size: ${calcFontSize(1)};
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -${calcSpace(1)};
}

sup {
  top: -${calcSpace(2)};
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  ${Typography.paragraph}
  font-family: inherit;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -0.2rem;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`
