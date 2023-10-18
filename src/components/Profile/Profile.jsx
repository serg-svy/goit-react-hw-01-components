import PropTypes from 'prop-types';
import { Stats } from 'components/Profile/Stats/Stats.jsx';
import {
  Wrapper,
  ProfileMainPart,
  ProfilePic,
  ProfileText,
  ProfileName,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Wrapper>
      <ProfileMainPart>
        <ProfilePic src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileMainPart>

      <Stats stats={stats} />
    </Wrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
