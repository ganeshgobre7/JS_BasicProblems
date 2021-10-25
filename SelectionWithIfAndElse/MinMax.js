let number_1 = Math.floor(Math.random() * 899) + 100;
let number_2 = Math.floor(Math.random() * 899) + 100;
let number_3 = Math.floor(Math.random() * 899) + 100;
let number_4 = Math.floor(Math.random() * 899) + 100;
let number_5 = Math.floor(Math.random() * 899) + 100;
maximum=0;
minimum=0;

if(number_1 > number_2 && number_1 > number_3 && number_1> number_4 && number_1 > number_5)
maximum=number_1;
else if(number_2 > number_3 && number_2 > number_4 && number_2 >number_5)
maximum=number_2;
else if(number_3>number_4 && number_3 > number_5)
maximum=number_3;
else if(number_4>number_5)
maximum=number_4;
else
maximum=number_5;

if(number_1 < number_2 && number_1 < number_3 && number_1< number_4 && number_1 < number_5)
minimum=number_1;
else if(number_2 < number_3 && number_2 < number_4 && number_2 <number_5)
minimum=number_2;
else if(number_3<number_4 && number_3 < number_5)
minimum=number_3;
else if(number_4<number_5)
minimum=number_4;
else
minimum=number_5;

console.log("The maximum of in "+number_1+","+number_2+","+number_3+","+number_4+","+number_5+" is "+maximum);
console.log("The minimum of in "+number_1+","+number_2+","+number_3+","+number_4+","+number_5+" is "+minimum);