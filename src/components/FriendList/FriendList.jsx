import PropTypes from 'prop-types';
import { List } from 'components/FriendList/FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const friendsEls = friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    );
  });
  return <List>{friendsEls}</List>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
