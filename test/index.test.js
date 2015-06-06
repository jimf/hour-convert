'use strict';

var test = require('tape'),
    hourConvert = require('..');

test('to12Hour', function(assert) {
    var cases = [
        { input:  0, expected: { hour: 12, meridian: 'am' } },
        { input:  1, expected: { hour:  1, meridian: 'am' } },
        { input:  2, expected: { hour:  2, meridian: 'am' } },
        { input:  3, expected: { hour:  3, meridian: 'am' } },
        { input:  4, expected: { hour:  4, meridian: 'am' } },
        { input:  5, expected: { hour:  5, meridian: 'am' } },
        { input:  6, expected: { hour:  6, meridian: 'am' } },
        { input:  7, expected: { hour:  7, meridian: 'am' } },
        { input:  8, expected: { hour:  8, meridian: 'am' } },
        { input:  9, expected: { hour:  9, meridian: 'am' } },
        { input: 10, expected: { hour: 10, meridian: 'am' } },
        { input: 11, expected: { hour: 11, meridian: 'am' } },
        { input: 12, expected: { hour: 12, meridian: 'pm' } },
        { input: 13, expected: { hour:  1, meridian: 'pm' } },
        { input: 14, expected: { hour:  2, meridian: 'pm' } },
        { input: 15, expected: { hour:  3, meridian: 'pm' } },
        { input: 16, expected: { hour:  4, meridian: 'pm' } },
        { input: 17, expected: { hour:  5, meridian: 'pm' } },
        { input: 18, expected: { hour:  6, meridian: 'pm' } },
        { input: 19, expected: { hour:  7, meridian: 'pm' } },
        { input: 20, expected: { hour:  8, meridian: 'pm' } },
        { input: 21, expected: { hour:  9, meridian: 'pm' } },
        { input: 22, expected: { hour: 10, meridian: 'pm' } },
        { input: 23, expected: { hour: 11, meridian: 'pm' } }
    ];

    cases.forEach(function(testcase) {
        assert.deepEqual(hourConvert.to12Hour(testcase.input), testcase.expected,
            'should convert ' + testcase.input + ' to expected 12-hour time');
    });

    assert.end();
});

test('to24Hour', function(assert) {
    var cases = [
        { input: { hour: 12, meridian: 'am' }, expected:  0 },
        { input: { hour:  1, meridian: 'am' }, expected:  1 },
        { input: { hour:  2, meridian: 'am' }, expected:  2 },
        { input: { hour:  3, meridian: 'am' }, expected:  3 },
        { input: { hour:  4, meridian: 'am' }, expected:  4 },
        { input: { hour:  5, meridian: 'am' }, expected:  5 },
        { input: { hour:  6, meridian: 'am' }, expected:  6 },
        { input: { hour:  7, meridian: 'am' }, expected:  7 },
        { input: { hour:  8, meridian: 'am' }, expected:  8 },
        { input: { hour:  9, meridian: 'am' }, expected:  9 },
        { input: { hour: 10, meridian: 'am' }, expected: 10 },
        { input: { hour: 11, meridian: 'am' }, expected: 11 },
        { input: { hour: 12, meridian: 'pm' }, expected: 12 },
        { input: { hour:  1, meridian: 'pm' }, expected: 13 },
        { input: { hour:  2, meridian: 'pm' }, expected: 14 },
        { input: { hour:  3, meridian: 'pm' }, expected: 15 },
        { input: { hour:  4, meridian: 'pm' }, expected: 16 },
        { input: { hour:  5, meridian: 'pm' }, expected: 17 },
        { input: { hour:  6, meridian: 'pm' }, expected: 18 },
        { input: { hour:  7, meridian: 'pm' }, expected: 19 },
        { input: { hour:  8, meridian: 'pm' }, expected: 20 },
        { input: { hour:  9, meridian: 'pm' }, expected: 21 },
        { input: { hour: 10, meridian: 'pm' }, expected: 22 },
        { input: { hour: 11, meridian: 'pm' }, expected: 23 }
    ];

    cases.forEach(function(testcase) {
        assert.deepEqual(hourConvert.to24Hour(testcase.input), testcase.expected,
            'should convert ' + testcase.input.hour + testcase.input.meridian + ' to expected 24-hour time');
    });

    assert.end();
});
