//Create a Person class with three attributes: name, weight, and height.
// Create a method that can calculate the BMI of a person using the formula below.
// Create an object of the class and use the function.

/*BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
 hope this is right?
 created the class and the function works.
 worried about calculations more

 */


class Person
{
    constructor(name,weight,height)
    {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateBMI()
    {  //BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

        console.log((this.weight / (this.height * this.height) ) * 703);
    }


}


var thomas = new Person("thomas", 120 , 83);

thomas.calculateBMI()