import { User } from '@apoloplay/definitions';
import { FC } from 'react';
import './welcomeUser.css';

interface UserProps {
  user: User;
}

export const WelcomeUser: FC<UserProps> = ({ user }) => {
  return (
    <div className="user-info">
      <p className="greetings">{user.name}</p>
      <p className="extra-info">email: {user.email}</p>
    </div>
  );
};

export default WelcomeUser;
