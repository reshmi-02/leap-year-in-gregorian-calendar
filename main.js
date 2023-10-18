
var year=parseInt(prompt("Enter the year"));
document.write(`Given year is ${year} <br><br>`);

if((year%4==0) && (year%100 !=0) || (year%400==0)){
	document.write(`${year} is a leap year`)
}
else{
	document.write(`${year} is not a leap year`)
}