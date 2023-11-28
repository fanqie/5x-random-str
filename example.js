const rs5x = require("./index")
console.log("------------simple default---------------")
console.log(`rs5x.randomStr() \n====================================>\n`, rs5x.randomStr())
console.log("------------use length,use default chats,use upperCase---------------")
console.log(`rs5x.randomStr(20, [],  true) \n====================================>\n`, rs5x.randomStr(20, [], true))
console.log("------------use custom chars to array ---------------")
console.log(`rs5x.randomStr(6, [CHARS.ABC_XYZ,CHARS.abc_xyz],  true) \n====================================>\n`, rs5x.randomStr(6, [rs5x.CHARS.ABC_XYZ, rs5x.CHARS.abc_xyz], true))
console.log("------------use chars array const---------------")
console.log(`rs5x.randomStr(1, ["甲乙丙丁戊己庚辛壬癸","尨"],  true)+randomStr(1, ["子丑寅卯辰巳午未申酉戌亥"],  true) \n====================================>\n`,
    rs5x.randomStr(1, ["甲乙丙丁戊己庚辛壬癸", "尨"], true) + rs5x.randomStr(1, ["子丑寅卯辰巳午未申酉戌亥"],
        true))
console.log("------------use more chars---------------")
console.log(`rs5x.randomStr(32, [
    rs5x.CHARS["+.(~)[]?}|{][,-"],
    rs5x.CHARS["!@#$%^&*()_"]],  true) \n====================================>\n`, rs5x.randomStr(32, [
    rs5x.CHARS["+.(~)[]?}|{][,-"],
    rs5x.CHARS["!@#$%^&*()_"]], true))
console.log("------------use separator---------------")
console.log(`rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]],  false,"-") \n====================================>\n`, rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]], false, "-"))
console.log("------------use separator step---------------")
console.log(`rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]],  true,"__",5) \n====================================>\n`, rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]], true, "__", 5))
console.log("-------------use separator steps--------------")
console.log(`rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]],  false,"-",[4,4,4,8]) \n====================================>\n`, rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]], false, "-", [4, 4, 4, 8]))

console.log("-------------use Number--------------")
console.log(`rs5x.Number(12) \n====================================>\n`, rs5x.Number(12))
console.log("-------------use ABC--------------")
console.log(`rs5x.ABC(12) \n====================================>\n`, rs5x.ABC(12))
console.log("-------------use abc--------------")
console.log(`rs5x.abc(12) \n====================================>\n`, rs5x.abc(12))
console.log("-------------use ABC_abc--------------")
console.log(`rs5x.ABC_abc(12) \n====================================>\n`, rs5x.ABC_abc(12))
console.log("-------------use ABC_abc_123--------------")
console.log(`rs5x.ABC_abc_123() \n====================================>\n`, rs5x.ABC_abc_123())
console.log("-------------use strongPasswd--------------")
console.log(`rs5x.strongPasswd(12) \n====================================>\n`, rs5x.strongPasswd(12))
console.log("-------------use superPasswd--------------")
console.log(`rs5x.strongPasswd() \n====================================>\n`, rs5x.superPasswd())
