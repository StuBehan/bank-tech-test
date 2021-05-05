/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Account {
  constructor(name) {
    this.name = name
    this._accountHistory = [];
  }

  credit = (amount) => {
    let transaction = new Transaction(this._startingBalance(), amount, 'credit');
    this._accountHistory.push(transaction);
  }

  debit = (amount) => {
    let transaction = new Transaction(this._startingBalance(), amount, 'debit');
    this._accountHistory.push(transaction);
  }

  _startingBalance = () => {
    if (this._accountHistory.length === 0) {
      return 0
    } else {
      return this._accountHistory[this._accountHistory.length - 1].balance
    }
  }

  getBalance = () => {
    return this._startingBalance()
  }

  getStatement = () => {
    let statement = new Statement(this._accountHistory);
    statement.printStatement();
  }
}
