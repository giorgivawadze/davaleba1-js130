// Task 1
let person1 = {
    name : 'Anna',
    age : 28,
}
let person2 = {
    name: 'Levani',
    age : 21,
}
let differenceBetweenAge = 'ანა ლევანზე 7 წლით უფროსია'
if (person1.age - person2.age == 7) {
    console.log(differenceBetweenAge);
}
// Task 2
let namesArray = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
console.log(namesArray[4]);

// Task3 
// Part 1
let student = {
    name : 'Elliot',
    lastName : 'Alderson', 
    age : 28,
    subjectsArray : ['Pc, leptop, phone, tab, usb, keyboard'],
    roommate : {
       name : 'Doggo',
       age: 2,
    }
}
// Part 2
for (i=0; i <student.subjectsArray.length; i++) {
    console.log(student.subjectsArray[i]);
}
let fullStudentName =` ${student.name} ${student.lastName} ` 

console.log(fullStudentName);

let result = ` ${fullStudentName} is ${student.age} ${student.roommate.age} `
console.log(result);

// Task 4
let foodArray = ["Banana", "Orange", "Apple", "Mango",2,12]
let i = 0
while (i<foodArray.length) {
   let item = foodArray[i];
   if (typeof item === 'string' && item.includes('1')) {
    console.log(item);
  }
  i++;
     
}
// Task 5

let array = [12,23,43,11,9,2,121,90];

for (let i = 0; i < array.length; i++) {
  let element = array[i];
  if (element > 31 && element % 2 === 0) {
    console.log('Element is greater than provided value and is EVEN');
  } else if (element < 31 && element % 2 !== 0) {
    console.log('Element is less than provided value and is ODD');
  }
}
