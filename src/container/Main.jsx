import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import Balance from '../components/Balance';
import AddTransactions from '../components/AddTransactions';
import { addTransaction, deleteTransaction } from '../redux/action';
import TransactionsList from '../components/TransactionLists';
import IncomeExpense from '../components/IncomeExpense';

export class Main extends Component {
  static propTypes = {
    transactions: PropTypes.array.isRequired, // Validate transactions prop
  };

  render() {
    const { transactions, addTransaction, deleteTransaction } = this.props;

    return (
          <div className="space-y-8">
            <Balance transactions={transactions} />
            <IncomeExpense transactions={transactions} />
            <TransactionsList transactions={transactions} deleteTransaction={id => deleteTransaction(id)} />
            <AddTransactions addTransaction={addTransaction} id={transactions[0] ? transactions[0].id + 1 : 1} />
          </div>
        );
      }
    }

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
