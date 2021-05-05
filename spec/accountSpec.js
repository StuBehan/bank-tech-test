describe('Account', () => {
  
  let account;

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    account = new Account('Deborah Slack');
  })

  describe('upon creation', () => {
    it('has a name associated with the account', () => {
      expect(account.name).toBe('Deborah Slack');
    })

    it('has an array called accountHistory', () =>{
      expect(account._accountHistory).toBeInstanceOf(Array);
    })
  })

  describe('Credit', () => {
    it('takes an amount and adds it to the account balance', () => {
      account.credit(500);
      expect(account._accountHistory[0].balance).toEqual(500);
    })
  })

  describe('Debit', () => {
    it('takes an amount and deducts it from the account balance', () => {
      account.debit(500);
      expect(account._accountHistory[0].balance).toEqual(-500)
    })
  })
  
  describe('GetBalance', () => {
    it('returns the balance of the account', () => {
      account.credit(500)
      expect(account.getBalance()).toEqual(500)
    })
  })

  describe('GetStatement', () => {
    it('shows a statement in the console', () => {
      spyOn(console, 'log');
      account.credit(500);
      account.debit(250);
      account.getStatement();
      expect(console.log).toHaveBeenCalledTimes(3);
    })
  })
})