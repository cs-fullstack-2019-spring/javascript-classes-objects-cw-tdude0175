//Create a Bank class with the the name and balance attributes.
// Afterwards, create an object of the class and follow the instructions below:
//
// Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts


/*
class easy enough
create two accounts easy enough just use var
IDE wants you to assign a task to the end of the function
with "withdraw" using return to define ending even though it's not necessary
other languages might REQUIRE it, be careful
bring your glasses so you can practice proper posture.
YOU HAVE TO TELL THE FUNCTION TO SAVE THE NEW AMOUNT TO THE OBJECT ELEMENT
is there a way to use the amount removed.
a different function called transfer, you would have to define this.balance = this.balance - amountTransfered
then using otherAccount this.balance = this.balance+ amountTransfered
 */




class bank
{
    constructor(name,balance)
    {
        this.name = name;
        this.balance = balance
    }

    withdraw(amount)
    {
        this.balance =(this.balance - amount);
    }
    deposit(amount)
    {
        this.balance =(this.balance + amount);
    }
    transfer(amountTrasfered,another account )
    {
        
    }

}

var MattsAccount = new bank("Matt",1000);
var MyAccount = new bank("Thomas" , 0);


MattsAccount.withdraw(100);

MyAccount.deposit(100);

console.log(MattsAccount.balance);
console.log(MyAccount.balance);
