// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses and space', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number missing dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number wrong format', () => {
  expect(isPhoneNumber('1242-345-789')).toBe(false);
});

// isEmail tests
test('valid email with .com domain', () => {
  expect(isEmail('user@domain.com')).toBe(true);
});

test('valid email with underscore and .net domain', () => {
  expect(isEmail('user_name@domain.net')).toBe(true);
});

test('invalid email missing @', () => {
  expect(isEmail('userdomain.com')).toBe(false);
});

test('invalid email with single-letter domain', () => {
  expect(isEmail('user@domain.c')).toBe(false);
});

// isStrongPassword tests
test('valid strong password of minimum length', () => {
  expect(isStrongPassword('Abcd')).toBe(true);
});

test('valid strong password with numbers and underscore', () => {
  expect(isStrongPassword('a_bc123')).toBe(true);
});

test('invalid strong password starting with number', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('invalid strong password too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

// isDate tests
test('valid date with single-digit month and day', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('valid date with two-digit month and day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date with dashes', () => {
  expect(isDate('01-01-2020')).toBe(false);
});

test('invalid date with two-digit year', () => {
  expect(isDate('1/1/20')).toBe(false);
});

// isHexColor tests
test('valid 3-character hex with #', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('valid 6-character hex without #', () => {
  expect(isHexColor('123ABC')).toBe(true);
});

test('invalid hex color with non-hex character', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('invalid hex color with incorrect length', () => {
  expect(isHexColor('FFFF')).toBe(false);
});