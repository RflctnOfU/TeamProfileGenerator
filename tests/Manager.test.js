const Manager = require('../lib/Manager');

test('Can instantiate Manager instance', () => {
    const e = new Manager();
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = 'George';
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const test = 150;
    const e = new Manager('George', test);
    expect(e.id).toBe(test);
});

test("Can set email via constructor argument", () => {
    const test = 'test@test.com';
    const e = new Manager('George', 1, test);
    expect(e.email).toBe(test);
});

test("Can set office number via constructor argument", () => {
    const test = 123;
    const e = new Manager('George', 1, 'test@test.com', test);
    expect(e.officeNumber).toBe(test);
});

test('getRole() should return \'Manager\'', () => {
    const test = 'Manager';
    const e = new Manager('George', 1, 'test@test.com', 123);
    expect(e.getRole()).toBe(test);
});