const Intern = require("../lib/Intern");

test("Can set GitHUb account via constructor", () => {
  const testValue = "yale";
  const e = new Intern("jon", 1, "1@1.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
  const testValue = "Intern";
  const e = new Intern("jon", 1, "1@1.com", "jtillson1");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school username via getSchool()", () => {
  const testValue = "yale";
  const e = new Intern("jon", 1, "1@1.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
