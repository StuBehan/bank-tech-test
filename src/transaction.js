class Transaction {
  constructor(startingBalance, amount, type) {
    this.date = this._setDate();
    this.credit = '';
    this.debit = '';
    this.balance = 0;
    this.transaction(startingBalance, amount, type);
  }

  transaction = (startingBalance, amount, type) => {
    if (type === 'credit') {
      this.credit = this._creditTransaction(startingBalance, amount)
    } 
    if (type === 'debit') {
      this.debit = this._debitTransaction(startingBalance, amount)
    }
  }

  _creditTransaction = (startingBalance, amount) => {
    this.balance = startingBalance + amount;
    return amount;
  }

  _debitTransaction = (startingBalance, amount) => {
    this.balance = startingBalance - amount;
    return amount;
  }

  _setDate = () => {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    today = today.split('/').reverse().join('/');
    return today;
  }
}