// eslint-disable-next-line no-unused-vars
class Statement {
  constructor(accountHistory) {
    this.statement = accountHistory;
  }

  printStatement = () => {
    let printableStatement = ['date || credit || debit || balance'];
    this.statement.reverse().map(transaction => {
      const { date, credit, debit, balance } = transaction;
      printableStatement.push(`${date} || ${this._checkValue(credit)} || ${this._checkValue(debit)} || ${balance.toFixed(2)}`);
    })
    console.log(printableStatement.join('\n'));
  }

  _checkValue = (value) => {
    return value > 0 ? value.toFixed(2) : '';
  }
}