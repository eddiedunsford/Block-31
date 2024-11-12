const express = require("express");
const app = express();
const PORT = 3000;

// Import the employee data
const employees = require("./employees");


app.use(express.json());

// Endpoint 1: GET / - Returns a greeting message
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Endpoint 2: GET /employees - Returns the full array of employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// Endpoint 3: GET /employees/:id - Returns an employee by id
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const employee = employees.find((emp) => emp.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

// Endpoint 4: GET /employees/random - Returns a random employee
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.json(randomEmployee);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

