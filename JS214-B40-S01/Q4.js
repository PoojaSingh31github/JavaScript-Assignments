const highestPaid = (employees) => {
  const highest = employees.reduce((high, employee) =>
    employee.salary > high.salary ? employee : high
  );
  return highest;
};

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }


// --------------------------------------------------------------------------------------------------------------------------------------

const destructuringToSwap = (employees) => {
    [employees[0], employees[2]] = [employees[2], employees[0]];
    return employees
    
}

console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]


// --------------------------------------------------------------------------------------------------------------------------------------
