# hour-convert

Micro library for converting hours between 12-hour and 24-hour formats.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install hour-convert

## Usage

```js
var hourConvert = require('hour-convert');

// 24-hour to 12-hour format
hourConvert.to12Hour(0);   // { hour: 12, meridian: 'am' }
hourConvert.to12Hour(6);   // { hour: 6, meridian: 'am' }
hourConvert.to12Hour(12);  // { hour: 12, meridian: 'pm' }
hourConvert.to12Hour(18);  // { hour: 6, meridian: 'pm' }

// 12-hour to 24-hour format
hourConvert.to24Hour({ hour: 12, meridian: 'am' });  // 0
hourConvert.to24Hour({ hour:  6, meridian: 'am' });  // 6
hourConvert.to24Hour({ hour: 12, meridian: 'pm' });  // 12
hourConvert.to24Hour({ hour:  6, meridian: 'pm' });  // 18
```

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/hour-convert/master.svg
[build-status]: https://travis-ci.org/jimf/hour-convert
[npm-badge]: https://img.shields.io/npm/v/hour-convert.svg
[npm]: https://www.npmjs.org/package/hour-convert
[coverage-badge]: https://img.shields.io/coveralls/jimf/hour-convert.svg
[coverage-result]: https://coveralls.io/r/jimf/hour-convert
[dep-badge]: https://img.shields.io/david/jimf/hour-convert.svg
[dep-status]: https://david-dm.org/jimf/hour-convert
