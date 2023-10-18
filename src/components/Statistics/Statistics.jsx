import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatisticList,
  ListEl,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title = false, stats }) => {
  const statsEls = stats.map(stat => {
    return (
      <ListEl
        key={stat.id}
        backgroundColor={Math.floor(Math.random() * 16777215).toString(16)}
      >
        <Label>{stat.label}</Label>
        <Percentage>{stat.percentage}%</Percentage>
      </ListEl>
    );
  });
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticList>{statsEls}</StatisticList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
