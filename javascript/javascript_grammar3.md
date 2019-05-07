# Javascript

## Javascript Grammar 3

### Object

중괄호를 썼다는 것 : 객체를 하나 새로 만드는 것을 의미

```javascript
var obj ={
	key : value;
}
```

`key` 는 항상 내부적으로 문자열로 인식이 된다. 

```javascript
for (var prop in obj) {
  console.log(obj);
  console.log(prop); //key가 ''문자열로 들어옴
}
```

`for in` 문 : obj가 가지고 있는 key 개수 만큼 반복해준다. var prop이  key(프로퍼티)를 담는다. 여기서 prop은 어떤 변수명이든 상관x

```javascript
var kiyo = 'kiyo';
var obj = {
  name : kiyo //value값을 kiyo라는 변수로 할당해도 된다.
}
```

```javascript
var kiyo = [1,2,3];
var obj = {
  name : kiyo
}

var obj2 = {
  name : {
    a: {
      b: {
        c: []
      }
    }
  },
  age : function (){}
};
```

객체 key에는 문자가 들어가지만, 
value에는 무슨 값이든 거의 다 들어갈 수 있다. 내부적으로 중첩 시켜서 넣는 것 또한 가능하다.
**객체의 키값이 있고 그 value값이 함수로 할당되어 있을 경우 method라고 한다.** `obj2.age();`

```javascript
var kiyo = [1,2,3];
var obj = {
  'first name' : kiyo, //띄어쓰기를 해야한다면 ''로 넣어야 하며, 거의 사용하지 않는다.
	firstName : kiyo //보통은 camel case로 한다.
}
```

```javascript
var kiyo = [1,2,3];
var a = 'firstName';
var obj = {
  a : kiyo
}
obj.a; //여기서 obj의 key a는 변수 a와는 전혀 다름, a라는 문자 키값으로 읽어옴.
console.log(obj[a]) //변수 a를 이용해 key를 읽어오고 싶을 경우 [대괄호]를 이용한다.
//변수 a는 'firstName' 이므로 obj['firstName'] 로 불러오게 되는데 obj객체에는 firstName이라는 키가 없기때문에 undefined로 반환.

//a라는 변수를 이용해서 key값에 'firstName'을 넣고 싶다면,
var obj = {
  [a] : kiyo //[대괄호]를 이용하면 된다.
}
console.log(obj); // {firstName: [1,2,3]}

```

**속성 접근자**
`Dot notation`  :  obj.a 와 같이 `.` 뒤에 키를 입력함으로 그 키의 값을 읽어올 수 있다.
`Bracket notation` : `obj['a']` 이것 또한 obj의 a key의 value값을 읽어오는 것이다.

`delete` , `in`  과 같은 연산자를 이용해서도 객체에 대한 정보를 읽고 쓸 수 있다.

`deleate` : 객체의 속성을 제거합니다.  `delete object.property`
`in` : 속성(key) in 객체명 , boolean으로 반환, 객체 안에 속성이 있는지 없는지 확인



### Array

: 배열에는 index 가 주어진다. 객체 안에 배열이 속해 있는 것. (key 값이 index 숫자로 주어지는 것이다)

```javascript
var arr= [1, 2, 3];
console.log(arr[0]); //1
console.log(arr['0']); //1 , 객체 안에 속해 있는 것이기 때문에 객체처럼 불러올 수 있다. 하지만 dot notation으로는 불가능.
```



```javascript
var arr = [{1 : 1, 2: function foo (){}}, function bar (){}];
//배열에는 어떤 값이든 들어갈 수 있다.

arr[1]; //function bar (){}
arr[1](); //arr[1]이 bar 함수 자체이므로 원한다면 실행도 가능하다.
```



**Updating**
: 배열은 해당 인덱스에 할당도 가능하다. 
  문자열은 인덱스값으로 불러올 수 있었지만, 할당은 불가능(중간에 끼워넣을 수 없음)

```javascript
var arr = [false, true, false];
arr[1] = false;
console.log(arr) // [false, false, false]
```



**method**
: 메소드 공부할 때는 설명, 매개변수, 반환값을 항상 확인해야 한다.

```javascript
array.push(); //array 배열안의 맨 끝에 (괄호안의 값이) 추가된다.

var arr = [1, 2, 3];
arr.push(4);
console.log(arr); //[1,2,3,4]
console.log(arr.push(5)); //5, push는 array에 값을 추가 하고, 배열의 새로운 length값을 반환한다.

array.pop(); //array의 마지막 요소를 제거하고 제거된 요소를 반환한다.
var arr1 = [1, 2, 3];
console.log(arr.pop()); //3
console.log(arr); //[1, 2]
```

