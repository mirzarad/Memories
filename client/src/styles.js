import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    backgroundColor:'#0f4965',
    margin: '30px 0',
    padding: '15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '-webkit-linear-gradient(#fbfcfe, #dee0e0)',
  },
  heading: {
    color: '#d1e4ee',
    background: '-webkit-linear-gradient(#66b3ff, #0080ff)',
    'font-family': 'Pacifico, cursive',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  image: {
    marginLeft: '15px',
  },
}));