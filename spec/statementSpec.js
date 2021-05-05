describe('Statement', () => {
  let statement;
  let accountHistory = [
    {"date": "02/04/2021", "credit": 500, "debit": "", "balance": 500},
    {"date": "03/04/2021", "credit": "", "debit": 250, "balance": 250},
    {"date": "05/04/2021", "credit": 500, "debit": "", "balance": 750},
  ]

  beforeEach(() => {
    // eslint-disable-next-line no-undef
    statement = new Statement(accountHistory);
  })

  describe('PrintStatement', () => {
    it('prints the statement to console', () => {
      spyOn(console, 'log')
      statement.printStatement();
      expect(console.log).toHaveBeenCalledTimes(1)
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n05/04/2021 || 500.00 ||  || 750.00\n03/04/2021 ||  || 250.00 || 250.00\n02/04/2021 || 500.00 ||  || 500.00')
    })
  })
})