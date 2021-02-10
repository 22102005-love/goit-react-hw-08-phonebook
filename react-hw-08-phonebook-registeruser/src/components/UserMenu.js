import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/author/selectors';
import authOperations from '../redux/author/author-operations';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div style={styles.container}>
      <div style={styles.name}>Добро пожаловать, {name}</div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch(authOperations.logout())}
      >
        Выйти
      </Button>
    </div>
  );
}
