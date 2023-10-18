import PropTypes from 'prop-types';
import {
  StatsList,
  Stat,
  Label,
  Amount,
} from 'components/Profile/Stats/Stats.styled';
export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <Stat>
        <Label>Followers</Label>
        <Amount>{followers}</Amount>
      </Stat>
      <Stat>
        <Label>Views</Label>
        <Amount>{views}</Amount>
      </Stat>
      <Stat>
        <Label>Likes</Label>
        <Amount>{likes}</Amount>
      </Stat>
    </StatsList>
  );
};

Stats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
