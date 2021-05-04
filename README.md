# Bank Tech Test [![Build Status](https://travis-ci.com/StuBehan/bank-tech-test.svg?branch=main)](https://travis-ci.com/StuBehan/bank-tech-test)

## Requirements

* Interact with your code via the JavaScript console.
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## How to run

- Clone the repository
- Run `npm install`
- Run `npm test` to see tests or open the `specRunner.html`
- Open `specRunner.html` and open the console to enter commands
- Enter `let account = new Account('Jasmine')` to create an account
- Enter `account.transaction(500.00, 'credit')` to add a transaction
- Enter `account.transaction(250.00, 'debit')` to add a further transaction
- Enter `account.printStatement()` to see the printout
  
### Packages

- eslint for linting
- babel as a parser for eslint
- jasmine for a testing library
- karma as a framework for testing with chrome remotely for CI integration
- instanbul for coverage, ran inside the karma framework