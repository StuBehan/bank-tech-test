// eslint-disable-next-line no-unused-vars
class BankInterface {
  constructor(){
    this.accounts = [];
  }

  createAccount = (name) => {
    // eslint-disable-next-line no-undef
    let account = new Account(name);
    this.accounts.push(account)
  }

  accessAccount = (name) => {
    const account = this.accounts.find(account => account.name === name);
    return account
  }
}