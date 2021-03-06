# Algorithm-problem 2

## maximumSubarraySum (가장 큰 부분배열의 합)



**a) 문제 이해**

주어진 배열에서 가장 큰 연속된 부분배열 합을 찾아야 한다.

예를들어, [-2, 1, -3, 4, -1, 2, 1, -5, 4] 에서 배열의 모든 연속된 원소를 더한다면 값은 1이 된다.

음수가 속해 있을 경우 많은 원소를 더한다고 합이 커지지 않는다.

가장 큰 연속된 부분배열의 합은 4 + (-1) + 2 + 1 ===  6 이다.

배열의 모든 원소가 음수라면 []가 가장 큰 합을 갖는 부분배열이 되고 함수는 0을 반환한다.



```js
* @param {number[]} arr
* @return {number}
```



**b) 해결 방법**

가장 큰 합을 담을 변수와, 연속되는 합을 담을 변수를 선언하고 초기값은 둘다 인자로 들어온 인덱스 0번째에 해당되는 값을 넣어주고 시작한다.

인자로 들어온 arr 배열에  for 문을 1번째 인덱스 부터 돌면서 0번째 인덱스와 1번째 인덱스를 더한 값과 1번째 인덱스의 값을 비교해 큰값을 연속되는 합의 변수에 담는다. 그 후 연속되는 합을 담은 변수와 가장 큰 값을 담은 변수를 비교해 둘 중 큰 값을 가장 큰 값을 담은 변수에 할당한다.

for문이 끝난 뒤에 가장 큰 합을 담은 변수를 리턴한다.



**c) 코드 구현**

<script src="https://gist.github.com/junghyesung/d3858f8c238e63d1a2a3b98a0f629514.js"></script>



**d) 결과 분석**

```js
if(!arr.length) max = 0;
```

0은 falsy 값이므로 이렇게 써주는 게 더 좋을 듯 하다.



**e) 통과!**