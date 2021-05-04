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

    it('decreases the balance of the account if debit', () => {
      account.transaction(500, 'credit');
      account.transaction(500, 'debit');
      expect(account.balance).toBe(0)
    })

    it('records the details of the transaction in the accountHistory', () => {
      account.transaction(500, 'credit')
      expect(account.accountHistory[0]).toEqual({"date": jasmine.anything(),
                                                 "credit": true, 
                                                 "debit": false,
                                                 "amount": 500, 
                                                 "balance": 500})
    })
  })

  describe('TodayDate', () => {
    it('returns the date in the format dd/mm/yyyy', () => {
      expect(account.todayDate()).toMatch(/\d\d\/\d\d\/\d\d\d\d/)
    })
  }) 
})