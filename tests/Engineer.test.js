const Engineer = require('../lib/Engineer');

test('Can instantiate Engineer instance', () => {
    const e = new Engineer();
    expect(typeof (e)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = 'Jason';
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
    const test = 150;
    const e = new Engineer('Jason', test);
    expect(e.id).toBe(test);
});

test("Can set email via constructor argument", () => {
    const test = 'test@test.com';
    const e = new Engineer('Jason', 1, test);
    expect(e.email).toBe(test);
});

test("Can set GitHub username via constructor argument", () => {
    const test = 'heroJase';
    const e = new Engineer('Jason', 1, 'test@test.com', test);
    expect(e.github).toBe(test);
});

test('getRole() should return \'Engineer\'', () => {
    const test = 'Engineer';
    const e = new Engineer('Jason', 1, 'test@test.com', 123);
    expect(e.getRole()).toBe(test);
});

test('getGithub() should return GitHub username', () => {
    const test = 'heroJase';
    const e = new Engineer('Jason', 1, 'test@test.com', test);
    expect(e.getGithub()).toBe(test);
});