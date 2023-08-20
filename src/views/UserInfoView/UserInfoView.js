import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

function UserInfoView() {
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div>
      <p>Ваше имя: {name}</p>
      <p>Ваше email: {email}</p>
    </div>
  );
}

export default UserInfoView;
