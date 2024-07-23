import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


test('returns the current year', () => {
  const mockDate = new Date(2021, 6, 23);
  global.Date = jest.fn(() => mockDate);
  expect(getFullYear()).toBe(2021);
});

test('returns the correct string with isIndex set to true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('returns the correct string with isIndex set to false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns the correct string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
