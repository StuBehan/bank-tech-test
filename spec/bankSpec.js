describe('Bank', () => {

  let bank;

  beforeEach(() => {
    bank = new Bank;
  })

  describe('upon creation', () =>{
    it('has an array of bank accounts', () => {
      expect(bank.accounts).toBeInstanceOf(Array);
    })
  })
    
  describe('Accounts', () => {
    it('creates a new account with user input', () =>{
      bank.createAccount('Jasmine')
      expect(bank.accounts[0]).toBeInstanceOf(Account);
    })
  })


})