import github from "@theme-ui/prism/presets/github"

export default {
  colors: {
    text: "#150402",
    background: "#fff",
    primary: "#6b70b2",
    secondary: "#30c",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  sizes: {
    container: 1024
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [4, 5, 6]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    },
    footer: {
      color: "#555555",
      textTransform: "monospace",
      letterSpacing: "0.1em"
    }
  },
  variants: {
    link: {
      color: "primary"
    },
    nav: {
      fontSize: 2,
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary"
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    code: {
      ...github,
      backgroundColor: "#f5f5f5"
    },
    pre: {
      ...github
    }
  }
}
