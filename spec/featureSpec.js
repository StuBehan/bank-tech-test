describe('Feature', () => {

  let account;

  beforeEach(() => {
    account = new Account('Deborah Slack');
  })

  it('allows the user to create an account with transactions and print the history', () => {
    spyOn(console, 'log')
    account.transaction(500.00, 'credit');
    account.transaction(500.00, 'credit');
    account.transaction(500.00, 'credit');
    account.transaction(250.00, 'debit');
    expect(account.balance).toEqual(1250.00);
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance')
    expect(console.log).toMatch(/|| 500.00 || {2}|| 500.00/)
    expect(console.log).toMatch(/|| 500.00 || {2}|| 1000.00/) 
    expect(console.log).toMatch(/|| 500.00 || {2}|| 1500.00/) 
    expect(console.log).toMatch(/|| {2}|| 250.00 || 1250.00/) 
  })
})