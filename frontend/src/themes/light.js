import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const light = createMuiTheme({
  palette: {
    primary: {
      light: '#5c6b7d',
      main: '#34465d',
      dark: '#243141',
      contrastText: '#fff',
    },
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
    text: {
      secondary: '#fff',
    },
  },
  overrides: {
    Pagination: {
      activeButton: {
        color: pink[500],
      },
    },
    MuiCardHeader: {
      root: {
        backgroundColor: 'rgb(248, 249, 252)',
        borderBottom: '1px solid rgb(227, 230, 240)',
        paddingTop: 8,
        paddingBottom: 8,
      },
      title: {
        color: '#34465d',
        fontSize: 16,
        fontWeight: 'bold',
      },
      action: {
        marginTop: -4,
      },
    },
    MuiTableRow: {
      root: {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgb(244, 244, 244)',
        },
      },
    },
    TableSelectRow: {
      selected: {
        '&:hover': {
          backgroundColor: 'rgba(92, 107, 125, .8)',
        },
        backgroundColor: 'rgba(92, 107, 125, .8)',
      },
    },
    MuiSkeleton: {
      text: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: 'darkblue',
      },
    },
  },
});

export default light;
