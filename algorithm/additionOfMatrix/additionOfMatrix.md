**문제 설명**

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

**제한 조건**

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

**입출력 예**

| arr1          | arr2          | return        |
| ------------- | ------------- | ------------- |
| [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
| [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |



**문제 해결 solution.js**

```js
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            if(!answer[i]) answer[i] = [[]];
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

//answer[i][j] if문을 적지 않으면 answer[i] 는 배열이 아닌 상태이므로 에러가 뜬다.
//if 문을 통해 answer[i]가 배열임을 알려주고 대입해야 함.
```



처음엔 아무생각 없이

```js
answer[i][j] = arr1[i][j] + arr2[i][j];
```

로 바로 대입했으나,  

```js
TypeError: Cannot read property '0' of undefined
```



**solution.js 수정** 

```js
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++) {
      answer[i] = [];
        for(let j = 0; j < arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

//if문을 적지 않고 j가 다 돌고 i 가 변경되면 가장 초기에 answer[i]를 배열로 설정해준 뒤 대입하는 방법이 있다.
```

