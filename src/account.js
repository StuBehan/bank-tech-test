class Account {
  constructor(name) {
    this.name = name
    this.accountHistory = [];
    this.balance = 0;
  }

  transaction = (amount, type) => {
    if (type === 'credit') {
      this.balance += amount
    }
  }
}
