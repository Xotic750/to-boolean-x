import toBoolean from 'src/to-boolean-x';

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return '3';
  },
};

const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const uncoercibleObject = {
  toString() {
    return {};
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

describe('toBoolean', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof toBoolean).toBe('function');
  });

  it('should return the correct boolean value', function() {
    expect.assertions(18);
    expect(toBoolean(undefined)).toBe(false, 'undefined coerces to false');
    expect(toBoolean(null)).toBe(false, 'null coerces to false');
    expect(toBoolean(false)).toBe(false, 'false returns false');
    expect(toBoolean(true)).toBe(true, 'true returns true');

    [0, -0, NaN].forEach(function(falsyNumber) {
      expect(toBoolean(falsyNumber)).toBe(false, `falsy number ${falsyNumber} coerces to false`);
    });

    [Infinity, 42, 1, -Infinity].forEach(function(truthyNumber) {
      expect(toBoolean(truthyNumber)).toBe(true, `truthy number ${truthyNumber} coerces to true`);
    });

    expect(toBoolean('')).toBe(false, 'empty string coerces to false');
    expect(toBoolean('foo')).toBe(true, 'nonempty string coerces to true');
    objects.forEach(function(obj) {
      expect(toBoolean(obj)).toBe(true, 'object coerces to true');
    });

    expect(toBoolean(uncoercibleObject)).toBe(true, 'uncoercibleObject coerces to true');
  });
});
