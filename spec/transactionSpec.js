describe('Transaction', () => {
  let transaction

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    transaction = new Transaction;
  })

  describe('Transaction', () => {
    it('increases the balance following the transaction if credit', () => {
      transaction.transaction(0, 500.00, 'credit');
      expect(transaction.balance).toBe(500.00);
    })

    it('decreases the balance following the transaction if debit', () => {
      transaction.transaction(0, 500.00, 'debit');
      expect(transaction.balance).toBe(-500);
    })
  })

  describe('SetDate', () => {
    it('returns the date in the format dd/mm/yyyy', () => {
      expect(transaction.setDate()).toMatch(/\d\d\/\d\d\/\d\d\d\d/);
    })
  }) 
})