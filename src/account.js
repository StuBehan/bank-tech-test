/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
  }

  credit = (amount) => {
    let transaction = new Transaction(this._getStartingBalance(), amount, 'credit');
    this.accountHistory.push(transaction);
  }

  debit = (amount) => {
    let transaction = new Transaction(this._getStartingBalance(), amount, 'debit');
    this.accountHistory.push(transaction);
  }

  _getStartingBalance = () => {
    if (this.accountHistory.length === 0) {
      return 0
    } else {
      return this.accountHistory[this.accountHistory.length - 1].balance
    }
  }

  getBalance = () => {
    return this._getStartingBalance()
  }
}
