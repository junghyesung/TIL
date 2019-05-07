# Javascript

## Javascript Grammar 2

### Operators

#### 논리연산자

`true` 와 `false` 를 반환하는 값이 아니다. `truthy` , `falsy` 와는 연관이 있다. 
`||` 는 둘중 하나만 truthy면 되고, `&&` 는 둘다  truthy.
`||` 는 둘중 하나만 truthy가 되면 되므로 앞의 값이 truthy라면 뒤의 값을 확인하지 않고 앞의 true값으로 반환한다.
`&&` 는 둘 다 truthy 여야 하므로 앞의 값이 true이고 뒤의 값도 true 라면 뒤의 값으로 반환하고, 앞의 값이 falsy 라면 이미 이 식은 성립할 수 없으므로 falsy 였던 앞의 값을 반환한다.

```javascript
true || false; //true
true && true; // true
var a = " " && "" && 333; // ""
var b = "" || " " || 333; // " "

function foo(){
  console.log('1');
}
var c = true || foo() //true를 반환, bar() 함수는 실행되지 않는다.
```


**[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90(Logical_Operators)) 에서 표를 통해 정확하게 확인 가능하도록 되어있다.**

> `expr1 && expr2`  : `expr1`을 `true`로 변환할 수 있는 경우 `expr2`를 반환하고, 그렇지 않으면 `expr1`을 반환합니다.
> `expr1 || expr2` : `expr1`을 `true`로 변환할 수 있으면 `expr1`을 반환하고, 그렇지 않으면 `expr2`을 반환합니다.
> `!expr` : 단일 피연산자를 `true`로 변환할 수 있으면 `false`를 반환합니다. 그렇지 않으면 `true`를 반환합니다.



#### 연산자 우선순위

[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84) 에서 자세히 알아볼 수 있다.

`||`  <  `&&` 

```javascript
true || true && false; //true
true || false && false; //true

//우선순위를 알아둘 필요는 있지만 우선으로 비교되어야 할 부분은 괄호로 묶어서 명확하게 알려줄 수 있도록 하자. 괄호가 우선순위가 가장 높다.
true || (true && false); //true
(true || false) && false; //false

//삼항연산자(ternary operator) : 삼항 연산자가 ||, && 보다 우선순위가 작다.
true ? 1 : 2; //1
false ? 1 : 2 //2
```



### Function

```javascript
function add(x, y){ //x,y = Arguments/Parameters (매개변수)
  var result = x + y;
  return result;
}
add(2,3); //호출, 5 반환 / 2,3 = argument (인자)
```

함수 내부의  function body가 실행되려면 반드시 함수를 호출해야만 한다.


#### Arguments

**arguments** 객체는 함수에 전달된 인수에 해당하는 `Array` 형태의 객체입니다.

```javascript
function add(x){
  console.log(arguments);
  return x + 1;
}
var result = add(1); 
console.log(result); // Arguments [1, callee: ƒ, Symbol(Symbol.iterator): ƒ], 2
//arguments는 배열과 비슷한 형태로 index값을 가지며, length도 사용가능하다  == "유사배열"
//arguments[1], arguments.length;
```



#### Return

함수 실행에 대한 결과값을 결정하며, return 을 만나면 함수 실행을 종료시킨다.

```javascript
function add(x, y) {
  console.log('a');
  return x + y;
  console.log('b');
}
add(1,2); //"a", 3
//return 문 뒤에 나오는 console.log('b'); 는 함수가 종료되어 실행되지 않는다.



function a(){
  return function b(){}
}
console.log(a()); //function b(){} 가 들어간다.



function add1(x, y){
  return function bar(){};
}
add1() || 3; //function bar (){} 반환, add() 자리에는 return 뒤에 있는 bar 함수를 실행시키지 않았으므로 function bar(){} 함수 자체가 들어가는데, function 은  truthy 이므로 function이 반환된다.
add1()() || 3; //3, add()자리에는 function bar 가 들어가고 bar 함수를 ()실행했으므로 bar 함수의 리턴값이 들어가게 된다. bar 함수에는 return 값이 없으므로 undefined, undefined || 3 으로 비교한 것이므로 3이 반환된다.



function add2(x, y){
  return function bar (){
    return x + y; //Closure
  }
}
var aa = add(2,3)();
console.log(aa); //5



function add3(x, y){
  for(var a = 1; a < 5; a++){
    if(a === 2){
      return;
    }else {
      console.log(a);
    }
  }
}
add3(); //1
```



### Control Flow

#### Conditional Statement (조건문)

: 경우의 수에 대해 생각하는 것, 조건들을 생각하는 것


#### if…else

조건에 따라 코드를 실행시키거나 실행시키지 않을 수 있다.

```javascript
if (result > 4) {
   //괄호 조건을 만족했을 때 이 영역의 코드가 실행.
   alert('a');
}else{
  //위의 조건을 만족 하지 않을 때, 즉 결과값이 false 이면 이 영역의 코드가 실행.
   alert('b');
}
```

* `else` 가 필요 없는 경우 생략 가능하다.
* 세 개 이상의 경우의 수를 `if…else` 를 통해 표현하려면, 중첩시키면 된다.
  `if…else`  구문이 단순히 중첩한 경우라면, `else` 의 중괄호를 생략할 수 있다.

```javascript
 if (result >= 5) {
    alert('당신이 이겼습니다!');
  } else if (result >= 3) {
    alert('비겼습니다.');
  } else {
    alert('당신이 졌습니다.');
  }
```



#### switch

하나의 변수에 대해 많은 경우 수가 있을 경우 `switch` 구문을 사용하면 보기좋게 만들 수 있다.

```javascript
function color (english){
  var result;
  switch (english){
    case 'red' :
      result = '빨강';
      break;
    case 'blue' :
      result = '파랑';
      break;
    case 'purple' :
      result = '보라';
      break;
    default :
      result = '일치하는 색깔이 없습니다.';
  }
  return result;
}
```



#### 반복문 (Looping Statement)

* while문

* for 문

  

##### while 문

```javascript
var i = 0; //초기값

while (i < 5) {
  //괄호안의 값이 truthy 인 경우 반복해서 안에 있는 값을 실행
  console.log('현재 i의 값 : ' + i);
  i++;
}

```

`while`  문의 경우 잘못 작성하면 무한 루프에 빠질 수 있으므로 주의해야 한다.



##### for 문

```javascript
for(var i = 0; i < 5; i++) {
  console.log(i);
} // 0,1,2,3,4
```

  for문 괄호 안에는 세가지 세션이 존재한다. ( var i = 0;  ,  i < 5;  i++ )


```javascript
var i = 0;
function init () {
  console.log('me');
}
function isValid () {
  console.log('you');
  return i <= 2;
}
function update () {
  console.log('we');
  i++;
}
for(init(); isValid(); update()) {
  console.log(i);
}
```

> 위와같이 작성했을 때 for문에서 순서대로 어떻게 뜰 것같은가?

1. for 문 괄호안에 가장 처음 작성 되어 있는 init() 은 for 문이 실행 될 때 가장 처음 실행이 되는 부분. 최초의 일회성.
2. for 문 괄호안에 두번째로 작성 되는 부분 isValid() 은  conditional 구절, 조건을 확인하는 구절. `truthy` 인지  `falsy` 인지 확인하고  for문을 안에 있는 문을 실행 할지 말지를 결정한다.
3. for문이 실행이 된 다음 다시 for문을 돌리기 전에 괄호 안의 마지막 구문을 실행한다.  (update() 부분)
4. 그 뒤에  for문 두번째 구문을 다시 확인한다. for문 을 다시 실행할지 말지를 결정해야 하므로.
5. 2 - 4번이 계속 반복 되다가 4번에서 다시 확인 할 때 falsy가 되면 for문이 종료된다.

 콘솔에 찍히게 되는 값은

 1) 'me'  2)  'you'  3)  0  4) 'we' 5) 'you' 6) 1  7) 'we'  8) 'you'  9) 2  10) 'we'  11) 'you'





> 코드는 사람이 보는 것이기 때문에 알아보기 쉽도록 작성되어야 한다. (Clean Code)