const Engineer = require("../lib/Engineer");

test("Can set GitHub username", () => {
  const testValue = "jtillson1";
  const e = new Engineer("Jon", 1, "1@1.com", testValue);
  expect(e.github).toBe(testValue);
});
test("getRole() shows engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jon", 1, "1@1.com", "jtillson1");
  expect(e.getRole()).toBe(testValue);
});
test("Can get GitHub username via getGithub()", () => {
  const testValue = "jtillson1";
  const e = new Engineer("Jon", 1, "1@1.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
