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
      account.transaction(500.00, 'credit');
      expect(account.balance).toBe(500.00);
    })

    it('decreases the balance of the account if debit', () => {
      account.transaction(500.00, 'credit');
      account.transaction(500.00, 'debit');
      expect(account.balance).toBe(0)
    })

    it('records the details of the transaction in the accountHistory', () => {
      account.transaction(500.00, 'credit')
      expect(account.accountHistory[0]).toEqual({"date": jasmine.anything(),
                                                 "credit": 500.00, 
                                                 "debit": undefined,
                                                 "balance": 500.00})
    })
  })

  describe('TodayDate', () => {
    it('returns the date in the format dd/mm/yyyy', () => {
      expect(account.todayDate()).toMatch(/\d\d\/\d\d\/\d\d\d\d/)
    })
  }) 

  describe('PrintStatement', () => {
    it('returns a console log of the objects in accountHistory', () => {
      spyOn(console, 'log');
      account.transaction(500.00, 'credit')
      account.printStatement()
      expect(console.log).toHaveBeenCalledTimes(2)
    })
  })
})