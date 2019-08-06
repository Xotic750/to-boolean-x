<a
  href="https://travis-ci.org/Xotic750/to-boolean-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-boolean-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-boolean-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-boolean-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-boolean-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-boolean-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-boolean-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-boolean-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-boolean-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-boolean-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-boolean-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-boolean-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/to-boolean-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/to-boolean-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_to-boolean-x"></a>

## to-boolean-x

Converts argument to a value of type Boolean.

<a name="exp_module_to-boolean-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

The abstract operation ToBoolean converts argument to a value of type Boolean.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - 'true' if value is truthy; otherwise 'false'.

| Param | Type            | Description                |
| ----- | --------------- | -------------------------- |
| value | <code>\*</code> | The value to be converted. |

**Example**

```js
import toBoolean from 'to-boolean-x';

console.log(toBoolean(null)); // false
console.log(toBoolean('')); // false
console.log(toBoolean(1)); // true
console.log(toBoolean('0')); // true
```
