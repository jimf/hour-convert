'use strict';

module.exports = {

    /**
     * Convert 24-hour time to 12-hour format.
     *
     * @param {number} hour Hour to convert (0-23)
     * @return {object} { hour, meridiem } (meridian is also returned for backwards compatibility)
     */
    to12Hour: function to12Hour(hour) {
        var meridiem = hour < 12 ? 'am' : 'pm';
        return {
            hour: ((hour + 11) % 12 + 1),
            meridiem: meridiem,
            meridian: meridiem
        };
    },

    /**
     * Convert 12-hour time to 24-hour format.
     *
     * @param {object} time Time object
     * @param {number} time.hour Hour to convert (1-12)
     * @param {string} time.meridiem Hour meridiem (am/pm). 'time.meridian' is
     *  supported for backwards compatibility.
     * @return {number}
     */
    to24Hour: function to24Hour(time) {
        var meridiem = time.meridiem || time.meridian;
        return (meridiem === 'am' ? 0 : 12) + (time.hour % 12);
    }
};
