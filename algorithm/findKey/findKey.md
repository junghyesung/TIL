# Algorithm-problem 1

## findKey(컵 돌리기 게임)



**a) 문제 이해**

세개의 뒤집힌 컵 중 한 개의 컵 안에 열쇠가 있다.

컵의 위치가 뒤섞이고, 컵의 교환이 끝났을 때 열쇠가 들어있는 컵을 찾아야 한다.

컵의 위치는 인덱스로 표현되며, 키가 들어있는 컵의 인덱스와 교환된 컵의 인덱스를 나타내는 배열(swaps)을 입력으로 받는다.

```js
* @param {number} start
* @param {number[]} swaps
* @return {number}
```



**b) 해결 방법**

먼저 키가 들어 있는 인덱스 start가  swaps 배열 어디에 있는지 찾는다.
(배열 안의 값을 확인 해야 하므로 for문을 돌리고 그 안에 if문으로 start 의 값이 swaps배열 값과 같은 지점이 어디인지를 찾는다.) 
swaps는 이차원배열로 swaps[i]의 값에는 인덱스가 0과 1밖에 없어 따로 for문을 돌리지 않고 비교

if 문이 true일 경우 start의 값을 `swaps[i][0]` 과 같다면  `swaps[i][1]` 로,  `swaps[i][1]` 과 같다면  `swaps[i][0]`  으로 변경해준다.



**c) 코드 구현**

<script src="https://gist.github.com/junghyesung/7ea39dd4cf6a70db0a2d8d3df14a9b29.js"></script>



**d) 결과 분석**

start에 대입하는 부분이 반복되어 가독성이 떨어진다 생각했는데,

Ken님이 정확히 짚어내셔서 코드를 조금 다른 방식으로 가독성 좋게 수정해주셨다.

```js
start = swaps[i][0] === start ? swaps[i][1] : swaps[i][0];
```



**e) 통과!**