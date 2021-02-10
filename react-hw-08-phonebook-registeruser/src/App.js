import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter.js';
import AppBar from './components/AppBar';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import authorOperations from './redux/author/author-operations';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from './redux/author/selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authorOperations.fetchCurrentUser());
  }, [dispatch]);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />
        <Switch>
          <PublicRoute path="/register" restricted>
            <RegisterForm />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginForm />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <div>
              <h2 style={{ fontSize: 40, marginLeft: 30 }}>Form Contact</h2>
              <ContactForm />
              <h2 style={{ fontSize: 40, marginLeft: 30 }}>Contacts</h2>
              <Filter />
              <ContactList />
            </div>
          </PrivateRoute>
        </Switch>
      </div>
    )
  );
}
