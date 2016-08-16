import Typography from 'typography'

const options = {
  baseFontSize: '16px',
  baseLineHeight: '24px',
  bodyFontFamily: ['Avenir Next', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerFontFamily: ['Avenir Next', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 500,
  modularScales: [
    {
      scale: 'golden',
    },
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
