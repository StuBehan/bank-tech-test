describe('Account', () => {
  
  let account;

  beforeEach(() => {
    account = new Account('Deborah');
  })

  describe('upon creation', () => {
    it('has a name associated with the account', () => {
      expect(account.name).toBe('Deborah');
    })
  })

})