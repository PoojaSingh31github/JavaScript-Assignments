const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
 
const countCalculation = (school) => {
    const mathTeachersCount = school.departments.math.teachers
    const historyTeachersCount = school.departments.history.teachers
    const mathStudentsCount = school.departments.math.students
    const historyStudentsCount = school.departments.history.students;
    return {mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount}
}

console.log(countCalculation(school))
//  Output: {
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }

// --------------------------------------------------------------------------------------------------------------------------------------
const findTopStudent = (school, subject) => {
}

console.log(findTopStudent(school, 'math'))
// {
//   name: 'Alice',
//   className: 'Grade 5',
//   scores: { math: 95, science: 88, history: 85, english: 92 }
// }


// --------------------------------------------------------------------------------------------------------------------------------------

console.log(addNewDept(school, newDepartment));

// Output = {
//   name: "XYZ School",
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 },
//   },
//   courses: ["math", "science", "history", "english"],
//   students: [
//     { name: "Alice", className: "Grade 5", scores: [Object] },
//     { name: "Bob", className: "Grade 4", scores: [Object] },
//     { name: "Charlie", className: "Grade 5", scores: [Object] },
//     { name: "Diana", className: "Grade 4", scores: [Object] },
//   ],
// };


// --------------------------------------------------------------------------------------------------------------------------------------

console.log(highestStudentCountDepartment(school));//math

// --------------------------------------------------------------------------------------------------------------------------------------

console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"


// --------------------------------------------------------------------------------------------------------------------------------------
