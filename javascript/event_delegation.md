## Event Delegation

Bubbling vs Capturing

* **Event Capturing** : 거의 사용 할 일이 없다.
  상위 -> 하위 (부모 => 자신)

  ```js
  target.addEventListener('click', function() {
    console.log();
  }, true);
  // 마지막에 true를 쓰게 되면 캡쳐링으로 사용하겠다는 뜻
  ```

  

* **Event Bubbling** : 보통 버블링을 사용한다. (기본값)

  기본인 흐름은 버블링
  하위 -> 상위 (자신 => 부모) 점점 커진다.

  ```js
  target.addEventListener('click', function() {
    console.log();
  }, false);
  // 마지막에 false 쓰거나 생략한다면 버블링으로 사용하겠다는 뜻
  ```



캡쳐링 현상 먼저 ~ 타겟을 만나면 버블링~



이벤트의 흐름을 끊어주는 (다음 단계로 전파되지 않는다)

```js
e.stopPropagation(); 
```

