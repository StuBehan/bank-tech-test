describe('Feature', () => {

  let account;
  let date;

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    account = new Account('Deborah Slack');
    spyOn(account, 'setDate').and.returnValue('04/05/2021')
    date = account.todayDate();
  })

  it('allows the user to create an account with transactions and print the history', () => {
    spyOn(console, 'log')
    account.credit(500.00);
    account.credit(500.00);
    account.credit(500.00);
    account.debit(250.00);
    expect(account.getBalance()).toEqual(1250.00);
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(console.log).toHaveBeenCalledWith(`${date} || 500.00 ||  || 500.00`)
    expect(console.log).toHaveBeenCalledWith(`${date} || 500.00 ||  || 1000.00`) 
    expect(console.log).toHaveBeenCalledWith(`${date} || 500.00 ||  || 1500.00`) 
    expect(console.log).toHaveBeenCalledWith(`${date} ||  || 250.00 || 1250.00`)
  })
})