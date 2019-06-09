# this

`this` 의 값은 `this` 를 사용하는 해당 함수를 어떤 방식으로 실행하느냐에 따라 결정된다.

함수 내용만 보고 `this` 가 무엇인지 확인할 수 없다.


**this는 4가지 실행 방식에 따라 달라진다 **

1. **일반 함수 실행 방식** 
   1-1. **in non-strict mode**

   ```js
   function foo () {
     console.log(this); // this === window(global object)
   }
   
   foo();
   ```

   

   1-2. **in strict mode(엄격 모드)**

   [MDN strict mode](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

   ```js
   'use strict';
   
   var name = 'ken';
   
   function foo () {
     console.log(this.name); // this === undefined
   }
   
   foo();
   ```

   

2. **Dot Notation**

   ```js
   var age = 100;
   var ken = {
     age: 35,
     foo: function foo () {
       console.log(this.age); // 35
     }
   }
   
   ken.foo(); //foo 를 실행한 곳, foo() 앞에 . 이 있으므로 dot notation 실행방식으로 ken이 this가 된다.
   ```

   dot notation 을 사용해서 함수를 호출 했을 경우, 점(.) 앞에 있는 객체가 this가 된다.

   

3. **Function.prototype.apply,  Fuction.prototype.call, Function.prototype.bind**
   : this를 지정할 수 있다.

   ```js
   var age = 100;
   function foo () {
     console.log(this.age);
   }
   var ken = {
     age: 35,
     log: foo
   };
   
   foo.call(ken); //call은 this값을 ken으로 지정하고, foo라는 함수를 실행시킨다.
   ```

   `call()` : call 메서드는 인자를 무제한으로 받을 수 있다. 제일 처음 값은 this의 값. call(ken, 1, 2, 3)

   `apply()` : 인자값을 두개만 받는데, 제일 처음은 this값, 나머지는 [배열]. 
   배열 안에 함수 인자로 넣을 값을 넣으면 된다. (배열안에서 무제한으로 줄 수 있다)

   `bind()` :  call과 apply와 유사하지만 조금 다르다.

   **`bind()`** 메서드는 `this` 키워드를 주어진 값으로 설정하고, 앞쪽의 매개변수도 자신의 인자를 사용해 미리 순서대로 채워놓은 새로운 함수를 반환합니다.

   ```js
   var age = 100;
   function foo () {
     console.log(this.age);
     console.log(arguments);
   }
   var ken = {
     age: 34
   };
   var bar = foo.bind(ken, 1, 2, 3);
   bar(1,2,3,4,5); //34, Arguments(8) [1, 2, 3, 1, 2, 3, 4, 5]
   
   ```

   

4. **`new`  keyword**

   : new 를 이용해서 함수를 실행할 경우, 함수 안에 있는 this의 초기값은 빈 객체가 된다.
   new 를 썼을 때 함수 안에 return 문이 있든 없든 this값이 return 된다. **(return 값이 객체인 경우 제외)**

   ```js
   function Person () {
     console.log(this);
   }
   
   new Person(); //Person {} 빈 객체의 this가 리턴된다.
   
   
   function Person (name) {
     this.name = name;
     console.log(this);
   }
   
   var ken = new Person('ken');
   console.log(ken); //Person {name: "ken"}
   ```

   