describe('Bank', () => {

 let bank;

 beforeEach(() => {
  bank = new Bank;
 })

 it('has an array of bank accounts', () => {
   expect(bank.accounts).toBeInstanceOf(Array);
 })

})