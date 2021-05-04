class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
    this.balance = 0;
  }

  transaction = (amount, type) => {
    let credit
    let debit

    if (type === 'credit') {
      this.balance += amount;
      credit = amount;
    } 
    
    if (type === 'debit') {
      this.balance -= amount;
      debit = amount;
    }

    this.accountHistory.push({"date": this.todayDate(),
                              "credit": credit, 
                              "debit": debit,
                              "balance": this.balance});
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
