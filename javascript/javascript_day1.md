#JAVASCRIPT GRAMMER1

###Value

value 는 값. 값을 만드는 방법은 다양하다.

```html
1;
"abcd";
true;
Number, String, Boolean..
이런 값들을 가지고 연산을 해서 돌려주고 받고 할 수 있다.
```

#### variable

variable 변수. 변수를 선언 하는 방법 `var` , `const` , `let` 

```javascript
var a = 1; //변수 a에 1을 할당
var b = function () {}; // 변수 b에 함수 자체를 할당 (실행x)
var c = []; //변수 c에 배열을 할당
```

#### identifier(식별자)

**변수, 함수, 혹은 프로퍼티를 식별하는 문자열**
식별자를 선언할 때 규칙이 있다.
`숫자, 알파벳, $, _` 가 포함될 수 있으며, 숫자로 시작되먼 안된다. 자바스크립트 키워드는 변수이름으로 만들 수 없다.

```javascript
var idx;
var _bar;
var $bar;
var 1abc; //숫자로 시작되면 안된다.
var var; //자바스크립트 키워드로 만들 수 없다.
```

#### Camel Case

identifier 를 지을때 camel case를 기본적으로 흔히 사용

```javascript
var helloWorld;
var vanillaCoding;
```

#### Type

값에는 여러가지 종류가 있고, 값의 종류를 나타내는 단어 **Type** (자료형).
값의  type을 판별 해주는 연산자 `typeof` 
typeof 의 반환값은 문자열이다.

``` javascript
typeof 666; //"number"
typeof "helloWorld"; //"string"
typeof true; //"Boolean"
typeof function foo(){}; //"function"
typeof []; //"object"
```

##### Javascript 의 7가지 Type

* String Type
* Number Type
* Boolean type
* Null Type
* Undefined Type
* Object Type
* Symbol Type (ES2015)



### Number Type

number type 에서 가장 중요한 건 operators (연산자)

``` javascript
//arithmetic operators (산술연산자)
1 + 2; //더하기
2 - 1; //빼기
2 * 3; //곱하기
8 / 4; //나누기
10 % 2 //나머지 0
2 ** 10 //거듭제곱 2의 10승 1024

//increment operators (증감연산자)
var a = 1; ++a;
var b = 2; b++;
var c = 3; --c;
var d = 4; d--;
// ++ , --가 앞에 붙냐 뒤에 붙냐에 따라 값이 달라질 수 있다.
var x = 3;
y = x++; // y = 3, x = 4 뒤에 붙을 경우 x의 값을 y에 할당하고 난 뒤에 x의 값을 증가시킴
var a = 2;
b = ++a; // a = 3, b = 3 앞에 붙을 경우 a의 값을 증가시키면서 b에 할당

//comparison operators(비교연산자)
//boolean 값으로 반환된다.
1 < 2;
3 > 4;
5 <= 5;
6 >= 7;
8 == '8'; //true
8 === '8'; //false
8 !== 9;
NaN == NaN //false
"a" < "b" //true
// 알파벳도 비교가 가능하다.
// === 피연산자들이 타입 변환 없이 strictly equal일때 true.
// !== 불일치 연산자는 같은 타입에서 값이 다르거나 다른 타입인 경우 참을 반환한다.
// NaN 은 ==, === 모두 false를 반환하므로, 값이 NaN인지 아닌지를 구별하려면 isNaN() 함수를 사용.

//assignment operators (할당연산자)
//할당 : 기본 할당연산자는 등호(=), 연산자의 오른쪽 값을 왼쪽에 할당. 
//x = y, y의 값을 x에 할당.
var x = 0;
x += 1; // x = x+1
x -= 1; // x = x-1
x *= 2; // x = x*2
x /= 3; // x = x/3
x %= 4; // x = x%4
x **= 5; // x = x**5

```

**연산자 관련 링크( MDN)**

- [MDN 산술연산자 관련](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

- [MDN 비교연산자 관련](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

- [MDN 할당연산자 관련](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)


##### Operator Precedence(연산자 우선순위)

연산자들 사이에는 우선순위가 존재한다.  [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)  링크로 확인가능하다.



##### parseInt, parseFloat

문자열 구문을 분석해 수의 진법이 되는 값을 정수로 리턴.



### String Type

Template literal

```html
'hello'
'hello world'
'string text'
```

문자열은 string 전역 객체를 직접 사용해 생성할 수 있다.

``` html
String(thing)
thing 문자열로 변환할 값
```

Handling strings

```javascript
//add
'hello'+'world'; //'helloworld'

//comparison
'hello' === 'hello' //true
'a' < 'b' //true
'aaa' < 'aab' //true
'a' < 'Z' //false  소문자가 대문자보다 크다?
'2' < '10' //false ?
'2' < '22' //true ?
```

특성

```javascript
'hello'[3]; //'l' string은 length값을 가질 수 있으며 배열과같이 사용 가능하다. 
//그러나 'hello'[3] = "h"; console.log('hello'[3]) = 'l'; 문자열을 변경할 수는 없다.

'hello'.length; //5 string의 공백까지 읽는다. 

'hello'.concat('fun', 'javascript'); //hellofunjavascript 
// *concat() 메서드는 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.

'6'.repeat(3); //'666'

'hello javascript'.includes('hello'); //true
// *includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지 판별, true, false로 반환

'hello javascript'.startsWith('he'); //true
// *startsWith() 메서드는 어떤 문자열이 특정 문자로 시작 하는지 확인, true false로 반환

'hello javascript'.endsWith('ipt'); //true
// *endsWith() 메서드는 어떤 문자열에서 특정 문자열로 끝나는지 확인, true flase로 반환

'hello javascript'.indexOf('java'); //6
// *indexOf() 메서드는 호출한 string 객체에서 주어진 값과 일치하는 첫 번째 인덱스 반환, 일치값이 없다면 -1 반환(왼쪽에서 부터 오른쪽으로)

'hello'.slice(2,4); //'ll'
// *slice() 메서드는 문자열의 일부를 추출, 새로운 문자열을 반환 str.slice(beginIndex[, endIndex])

'      hello    '.trim(); //'hello' *trim() 문자열 양 끝의 공백을 제거

'hello!world!javascript'.split("!"); //["hello","world","javascript"]
// *split() 메서드는 string 객체를 지정한 구분자를 이용해 여러개의 문자열로 나눕니다. 배열과 흡사
'hello'.split(""); //["h","e","l","l","o"];

'Hello JavaScript'.toLowerCase(); //'hello javascript'

'Hello JavaScript'.toUpperCase(); //'HELLO JAVASCRIPT'
```



### Boolean

Boolean 에는 `true` 와 `false` 밖에 없습니다.

아래는 `falsy`  (이 외에는 truthy로 계산된다.)

```javascript
0;
-0;
null;
false;
NaN;
undefined;
(빈문자열)"";
```



### null & undefined

`null` , `undefined` 모두 값이 없을을 의미하지만, 용도가 다르다.

#### undefined

`undefined`  는 어떤 변수의 값이 아직 할당 되어지지 않았음을 의미할때 사용.
함수도 return 문이 없을 경우 기본적으로 `undefined` 를 반환.

#### null

`null` 은 '없는값'을 나타낼 때 사용.

```javascript
var abc;
abc; //변수 abc가 선언만 되고 아직 값이 할당되어 있지 않으므로 undefined

var obj = {}
obj.prop; //undefined

typeof null; //object => 이렇게 나온다고 해서 null type 이 없는것이 아니다. typeof null이 object인 것은 실수라고 하기도 함. 
```

