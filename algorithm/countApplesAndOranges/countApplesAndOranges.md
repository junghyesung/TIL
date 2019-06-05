# Algorithm problem 1

## countApplesAndOranges

1. 문제 이해

   사과와 오렌지 나무 사이에는 Vanilla House 가 있는데, Vanilla House의 영역은 `s`에서 `t`까지이다. 과일이 다 익으면 나무에서부터 D만큼 떨어진 곳에 떨어지게 되고, D가 음수 일 경우 나무의 왼쪽으로, 양수일 경우 나무의 오른쪽으로 떨어진다.

   사과나무와 오렌지 나무의 위치는 각각 `a`와 `b`의 위치에 있으며,

   m개의 사과와 n개의 오렌지가 익어서 떨어졌을 때, Vanilla House 영역 안에 떨어진 사과와 오렌지가 몇 개인지 배열로 반환한다.

   `apples` 와 `oranges` 에는 각각 떨어질 방향이 배열로 주어집니다.

   ```js
   * @param {number} s
   * @param {number} t
   * @param {number} a
   * @param {number} b
   * @param {number[]} apples
   * @param {number[]} oranges
   * @return {number[]}
   ```

   

2. 해결 방법

   주어진 apples배열, oranges배열에 각각 나무들이 위치해 있는 a와 b를 배열 하나 하나값에 더하여 apples와 oranges 배열에 대입한다. 

   그 후 각각의 배열에 있는 값들이 Vanilla House 가 위치해 있는 s 값과 같거나 큰지, t 값과 같거나 작은지를 if문으로 체크하고 true일 경우에 apple과 orange를 카운트하고 배열에 담아 리턴한다.

   

3. 코드 구현

   ```js
   function countApplesAndOranges(s, t, a, b, apples, oranges) {
     
     var appleCount = 0, orangeCount = 0;
     for (var prop1 in apples) {
       apples[prop1] = a + (apples[prop1]);
       if(apples[prop1] >= s && apples[prop1] <= t){
         appleCount++;
       }
     }
     for (var prop2 in oranges) {
       oranges[prop2] = b + (oranges[prop2]);
       if(oranges[prop2] >= s && oranges[prop2] <= t){
         orangeCount++;
       }
     }
     return [appleCount, orangeCount];
     
   }
   
   ```

   

   

4. 결과 분석

   배열에서의 for in 문은 현재 로직을 망치진 않지만 확인해봐야할 것이라는 조언을 받았다. 

   [참고문헌1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in)

   [참고문헌2](https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea)

   배열에서는 `for…in` 문을 쓰지 않도록 주의해야겠다.

5. 통과!

   

