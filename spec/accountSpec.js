describe('Account', () => {
  
  let account;

  beforeEach(() => {
    account = new Account('Deborah');
  })

  describe('upon creation', () => {
    it('has a name associated with the account', () => {
      expect(account.name).toBe('Deborah');
    })

    it('has an array called accountHistory', () =>{
      expect(account.accountHistory).toBeInstanceOf(Array);
    })

    it('has a default balance of 0', () => {
      expect(account.balance).toBe(0)
    })
  })

  describe('Transaction', () => {
    it('increases the balance of the account if credit', () => {
      account.transaction(500, 'credit');
      expect(account.balance).toBe(500);
    })
  })

})