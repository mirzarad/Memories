import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  formTitle: {
    color: '#d1e4ee',
    background: '-webkit-linear-gradient(#66b3ff, #0080ff)',
    'font-family': 'Pacifico, cursive',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  paper: {
    padding: theme.spacing(2),
    background: '-webkit-linear-gradient(#fbfcfe, #d6d6d6)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    background: '-webkit-linear-gradient(#66b3ff, #0080ff)',
    'font-family': 'Pacifico, cursive',
  },
  buttonClear: {
    marginBottom: 10,
    background: '-webkit-linear-gradient(#f77777, #f71d00)',
    'font-family': 'Pacifico, cursive',
  }
}));