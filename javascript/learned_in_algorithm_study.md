**\- 새롭게 안 사실 : **

\* object 에 키값이 number 일 경우 어차피 변수로 불러올수 없기때문에 `obj["number"]`로 적지 않고, `obj[number]` 로 적어도 실행이 된다. 수업시간때 켄님이 말씀하신듯.. (배열이 이 같은 경우이다.)

 \* object 의 value값이 배열일 경우, `object[key].push()` 가능하다. object[key] 의 자리에는 [] 배열이 들어가기때문  (이것도 배열과 비슷한 경우인듯.)

\* `hasOwnProperty()` : prop(key) 이 있는지 확인하는 object 메서드 / `true` , `false` 로 반환
									   `object.hasOwnProperty(prop)`  ==> `in` operator와 비슷?