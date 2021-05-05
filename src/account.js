class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
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
