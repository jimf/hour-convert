'use strict';

module.exports = {

    /**
     * Convert 24-hour time to 12-hour format.
     *
     * @param {number} hour Hour to convert (0-23)
     * @return {object} { hour, meridian }
     */
    to12Hour: function to12Hour(hour) {
        return {
            hour: ((hour + 11) % 12 + 1),
            meridian: hour < 12 ? 'am' : 'pm'
        };
    },

    /**
     * Convert 12-hour time to 24-hour format.
     *
     * @param {object} time Time object
     * @param {number} time.hour Hour to convert (1-12)
     * @param {string} time.meridian Hour meridian (am/pm)
     * @return {number}
     */
    to24Hour: function to24Hour(time) {
        return (time.meridian === 'am' ? 0 : 12) + (time.hour % 12);
    }
};
