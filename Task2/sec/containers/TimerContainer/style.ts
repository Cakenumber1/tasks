import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  timer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '300px',
    height: '300px',
    background: 'pink',
    padding: '30px',
  },
  timeBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
