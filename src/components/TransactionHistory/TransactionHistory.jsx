import PropTypes from 'prop-types';
import {
  Table,
  TitleEl,
  StatisticEl,
  Row,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(({ id, type, amount, currency }) => {
    return (
      <Row key={id}>
        <StatisticEl>{type}</StatisticEl>
        <StatisticEl>{amount}</StatisticEl>
        <StatisticEl>{currency}</StatisticEl>
      </Row>
    );
  });
  return (
    <Table>
      <thead>
        <Row>
          <TitleEl>Type</TitleEl>
          <TitleEl>Amount</TitleEl>
          <TitleEl>Currency</TitleEl>
        </Row>
      </thead>

      <tbody>{transactions}</tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
