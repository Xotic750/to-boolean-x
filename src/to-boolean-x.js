/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
const toBoolean = function toBoolean(value) {
  return !!value;
};

export default toBoolean;
