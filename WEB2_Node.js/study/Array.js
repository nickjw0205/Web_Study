//CRUD

var arr = ['A', 'B', 'C', 'D'];
console.log(arr[1]);
arr[2] = '3';
console.log(arr.length);
arr.push('E');
console.log(arr);


var number = [1,400,21,13,5432];
var i = 0;
var  sum = 0;
while(i < number.length){
	i = i+1;
	sum = sum + number[i];
}