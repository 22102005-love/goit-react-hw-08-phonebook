import s from './ContactList.module.css';
import { useEffect } from 'react';
import operations from '../../redux/contacts/contacts-operations.js';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onRemove = id => dispatch(operations.removeContact(id));
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, []);
  if (contacts.length === 0) return null;
  return (
    <Box display="flex" justifyContent="flex-start" m={1} p={1}>
      <ol className={s.listContact}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => onRemove(contact.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ol>
    </Box>
  );
};
export default ContactList;
