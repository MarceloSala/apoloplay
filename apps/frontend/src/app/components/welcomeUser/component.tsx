import { User } from '@apoloplay/definitions';
import { FC } from 'react';

interface UserProps {
  user: User;
}

export const WelcomeUser: FC<UserProps> = ({ user }) => {
  return <p className="greetings">{user.name}</p>;
};

export default WelcomeUser;
