describe('BankInterface', () => {
  let bankInterface;

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    bankInterface = new BankInterface;
  })

  describe('CreateAccount', () => {
    it('creates a new account and adds it to the accounts array', () => {
      bankInterface.createAccount('Deborah Slack');
      expect(bankInterface.accounts.length).toEqual(1);
    })
  })
})