import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import AuthorNavigation from './AuthorNavigation';
import UserMenu from './UserMenu';
import authSelectors from '../redux/author/selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};
export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthorNavigation />}
    </header>
  );
}
