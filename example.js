const {CHARS, randomStr} = require("./")
console.log("------------simple default---------------")
console.log(`randomStr() \n====================================>\n`, randomStr())
console.log("------------use length,use default chats,use upperCase---------------")
console.log(`randomStr(20, [],  true) \n====================================>\n`, randomStr(20, [], true))
console.log("------------use custom chars to array ---------------")
console.log(`randomStr(6, [CHARS.ABC_XYZ,CHARS.abc_xyz],  true) \n====================================>\n`, randomStr(6, [CHARS.ABC_XYZ, CHARS.abc_xyz], true))
console.log("------------use chars array const---------------")
console.log(`randomStr(1, ["甲乙丙丁戊己庚辛壬癸","尨"],  true)+randomStr(1, ["子丑寅卯辰巳午未申酉戌亥"],  true) \n====================================>\n`,
    randomStr(1, ["甲乙丙丁戊己庚辛壬癸","尨"], true) + randomStr(1, ["子丑寅卯辰巳午未申酉戌亥"],
        true))
console.log("------------use more chars---------------")
console.log(`randomStr(32, [
    CHARS["+.(~)[]?}|{][,-"],
    CHARS["!@#$%^&*()_"]],  true) \n====================================>\n`, randomStr(32, [
    CHARS["+.(~)[]?}|{][,-"],
    CHARS["!@#$%^&*()_"]], true))
console.log("------------use separator---------------")
console.log(` randomStr(32, [
    CHARS.ABC_XYZ,
    CHARS.abc_xyz,
    CHARS["1234567890"]],  false,"-") \n====================================>\n`, randomStr(32, [
    CHARS.ABC_XYZ,
    CHARS.abc_xyz,
    CHARS["1234567890"]], false, "-"))
console.log("------------use separator step---------------")
console.log(`randomStr(32, [
    CHARS.ABC_XYZ,
    CHARS.abc_xyz,
    CHARS["1234567890"]],  true,"__",5) \n====================================>\n`, randomStr(32, [
    CHARS.ABC_XYZ,
    CHARS.abc_xyz,
    CHARS["1234567890"]], true, "__", 5))
console.log("-------------use separator steps--------------")
console.log(`randomStr(32, [
    CHARS.ABC_XYZ,
    CHARS.abc_xyz,
    CHARS["1234567890"]],  false,"-",[4,4,4,8]) \n====================================>\n`, randomStr(32, [
    CHARS.ABC_XYZ,
    CHARS.abc_xyz,
    CHARS["1234567890"]], false, "-", [4, 4, 4, 8]))
