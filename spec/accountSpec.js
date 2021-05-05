describe('Account', () => {
  
  let account;

  beforeEach(() => {
    account = new Account('Deborah Slack');
  })

  describe('upon creation', () => {
    it('has a name associated with the account', () => {
      expect(account.name).toBe('Deborah Slack');
    })

    it('has an array called accountHistory', () =>{
      expect(account.accountHistory).toBeInstanceOf(Array);
    })
  })

  describe('PrintStatement', () => {
    it('returns a console log of the objects in accountHistory', () => {
      spyOn(console, 'log');
      account.transaction(0, 500.00, 'credit');
      account.printStatement();
      expect(console.log).toHaveBeenCalledTimes(2);
    })
  })
})