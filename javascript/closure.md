# Closure

**클로저**란 어떤 함수가 본인이 선언된 당시에 주변 환경(변수 etc) 을 지속적으로 기억하는 것을 의미. 해당 함수가 실행되는 위치가 어디인지에 관계없다.

자바스크립트에서 모든 함수는 선언된 당시의 주변 환경을 기억한다. (선언 된 당시 부터 실행되기까지의 사이 상황을 기억한다)

```js
function say () {
  var a = 2;
  function log () {
    console.log(a);
  }
  return log;
}

var a = say();
a(); //2 선언된 위치를 기준으로 주변환경에서 변수 등을 기억한다.
```



클로저는 호출된 함수가 원래 선언된 렉시컬 스코프에 계속해서 접근할 수 있도록 허용한다. 

물론, 어떤 방식이든 함수를 값으로 넘겨 다른 위치에서 호출하는 행위는 모두 클로저가 작용한 예다.

```js
function foo() {
  var a = 2;
  function baz() {
    console.log(a); //2
  }
  
  bar(baz);
}

function bar(fn) {
  fn();
}
```



클로저를 설명하는 가장 흔하고 표준적인 사례 for 반복문

```js
for(var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

이 코드를 실행하면 '1', '2', …, '5' 까지 하나씩 뜰 것 같지만 '6'만 5번 출력되는 것을 볼 수 있다.

 setTimeout() 이 x초 뒤에 실행 될 땐 이미 반복문은 모두 순회 한 뒤 i 값이 6으로 변경 된 뒤에 종료 되었기 때문에 인자로 넘겨진 i === 6 이 다섯번 뜨게 되는 것이다.

생각한 데로 1, 2, 3, … 5 가 뜨도록 하고 싶다면, 

방법은 두가지가 있다.

1. 새로운 스코프를 추가해 반복할때 마다 값을 저장

```js
for(var i = 1; i <= 5; i++) {
  (function(a) {
    setTimeout(function timer() {
      console.log(a);
    }, a * 1000);
  })(i);
}
```



2. ES6 추가된 블록 스코프를 이용

```js
for(let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

