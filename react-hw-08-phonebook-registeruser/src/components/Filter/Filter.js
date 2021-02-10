import * as actions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-start" m={1} p={1}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          onChange={({ target }) =>
            dispatch(actions.filterChange(target.value))
          }
          value={filter}
          variant="outlined"
          label="Find contact by name"
          name="filter"
        />
      </form>
    </Box>
  );
};
export default Filter;
