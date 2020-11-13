const Employee = require("../lib/Employee");

test("Can set name", () => {
  const name = "Billy McGoats";
  const e = new Employee(name);
  expect(e.name).toBe("Billy McGoats");
});

test("Can set id", () => {
  const testValue = 100;
  const e = new Employee("Jon", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email", () => {
  const testValue = "1@1.com";
  const e = new Employee("Jon", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Can GET name", () => {
  const testValue = "Billy McGoats";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can GET id", () => {
  const testValue = 100;
  const e = new Employee("Jon", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can GET email", () => {
  const testValue = "1@1.com";
  const e = new Employee("Jon", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() returns as employee", () => {
  const testValue = "Employee";
  const e = new Employee("Billy McGoats", 1, "1@1.com");
  expect(e.getRole()).toBe(testValue);
});
