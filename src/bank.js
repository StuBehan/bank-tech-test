class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount = (name) => {
    let account = new Account(name);
    this.accounts.push(account);
  }

}
