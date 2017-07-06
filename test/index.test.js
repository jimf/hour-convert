'use strict';

var test = require('tape'),
    hourConvert = require('..');

test('to12Hour', function(assert) {
    var cases = [
        { input:  0, expected: { hour: 12, meridiem: 'am' } },
        { input:  1, expected: { hour:  1, meridiem: 'am' } },
        { input:  2, expected: { hour:  2, meridiem: 'am' } },
        { input:  3, expected: { hour:  3, meridiem: 'am' } },
        { input:  4, expected: { hour:  4, meridiem: 'am' } },
        { input:  5, expected: { hour:  5, meridiem: 'am' } },
        { input:  6, expected: { hour:  6, meridiem: 'am' } },
        { input:  7, expected: { hour:  7, meridiem: 'am' } },
        { input:  8, expected: { hour:  8, meridiem: 'am' } },
        { input:  9, expected: { hour:  9, meridiem: 'am' } },
        { input: 10, expected: { hour: 10, meridiem: 'am' } },
        { input: 11, expected: { hour: 11, meridiem: 'am' } },
        { input: 12, expected: { hour: 12, meridiem: 'pm' } },
        { input: 13, expected: { hour:  1, meridiem: 'pm' } },
        { input: 14, expected: { hour:  2, meridiem: 'pm' } },
        { input: 15, expected: { hour:  3, meridiem: 'pm' } },
        { input: 16, expected: { hour:  4, meridiem: 'pm' } },
        { input: 17, expected: { hour:  5, meridiem: 'pm' } },
        { input: 18, expected: { hour:  6, meridiem: 'pm' } },
        { input: 19, expected: { hour:  7, meridiem: 'pm' } },
        { input: 20, expected: { hour:  8, meridiem: 'pm' } },
        { input: 21, expected: { hour:  9, meridiem: 'pm' } },
        { input: 22, expected: { hour: 10, meridiem: 'pm' } },
        { input: 23, expected: { hour: 11, meridiem: 'pm' } }
    ];

    cases.forEach(function(testcase) {
        // For backwards compatibility
        var expected = Object.assign({}, testcase.expected, { meridian: testcase.expected.meridiem });
        assert.deepEqual(hourConvert.to12Hour(testcase.input), expected,
            'should convert ' + testcase.input + ' to expected 12-hour time');
    });

    assert.end();
});

test('to24Hour', function(assert) {
    var cases = [
        { input: { hour: 12, meridiem: 'am' }, expected:  0 },
        { input: { hour:  1, meridiem: 'am' }, expected:  1 },
        { input: { hour:  2, meridiem: 'am' }, expected:  2 },
        { input: { hour:  3, meridiem: 'am' }, expected:  3 },
        { input: { hour:  4, meridiem: 'am' }, expected:  4 },
        { input: { hour:  5, meridiem: 'am' }, expected:  5 },
        { input: { hour:  6, meridiem: 'am' }, expected:  6 },
        { input: { hour:  7, meridiem: 'am' }, expected:  7 },
        { input: { hour:  8, meridiem: 'am' }, expected:  8 },
        { input: { hour:  9, meridiem: 'am' }, expected:  9 },
        { input: { hour: 10, meridiem: 'am' }, expected: 10 },
        { input: { hour: 11, meridiem: 'am' }, expected: 11 },
        { input: { hour: 12, meridiem: 'pm' }, expected: 12 },
        { input: { hour:  1, meridiem: 'pm' }, expected: 13 },
        { input: { hour:  2, meridiem: 'pm' }, expected: 14 },
        { input: { hour:  3, meridiem: 'pm' }, expected: 15 },
        { input: { hour:  4, meridiem: 'pm' }, expected: 16 },
        { input: { hour:  5, meridiem: 'pm' }, expected: 17 },
        { input: { hour:  6, meridiem: 'pm' }, expected: 18 },
        { input: { hour:  7, meridiem: 'pm' }, expected: 19 },
        { input: { hour:  8, meridiem: 'pm' }, expected: 20 },
        { input: { hour:  9, meridiem: 'pm' }, expected: 21 },
        { input: { hour: 10, meridiem: 'pm' }, expected: 22 },
        { input: { hour: 11, meridiem: 'pm' }, expected: 23 }
    ];

    // For backwards compatibility
    var meridianCases = JSON.parse(JSON.stringify(cases)).map(function(testCase) {
        var meridiem = testCase.input.meridiem;
        delete testCase.input.meridiem;
        testCase.input.meridian = meridiem;
        return testCase;
    })

    cases = cases.concat(meridianCases)

    cases.forEach(function(testcase) {
        assert.deepEqual(hourConvert.to24Hour(testcase.input), testcase.expected,
            'should convert ' + testcase.input.hour + testcase.input.meridiem + ' to expected 24-hour time');
    });

    assert.end();
});
