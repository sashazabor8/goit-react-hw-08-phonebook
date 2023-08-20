const getIsloggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getIsRefreshingUser = state => state.auth.isRefreshingCurrentUser;

const authSelectors = {
  getIsloggedIn,
  getUser,
  getUserName,
  getUserEmail,
  getIsRefreshingUser,
};

export default authSelectors;
