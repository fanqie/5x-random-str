### introduction
This is a randomly generated string project that can be used to generate passwords and/or strings of any length. It also allows customization of the random content range and provides the flexibility to set the delimiter positions and symbols without any specific rules or restrictions.

这是一个随机生成的字符串项目，可用于生成任何长度的密码和/或字符串。它还允许自定义随机内容范围，并提供设置分隔符位置和符号的灵活性，而无需任何特定规则或限制。
### install
```bash
npm install 5x-random-str
```
### import
```js 
//commonjs
const {CHARS, randomStr} = require("5x-random-str")
//es6+ 
import {randomStr,CHARS} from "5x-random-str";
//iife
<script src="5x-random-str/index.js"></script>
```
### simple default
```js
randomStr()
```    
```    
//result
a9ZOLl.@[7@K}RSA
```
### use ABC
```js
ABC(12)
```
```
//result
ZKVWGZYUAZSF
```
### use abc
```js
abc(12)
```
```
//result
gcdglealiwyv
```
### use ABC_abc
```js
ABC_abc(12)
```
```
//result
WbMaduuxDgfS
```

### use ABC_abc_123
```js
ABC_abc_123()
```
```
//result
kPo4gsk5KAC6GoN5
```
### use strongPasswd
```js
strongPasswd(12)
```
```
//result
#FIKz@bfMoHp
```
### use superPasswd
```js
superPasswd()
```
```
//result
b,[NoxLTOV-c_1wT
```
### use length,use default chats,use upperCase
```js
randomStr(20, [],  true)
```

```
//result
$C)5D})MBU*?U!~@.W!$
```
### use chars array const
```js
randomStr(6, [CHARS.ABC_XYZ,CHARS.abc_xyz],  true)
```

```
//result
CGZUYF
```
###  use  custom chars
```js
randomStr(1, ["甲乙丙丁戊己庚辛壬癸","尨"],  true)+randomStr(1, ["子丑寅卯辰巳午未申酉戌亥"],  true)
```
```
//result
辛卯
```
### use more chars
```js
randomStr(32, [
CHARS["+.(~)[]?}|{][,-"],
CHARS["!@#$%^&*()_"]],  true)
```
```

^.!)]-!,!{)&])(?[[#|.?]%~]}?}]])
```
### use separator
```js
randomStr(32, [
CHARS.ABC_XYZ,
CHARS.abc_xyz,
CHARS["1234567890"]],  false,"-")
```
```

6E33-cs8K-mGBW-kg0V-toxp-dFmf-isOB-zShf
```
### use separator step
```js
randomStr(32, [
CHARS.ABC_XYZ,
CHARS.abc_xyz,
CHARS["1234567890"]],  true,"__",5)
```
```
//result
BATL6__LVCEU__OEKGY__AFZBT__UDZCK__PIR3G__B1
```
### use separator steps
```js
randomStr(32, [
CHARS.ABC_XYZ,
CHARS.abc_xyz,
CHARS["1234567890"]],  false,"-",[4,4,4,8])
```
```
//result
xFWh-G1N8-lYcf-skfGREvM-MoKOo63d0PZK
```
