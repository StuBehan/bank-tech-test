class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
    this.balance = 0;
  }

  transaction = (amount, type) => {
    let credit = ''
    let debit = ''

    if (type === 'credit') {
      credit = this.creditTrans(amount)
    } else if (type === 'debit') {
      debit = this.debitTrans(amount)
    } else {
      console.log('incorrect transaction type')
    }

    this.storeTransaction(credit, debit)
  }

  creditTrans = (amount) => {
    this.balance += amount;
    return amount.toFixed(2);
  }

  debitTrans = (amount) => {
    this.balance -= amount;
    return amount.toFixed(2);
  }

  storeTransaction = (credit, debit) => {
    this.accountHistory.push({"date": this.todayDate(),
                              "credit": credit, 
                              "debit": debit,
                              "balance": this.balance.toFixed(2)});
  }

  todayDate = () => {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    today = today.split('/').reverse().join('/');
    return today;
  }

  printStatement = () => {
    // console.table(this.accountHistory)
    console.log('date || credit || debit || balance')
    this.accountHistory.map(trans => {
      const { date, credit, debit, balance } = trans;
      console.log(`${date} || ${credit} || ${debit} || ${balance}`);
    })
  }
}
