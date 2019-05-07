# Javascript

## Primitive vs Reference

### Types in Javascript

- Boolean
- Number
- String
- Null
- Undefined
- Object

**javascript 의 모든 값을 두가지로 나눈다면, truth, falsy로 나눌수 있다** 
그리고,
**javascript  에서 모든 값은 그 성격에 따라 크게 두 가지 종류로 나눌 수 있다.**



### Primitive 

: 원시적인, 미개한

* Boolean
* String
* Number
* Null
* Undefined



> 변수라는 존재를 작은 포스트잇이라고 생각해보자.

> a 변수(포스트잇)에 7이라는 숫자를 적고,  화이트보드에 붙여 놓으려고 하니, 이미 7이라는 숫자가 적힌 다른 b 변수(포스트잇)가 있었다. 이 두개의 포스트잇 자체만으로 비교해본다면 두개의 값은 같다.
> a 변수를 6으로 바꾸려고 한다면, 7이 적혀있는 포스트잇은 버려지고, 새로운 포스트잇에 6을 적어 a 변수와 매칭 시키게 되는 것이다.
> 이때, b 변수(포스트잇)은 a 변수(포스트잇)과 똑같은 값이라고 치부되었었지만, a가 바뀌어도 b는 아무런 영향을 받지 않는다.

=> 이런 성질의 값들을 원시값이라고 부른다.



### Reference

: 참조

* Object(함수와 배열도 포함된다)

> 만약 학생들의 이메일 주소를 정리해둔다고 생각해보자.
> 전부 정리하기에는 포스트잇이 너무 작으므로 큰 종이에 한번에 정리하려고 한다. 
> 그리고 그 종이를 책상 두번째 서랍에 보관해두었다. 
> 이때 포스트잇에는 종이가 있는 위치값을 적어두었다. (emailList 라는 변수(포스트잇)에 책상 두번째 서랍 이라는 위치값을 적어둔 것)
> 혹시 몰라, 이메일 주소를 정리해둔 종이를 복사해, 책상 세번째 서랍에 넣어 두고 새로운 포스트잇에 종이가 있는 위치값을 적어두었다. (emailList2 라는 변수(포스트잇)에 책상 세번째 서랍 이라는 위치값을 적어둔것)
> emailList와 emailList2 가 가지고 있는 이메일 주소는 동일하지만, 두 개가 포스트잇에 적혀있는 정보는 다르다. 두 개의 포스트잇에 적혀있는 정보는 위치값을 참조해서 넣어둔 것.

object를 만들어서 어떤 변수에 할당하게 되면 , 컴퓨터의 메모리라는 공간에 새롭게 만들어지게된다. 
이때 변수에 담기게 되는 것은 위치값을 참조해서 담기게 되는 것이다.
생김새가 같더라도 위치값이 다르게 될 수 있다는 것.



```javascript
var list1 = [1, 2, 3]; //[]이렇게 대괄호를 써서 만들었다는 것은 새롭게 배열을 만들었다는 것을 의미한다.
var list2 = [1, 2, 3];

list1 === list2; //false
/* 
list1과 list2는 새롭게 배열을 만들어 배열이 저장된 위치값을 참조해서 각각 가지게 되는 것이므로 배열안의 값은 같지만 변수가 담고 있는 위치값이 서로 다르다.
자바스크립트에서는 객체를 만들게 되면 항상 새로운 위치에 저장하게 된다. 그러므로 위치는 항상 다를수 밖에 없다.
*/

var list3 = [1, 2, 3]; //변수를 만들고 변수가 담긴 위치값이 list3에 담겨있다.
var list4 = list3;  //그리고 list4에 list3의 위치값을 공유한것.
list3 === list4; //true
```

```javascript
var obj1 = {num: 1}; //새로운 객체를 만들어서 obj1에 위치값을 담는것

var obj2 = obj1; //obj2에 obj1이 가지고 있는 위치값을 공유, 아래 변수들도 모두 동일.
var obj3 = obj2;
var obj4 = obj3;
//결국 obj1~4 모두 같은 위치값을 가지고 있으므로 같은 곳을 바라보고 있다.

obj1.num++; 

console.log(obj4); //{num: 2}

var arr1 = [1, 2, 3];
var arr2 = arr1;
var arr3 = arr2;
var arr4 = arr3;

arr1.push(4);

console.log(arr4); //[1, 2, 3, 4]
```



```javascript
var child1 = { age : 3 };
var child2 = { age : 5 };
var mother = {
  age : 55,
  children : [child1, child2] //child1 변수의 위치값, child2 변수의 위치값
};

child1.age++;
child2.age++;

console.log(mother.children); //[{ age : 4 },{ age : 6 }]

```



```javascript
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];

var arr3 = arr1; //arr1이 가지고 있는 위치값을 arr3에게 할당, 대입

arr1 = arr2; //arr2의 위치값을 arr1에게 대입

console.log(arr1 === arr3) //false
/*
자바스크립트는 인터프리터(interpreter) 언어로 위에서 부터 읽어 내려오는 형식이므로,
arr3 에 담기는 건 arr1 배열이 담겨 있는 위치값이고, 이후 arr1에는 arr2의 위치값으로 재할당 된다.
이때 arr3은 arr1이 변경되기 전 위치 값을 가지고 있게된다.
*/
```

