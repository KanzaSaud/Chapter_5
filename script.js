//Question 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of "+num1+ " and "+ num2+ " is "+sum+"<br>");
document.write("<br>");

//Question 2
var sub = num1 - num2;
document.write("Subtraction of "+num1+ " and "+ num2+ " is "+sub+"<br>");
var mul = num1 * num2;
document.write("Product of "+num1+ " and "+ num2+ " is "+mul+"<br>");
var div = num1 / num2;
document.write("Division of "+num1+ " by "+ num2+ " is "+div+"<br>");
var mod = num1 % num2;
document.write("Modulus of "+num1+ " and "+ num2+ " is "+mod+"<br>");
document.write("<br>");


//Question 3
var number;
document.write("Value after variable declaration is: "+number+"<br>");
number = 5;
document.write("Initial value: "+number+"<br>");
number++;
document.write("Value after increment is: "+number+"<br>");
number += 7;
document.write("Value after adding 7 is: "+number+"<br>");
number--;
document.write("Value after decrement is: "+number+"<br>");
document.write("The remainder after dividing the variable's value by 3 is: ");
number = number%3;
document.write(+number+"<br>");
document.write("<br>");


//Question 4
var ticketPrice= 600;
var quantity = 5;
var totalPrice = ticketPrice * quantity;
document.write("Total cost to buy "+quantity+" tickets to a movie is "+totalPrice+"PKR"+"<br>");
document.write("<br>");

//Question 5
var tableOf = 7;
var count = 1;
document.write("Table of "+ tableOf+"<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write(tableOf+" x "+ count +" = " + (tableOf*count++)+ "<br>");
document.write("<br>");

//Question 6
var celciusTemp1 = 27;
var farenheitTemp1 = (celciusTemp1 * (9/5)) +32;
document.write(celciusTemp1+"°C is "+ farenheitTemp1+"°F"+"<br>");
var farenheitTemp2 = 105;
var celciusTemp2 = (farenheitTemp2 - 32) * (5/9);
document.write(farenheitTemp2+"°F is "+ celciusTemp2+"°C");

//Question 7
var item1Price = 650;
var item2Price = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;
var totalCost;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is "+ item1Price+"<br>");
document.write("Quantity of item 1 is "+ quantityOfItem1+"<br>");
document.write("Price of item 2 is "+ item2Price+"<br>");
document.write("Quantity of item 2 is "+ quantityOfItem2+"<br>");
document.write("Shipping Charges "+ shippingCharges+"<br>");
document.write("<br>");

totalCost= (item1Price*quantityOfItem1)+(item2Price*quantityOfItem2)+shippingCharges;

document.write("Total cost of your order is "+ totalCost+"<br>");
document.write("<br>");

//Question 8
var totalMarks = 980;
var marksObtained = 804;

document.write("<h1>Marks Sheet</h1>");

var percentage = (marksObtained/totalMarks)*100;

document.write("Total marks: "+ totalMarks+"<br>");
document.write("Marks obtained: "+ marksObtained+"<br>");
document.write("Percentage: "+ percentage+"%<br>");
document.write("<br>");

//Question 9
var usd = 10;
var usdToPkr = 104.8;
var sar = 25;
var sarToPkr = 28;
document.write("<h1>Currency in PKR</h1>");
var totalCurrency = (usd*usdToPkr)+(sar*sarToPkr);
document.write("Total Currency in PKR: "+totalCurrency+"<br>");
document.write("<br>");


//Question 10
var myNumber = 18;
var myCalculation = (((myNumber+5)*10)/2);
document.write("The number I have chosen is: "+myNumber+"<br>");
document.write("After performing calculations, the result is: "+myCalculation);
document.write("<br>");

//Question 11
var currentYear = 2024;
var birthYear = 1993;
var difference = 2024 - 1993;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth Year: "+ birthYear+"<br>");
document.write("Your Age is: "+difference+ " (if your birthday has passed or it is your birthday) or <br>");
difference--;
document.write("Your Age is: "+difference+ " (if your birthday has not arrived yet) <br>");
document.write("<br>");

//Question 12
var radius = 20;
var constantPi = 3.142;
var circumference = 2*constantPi*radius;
var area = constantPi*(radius*radius);
//var circumference = 2*Math.PI*radius;
//var area = Math.PI*(radius*radius);

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: "+radius+"<br>");
document.write("The circumference is: "+ circumference+"<br>");
document.write("The area is: "+ area+"<br>");
document.write("<br>");

//Question 13
var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var daysInAYear= 365;
var lifetimeSupply = (maxAge-currentAge) * daysInAYear * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: "+snack+"<br>");
document.write("Current age: "+currentAge+"<br>");
document.write("Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+amountPerDay+"<br>");
document.write(lifetimeSupply+" was needed to last until the old age of "+maxAge+"<br>");
