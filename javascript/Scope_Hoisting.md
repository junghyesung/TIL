# Javascript

## Scope & Hoisting

### Scope

`scope` : 범위,  변수들의 접근성을 결정하는

```javascript
var a = 1;

function foo (){
  var b = 2;
  
  console.log(a);
  console.log(b);
}
foo();
console.log(b); //b에 접근할 수 없음, 함수 안에서 b를 선언, 할당했기때문에 함수 안에서만 사용가능
```

'b' 변수는 foo함수 내부에서 선언되었기 때문에 foo함수 내부안에서만 사용 범위가 국한됨
**함수 내부에서 외부에 있는 변수에 접근할 수 있지만, 외부에서 함수 내부에 있는 변수에는 접근 불가능**

현재 스코프에서 가장 가까운 변수를 찾고 없으면 외부로 접근하게 된다.

```javascript
var a = 1;

function foo (){
  var a = 2;
  console.log(a); //2
}
foo();
console.log(a); //1
```



변수를 만들게 되면 변수는 함수의 범위 내에 국한되게 된다.

```javascript
function foo(){
  var a = 10;
  
  for(var i = 0; i < a; i++){
    console.log(i); //0~9
  }
  
  console.log(i); //10
  //var i가 속하는 범위는 함수 안이기 때문에 접근가능. for문에서는 상관없음
  //일단 let, const 를 제외하고 var 로 변수를 만들었을 경우에만
}
foo();
```



####  즉시 실행 함수 (Immediately Invoked Function Expression)

**= ( IIFE )**

```javascript
(function (){})(); //함수를 선언함과 동시에 함수를 실행
```

: 고의적으로 함수를 만들어서 스코프가 생김, 변수를 보호하는 차원 등의 이유로.



#### Global Scope (Global Variable, Global Object)

: 전역

```javascript
//global scope(제일 최상단, 바깥에 노출 되어 있는 범위, 항상 존재함)
var a = 1; //global variable

function foo (){
  //foo function scope
  console.log(a);
  
  function bar (){
    //bar function scope
    b = 1; //b는 var로 선언하지 않았기때문에 가장 최상단 global scope에 존재하게됨
    console.log(b); 
  }
  bar();
}
foo();
```

*보통 상황에서는 글로벌스코프를 사용을 자제하는 게 좋다.



### Hoisting

: 속한 scope 안에서의 최상단으로 선언을 끌어올림
: 자바스크립트도 전처리과정이 아예 없진 않다,  호이스팅이 그걸 알려주는 예

```javascript
console.log(a); //undefined
var a = 1;
console.log(a); //1

//아래와 같다고 볼수있다.
var a;
console.log(a);
a = 1;
console.log(a);
```



**함수 표현식(변수 선언) & 함수 선언식** 
 => 둘중 하나만 선택해서 쭉 통일을 해야함

* `함수 표현식(변수 선언) ` : 변수선언이 호이스팅 되듯이 변수선언이 최상단으로 호이스팅됨

  ```javascript
  d(); //실행되지 않는다.
  
  var d = function (){
    console.log("d");
  };
  
  d(); //"d"
  
  //아래와 같다고 볼 수 있다.
  var d; //변수 d만 호이스팅 되어 끌어올려짐, undefined
  
  d(); //현재 d에는 undefined가 들어있으므로 실행할수없음. error: d is not a function
  
  d = function (){
    console.log('d');
  };
  
  d();
  ```

  

* `함수 선언식` : 함수 자체가 호이스팅이 된다.

  ```javascript
  j();
  
  function j (){
    console.log('j');
  }
  
  j();
  ```

**return 문은 개행이 안된다 줄바꿈 하는 순간 종료**

