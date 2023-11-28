(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["5x-random-str"] = {}));
})(this, (function (exports) { 'use strict';

    /**
     *
     * @param start {number}
     * @param end {number}
     * @return {number}
     */
    Array.prototype.sum = function (start, end) {
        return this.reduce((total, currentValue, currentIndex) => {
            if (currentIndex >= start && currentIndex < end) {
                return total + currentValue;
            }
            return total;
        }, 0)
    };
    const shuffle = function (arrBox) {
        arrBox = typeof arrBox === 'string' ? arrBox.split('') : arrBox;
        let shuffleBox = [];
        let len = arrBox.length;
        for (let i = 0; i < len; i++) {
            let boxIndex = Math.floor(Math.random() * arrBox.length);
            shuffleBox.push(arrBox[boxIndex].valueOf());
            arrBox.splice(boxIndex, 1);
        }
        return shuffleBox
    };
    /**
     * @param len
     * @param chars
     * @returns {string}
     */
    const randStr = (len, chars = []) => {
        chars = chars || [];
        const str = shuffle(chars.join("")).join("");
        let randFull = shuffle(str + str + str + str + str + str + str).join("");
        return randFull.substring(0, len);
    };
    const CHARS = {
        'ABC_XYZ': 'ABCDEFGHIGKLMNOPKRSTUVWXYZ',
        'abc_xyz': 'abcdefghigklmnopkrstuvwxyz',
        '1234567890': '1234567890',
        '!@#$%^&*()_': '!@#$%^&*()_',
        '+.(~)[]?}|{][,-': '+.(~)[]?}|{][,-',
    };
    /**
     * random a string
     * @param len number
     * @param chars {string[]}
     * @param upperCase {boolean}
     * @param separator {string}
     * @param separatorSteps {number[]|number}
     * @return {string}
     */
    const randomStr = (len = 16,
                              chars = [],
                              upperCase = false,
                              separator = "",
                              separatorSteps = 4,
    ) => {
        chars = chars.length === 0 ? [
            CHARS.ABC_XYZ,
            CHARS.abc_xyz,
            CHARS["1234567890"],
            CHARS["+.(~)[]?}|{][,-"],
            CHARS["!@#$%^&*()_"]] : chars;
        let str = randStr(len, chars);
        if (separator) {
            let regex = null;
            if (Array.isArray(separatorSteps)) {
                separatorSteps.push(str.length);
                str = separatorSteps.map((pos, index) => str.substring(separatorSteps.sum(0, index), separatorSteps.sum(0, index + 1))).join(separator);
            } else {
                regex = new RegExp('(.{' + separatorSteps + '})(?!$)', 'g');
                str = str.replace(regex, "$1 ").split(" ").join(separator);
            }

        }
        return upperCase ? str.toUpperCase() : str;
    };

    const ABC = (len = 16,
                        separator = "",
                        separatorSteps = 4) => {
        return randomStr(len, [CHARS.ABC_XYZ],false,separator,separatorSteps)
    };
    const abc = (len = 16,separator = "",
                        separatorSteps = 4) => {
        return randomStr(len, [CHARS.abc_xyz],false,separator,separatorSteps)
    };
    const ABC_abc = (len = 16,separator = "",
                            separatorSteps = 4) => {
        return randomStr(len, [CHARS.ABC_XYZ, CHARS.abc_xyz],false,separator,separatorSteps)
    };
    const ABC_abc_123 = (len = 16,separator = "",
                                separatorSteps = 4) => {
        return randomStr(len, [CHARS.ABC_XYZ, CHARS.abc_xyz, CHARS["1234567890"]],false,separator,separatorSteps)
    };
    const strongPasswd = (len = 16,separator = "",
                                 separatorSteps = 4) => {
        return randomStr(len, [CHARS.ABC_XYZ, CHARS.abc_xyz, CHARS["1234567890"], CHARS["!@#$%^&*()_"]],false,separator,separatorSteps)
    };
    const superPasswd = (len = 16,separator = "",
                                 separatorSteps = 4) => {
        return randomStr(len, [CHARS.ABC_XYZ, CHARS.abc_xyz, CHARS["1234567890"],CHARS["+.(~)[]?}|{][,-"], CHARS["!@#$%^&*()_"]],false,separator,separatorSteps)
    };

    exports.ABC = ABC;
    exports.ABC_abc = ABC_abc;
    exports.ABC_abc_123 = ABC_abc_123;
    exports.CHARS = CHARS;
    exports.abc = abc;
    exports.randomStr = randomStr;
    exports.strongPasswd = strongPasswd;
    exports.superPasswd = superPasswd;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
