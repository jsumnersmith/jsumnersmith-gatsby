const blue = `mediumblue`
const gray = `#222`
const grayLight = `#ccc`
const white = `#fff`
const yellow = `#FABC60`

export default {
  colors: {
    text: gray,
    background: white,
    primary: blue,
    secondary: yellow,
    muted: grayLight,
    highlight: yellow,
    heading: gray,
    modes: {
      dark: {
        text: white,
        background: gray,
        primary: yellow,
        secondary: blue,
        muted: grayLight,
        highlight: blue,
        heading: white,
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.4,
    heading: 1.125,
  },
  fontSizes: [16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  text: {
    default: {
      mb: 2
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
      mb: 4
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    p: {
      mb: 3
    }
  }
}