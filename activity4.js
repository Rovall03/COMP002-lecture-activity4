let numbers = [1,2,3,4,5];

console.log(numbers[0]);
console.log(numbers[4]);


//part 2
for(let i=0; i<numbers.length; i++){
    console.log(`numbers[${i}]: ${numbers[i]}`);
}
// part3
numbers.push(6,7,8,9,10);
// new array is 1,2,3,4,5,6,7,8,9,10. 6-10 was added to the end
console.log(numbers);


//pop 3.2
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
////// contents after x3 pop is 1,2,3,4,5,6,7

///part4

let mystring = "hello";
console.log(mystring.length);