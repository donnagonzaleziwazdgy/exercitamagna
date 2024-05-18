interface SalaryRecord {
  [employee: string]: number;
}

const salaries: SalaryRecord = {
  sadik: 15000,
  // ... add more employee salaries here
};

// Function to add a new salary record
function addSalary(record: SalaryRecord, employee: string, salary: number): void {
  record[employee] = salary;
}

// Example usage:
addSalary(salaries, 'alex', 20000);
