describe('Feature', () => {

  let bankInterface;
  let dateOne = new Date(2012, 0, 10, 10, 30);
  let dateTwo = new Date(2012, 0, 13, 10, 30);
  let dateThree = new Date(2012, 0, 14, 10, 30);

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    bankInterface = new BankInterface;
  })

  it('allows the user to create an account with transactions and print the history', () => {
    jasmine.getEnv().allowRespy(true);
    spyOn(console, 'log')
    bankInterface.createAccount('Deborah Slack');
    spyOn(window, 'Date').and.returnValue(dateOne)
    bankInterface.accessAccount('Deborah Slack').credit(1000.00);
    spyOn(window, 'Date').and.returnValue(dateTwo)
    bankInterface.accessAccount('Deborah Slack').credit(2000.00);
    spyOn(window, 'Date').and.returnValue(dateThree)
    bankInterface.accessAccount('Deborah Slack').debit(500.00);
    expect(bankInterface.accessAccount('Deborah Slack').getBalance()).toEqual(2500.00);
    bankInterface.accessAccount('Deborah Slack').getStatement();
    expect(console.log).toHaveBeenCalledTimes(4)
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(console.log).toHaveBeenCalledWith(`14/01/2012 ||  || 500.00 || 2500.00`)
    expect(console.log).toHaveBeenCalledWith(`13/01/2012 || 2000.00 ||  || 3000.00`) 
    expect(console.log).toHaveBeenCalledWith(`10/01/2012 || 1000.00 ||  || 1000.00`) 
  })
})