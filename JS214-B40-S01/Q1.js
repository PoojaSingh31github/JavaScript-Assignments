let combiningArrays = (fruits, vegetables) =>{
    let groceries = fruits.concat(...vegetables);
    return groceries
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]


// --------------------------------------------------------------------------------------------------------------------------------------


const cloningObjects = (person) => {
    personCopy = person 
    return personCopy
}

const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }


// --------------------------------------------------------------------------------------------------------------------------------------


const mergingObjects = (student, course) => {
    let studentWithCourse = { ...student, ...course }
    return studentWithCourse
}


const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }


// --------------------------------------------------------------------------------------------------------------------------------------


const combiningNestedArrays = (array1, array2) => {
    let combinedArray = [...array1, ...array2]
    return combinedArray
}

const array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];
console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]


// --------------------------------------------------------------------------------------------------------------------------------------

