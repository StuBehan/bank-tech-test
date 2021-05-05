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

  describe('AccessAccount', () => {
    it('allows the user to access the functions of their account', () => {
      bankInterface.createAccount('Deborah Slack');
      bankInterface.accessAccount('Deborah Slack').credit(500);
      expect(bankInterface.accessAccount('Deborah Slack').getBalance()).toEqual(500);
    })
  })
})