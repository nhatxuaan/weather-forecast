var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

// Print the first high temperature to the console.
console.log(highTemperatures[0]);
//Print the last low temperature to the console.
console.log(lowTemperatures[lowTemperatures.length-1]);
//What is the average high temperature from the data set?
let sum=0, cnt=0;
for (h of highTemperatures){
    sum+=h;
    cnt++
}
console.log("The average high temperature: "+ (sum/cnt) );
//What is the average low temperature from the data set?
sum=0, cnt=0;
for (h of lowTemperatures){
    sum+=h;
    cnt++
}
console.log("The average low temperature: "+ (sum/cnt));