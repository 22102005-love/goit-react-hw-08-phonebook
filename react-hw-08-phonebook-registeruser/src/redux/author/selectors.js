const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const authSelectors = {
  getUserName,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};
export default authSelectors;
