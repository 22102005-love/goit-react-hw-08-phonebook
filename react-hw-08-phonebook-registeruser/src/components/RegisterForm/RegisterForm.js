import { useState } from 'react';
import operations from '../../redux/author/author-operations.js';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangeForm = ({ target }) => {
    // console.log(target);
    const { name, value } = target;
    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Email':
        setEmail(value);
        break;
      case 'Password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleFormSubmite = event => {
    event.preventDefault();
    dispatch(operations.register({ name, email, password }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <form
        className={classes.root}
        onSubmit={handleFormSubmite}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="Name"
          label="Name"
          value={name}
          onChange={handleChangeForm}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="Email"
          label="Email"
          value={email}
          onChange={handleChangeForm}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          minLength="7"
          label="Password"
          name="Password"
          variant="outlined"
          value={password}
          onChange={handleChangeForm}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.root}
        >
          Регистрация
        </Button>
      </form>
    </Box>
  );
}
