const Manager = require("../lib/Manager");

test("Can set officenumer", () => {
    const testValue = "1233337777";
    const e = new Manager("jess", 1, "1@1.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return MAnager", () => {
    const testValue = "Manager";
    const e = new Manager("jess", 1, "1@1.com", "jtillson1");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number username via getOfficeNumber()", () => {
    const testValue = "1233337777";
    const e = new Manager("jess", 1, "1@1.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
  