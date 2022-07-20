const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const e = new Intern();
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = 'Lily';
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const test = 150;
    const e = new Intern('Lily', test);
    expect(e.id).toBe(test);
});

test("Can set email via constructor argument", () => {
    const test = 'test@test.com';
    const e = new Intern('Lily', 1, test);
    expect(e.email).toBe(test);
});

test("Can set school via constructor argument", () => {
    const test = 'University of Florida';
    const e = new Intern('Lily', 1, 'test@test.com', test);
    expect(e.school).toBe(test);
});

test('getRole() should return \'Intern\'', () => {
    const test = 'Intern';
    const e = new Intern('Lily', 1, 'test@test.com', 123);
    expect(e.getRole()).toBe(test);
});

test('getSchool() should return school', () => {
    const test = 'Florida State';
    const e = new Intern('Lily', 1, 'test@test.com', test);
    expect(e.getSchool()).toBe(test);
});