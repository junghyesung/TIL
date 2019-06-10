# Prototypes in Javascript

## Prototype

원래의 형태 또는 전형적인 예, 기초 또는 표준



## Constructor

생성자 함수

`new`  키워드와 함께 쓰이는 함수, 함수 이름 첫글자를 대문자로 시작한다.

아래는 자바스크립트 엔진에서 기본으로 만들어주는 생성자 함수들

```js
new Array();
new Object();
new Function();
```

거의 모든 자바스크립트 객체는 생성자 함수를 이용해 만들어진다.
생성자 함수는 말 그대로 함수,
모든 함수는 객체,
고로 생성자 함수 또한 객체.

생성자 함수도 객체이므로 key / value를 가질 수 있다. 예를 들면 Object.prototype

모든 함수에는 prototype이 들어있다.



## Instance

하나의 경우, 사례

남편과 남편의 아내의 사랑의 결실 (하나의 사례, 출산(?))

```js
var a = new Array(); //하나의 배열 인스턴스를 만든것.

var obj = new Object();
남편? Object
아내? Object.prototype
남편과 아내의 결실? obj
obj는 엄마의 물건에 손을 댈 수 있다.
```

자바스크립트에서의 instance는 먼저 본인에게 있는지 확인 한 뒤, 없을 때 엄마것까지 확인을 하게된다.

=> 이런 현상을 `Prototype Chain` 이다.



#### Dunder Proto

: 모든 instance가 가지고 있는 속성
`__proto__` : prototype을 바로 접근할 수 있는

객체 지향 프로그래밍( OOP )에서 prototype chain 을 많이 사용하는데 면밀히 따지면 prototype chain은 상속이 아닌 Behavior Delegation 패턴이다.

