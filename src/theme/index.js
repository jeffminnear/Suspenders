import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, yellow, red, brown } from '@material-ui/core/colors';

const Mist = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: yellow[300],
        },
        text: {
            primary: grey[50],
            secondary: grey[900],
        }
    }
})

const Crimson = createMuiTheme({
    palette: {
        primary: {
            main: red[900],
        },
        secondary: {
            main: brown[600],
        },
        text: {
            primary: grey[50],
            secondary: grey[900],
        },
    }
})

export default {
    Mist,
    Crimson,
}