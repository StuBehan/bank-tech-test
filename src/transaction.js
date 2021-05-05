class Transaction {
  constructor(startingBalance, amount, type) {
    this.date = this.setDate();
    this.credit = '';
    this.debit = '';
    this.balance = 0;
    this.transaction(startingBalance, amount, type);
  }

  transaction = (startingBalance, amount, type) => {
    if (type === 'credit') {
      this.credit = this.creditTransaction(startingBalance, amount)
    } 
    if (type === 'debit') {
      this.debit = this.debitTransaction(startingBalance, amount)
    }
  }

  creditTransaction = (startingBalance, amount) => {
    this.balance = startingBalance + amount;
    return amount;
  }

  debitTransaction = (startingBalance, amount) => {
    this.balance = startingBalance - amount;
    return amount;
  }

  setDate = () => {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    today = today.split('/').reverse().join('/');
    return today;
  }
}