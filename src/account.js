class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
    this.balance = 0;
  }

  transaction = (amount, type) => {
    let credit = false;
    let debit = false;
    if (type === 'credit') {
      this.balance += amount;
      credit = true;
    } 
    
    if (type === 'debit') {
      this.balance -= amount;
      debit = true;
    }

    this.accountHistory.push({"credit": credit, 
                              "debit": debit,
                              "amount": amount, 
                              "balance": this.balance});
  }


  todayDate = () => {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    today = today.split('/').reverse().join('/');
    return today;
  }
}
