import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import operations from '../../redux/contacts/contacts-operations.js';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
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

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const [id, setId] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChangeForm = ({ target }) => {
    // console.log(target);
    const { name, value } = target;
    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Number':
        setPhone(value);
        break;
      default:
        return;
    }
    setId(uuidv4());
  };
  const onCheckUnique = name => {
    const existContact = contacts.find(contact => contact.name === name);
    return existContact;
  };
  const handleFormSubmite = event => {
    event.preventDefault();
    onCheckUnique(name)
      ? alert('Contact is exists')
      : dispatch(operations.addContact({ name, number }));
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Box display="flex" justifyContent="flex-start" m={1} p={1}>
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
          minLength="7"
        />
        <TextField
          id="outlined-basic"
          label="Number"
          name="Number"
          variant="outlined"
          value={number}
          onChange={handleChangeForm}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.root}
        >
          Add
        </Button>
      </form>
    </Box>
  );
}
