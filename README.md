### introduction
This is a randomly generated string project that can be used to generate passwords and/or strings of any length. It also allows customization of the random content range and provides the flexibility to set the delimiter positions and symbols without any specific rules or restrictions.

`这是一个随机生成的字符串项目，可用于生成任何长度的密码和/或字符串。它还允许自定义随机内容范围，并提供设置分隔符位置和符号的灵活性，而无需任何特定规则或限制。`
### install
```bash
npm install 5x-random-str
```
### import
```js 
//commonjs
const rs5x = require("5x-random-str")

//es6+ 
import * as rs5x from "5x-random-str";

//iife
<script src="https://unpkg.com/5x-random-str/index.js"></script>
const rs5x = window["5x-random-str"];
```
### simple default
```javascript
rs5x.randomStr()
```    
```bash
#result
a9ZOLl.@[7@K}RSA
```
### use Number
```javascript
rs5x.Number(12)
```
```bash
#result
280127374882
```
### use ABC
```javascript
rs5x.ABC(12)
```
```bash
#result
ZKVWGZYUAZSF
```
### use abc
```javascript
rs5x.abc(12)
```
```bash
#result
gcdglealiwyv
```
### use ABC_abc
```javascript
rs5x.ABC_abc(12)
```
```bash
#result
WbMaduuxDgfS
```

### use ABC_abc_123
```javascript
rs5x.ABC_abc_123()
```
```bash
#result
kPo4gsk5KAC6GoN5
```
### use strongPasswd
```javascript
rs5x.strongPasswd(12)
```
```bash
#result
#FIKz@bfMoHp
```
### use superPasswd
```javascript
rs5x.superPasswd()
```
```bash
#result
b,[NoxLTOV-c_1wT
```
### use length,use default chats,use upperCase
```javascript
rs5x.randomStr(20, [],  true)
```

```bash
#result
$C)5D})MBU*?U!~@.W!$
```
### use chars array const
```javascript
rs5x.randomStr(6, [rs5x.CHARS.ABC_XYZ,rs5x.CHARS.abc_xyz],  true)
```
```bash
#result
CGZUYF
```
###  use  custom chars
```javascript
rs5x.randomStr(1, ["甲乙丙丁戊己庚辛壬癸","尨"],  true)+rs5x.randomStr(1, ["子丑寅卯辰巳午未申酉戌亥"],  true)
```
```bash
#result
辛卯
```
### use more chars
```javascript
rs5x.randomStr(32, [
    rs5x.CHARS["+.(~)[]?}|{][,-"],
    rs5x.CHARS["!@#$%^&*()_"]],  true)
```
```bash
#result
^.!)]-!,!{)&])(?[[#|.?]%~]}?}]])
```
### use separator
```javascript
rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]],  false,"-")
```
```bash
#result
6E33-cs8K-mGBW-kg0V-toxp-dFmf-isOB-zShf
```
### use separator step
```javascript
rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]],  true,"__",5)
```
```bash
#result
BATL6__LVCEU__OEKGY__AFZBT__UDZCK__PIR3G__B1
```
### use separator steps
```javascript
rs5x.randomStr(32, [
    rs5x.CHARS.ABC_XYZ,
    rs5x.CHARS.abc_xyz,
    rs5x.CHARS["1234567890"]],  false,"-",[4,4,4,8])
```
```bash
#result
xFWh-G1N8-lYcf-skfGREvM-MoKOo63d0PZK
```
