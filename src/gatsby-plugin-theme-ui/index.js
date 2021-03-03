export default {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body:
            'Ubuntu, sans-serif'
    },
    fontSizes: [14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#6C41DD',
        secondary: '#141c3a',
        muted: '#f6f6f6',
    },
    text: {
        heading: {
            fontFamily: 'Ubuntu, sans-serif',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
    },
    cards: {
        primary: {
            padding: 2,
            borderRadius: 4,
            background: '#fff',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            background: '#fff',
            border: '1px solid',
            borderColor: 'muted',
        },
    },
    styles: {
        root: {
            fontFamily: 'Ubuntu, sans-serif',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            variant: 'text.heading',
            fontSize: [3, 4, 5],
        },
        h2: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 2,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 1,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 0,
        },
        pre: {
            fontFamily: 'Ubuntu, sans-serif',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
    },
    buttons: {
        primary: {
            fontFamily: 'Ubuntu, sans-serif',
            color: 'primary',
            bg: 'background',
            transition: 'all 300ms ease-in-out',
            '&:hover,&:active': {
                color: 'background',
                bg: 'primary'
            }
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
        }
    },
    select: {
        fontFamily: 'Ubuntu, sans-serif'
    }
}