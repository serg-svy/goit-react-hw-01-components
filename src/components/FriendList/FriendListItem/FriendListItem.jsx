import {
  ListItem,
  OnlineIndecator,
  Name,
} from 'components/FriendList/FriendListItem/FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListItem>
      <OnlineIndecator
        online={isOnline.toString() === 'true'}
      ></OnlineIndecator>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
