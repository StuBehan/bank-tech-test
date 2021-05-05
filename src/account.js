class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
  }

  credit = (amount) => {
    let transaction = new Transaction(this._getStartingBalance(), amount, 'credit');
    this.accountHistory.push(transaction);
  }

  debit = (amount => {
    let transaction = new Transaction(this._getStartingBalance(), amount, 'debit');
    this.accountHistory.push(transaction);
  })

  _getStartingBalance = () => {
    if (this.accountHistory.length === 0) {
      return 0
    } else {
      this.accountHistory[this.accountHistory.length - 1]
    }
  }

  printStatement = () => {
    // console.table(this.accountHistory)
    console.log('date || credit || debit || balance')
    this.accountHistory.map(transaction => {
      const { date, credit, debit, balance } = transaction;
      console.log(`${date} || ${credit} || ${debit} || ${balance}`);
    })
  }
}
