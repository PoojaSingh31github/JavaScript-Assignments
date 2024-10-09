// --------------------------------------------------------------------------------------------------------------------------------------

const employeeInformation = (employees) => {
  let secondEmployeeName = employees[1].name;
  let secondEmployeeDepartment = employees[1].department;
  return { secondEmployeeName, secondEmployeeDepartment };
};

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

// --------------------------------------------------------------------------------------------------------------------------------------

const averageSalary = (employees) => {
  const total = employees.reduce((sum, employee) => sum + employee.salary, 0);
  const avrg = total / employees.length;
  return avrg;
};

console.log(averageSalary(employees)); // Output: 60000

// --------------------------------------------------------------------------------------------------------------------------------------

const thirdEmployeeInfo = (employees) => {
  const thirdEmployeeName = employees[2].name;
  const thirdEmployeeAge = employees[2].age;
  const thirdEmployeeSalary = employees[2].salary;
  const bonus = (employees[2].salary * 10) / 100;
  return ` Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
};

console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"

// --------------------------------------------------------------------------------------------------------------------------------------
