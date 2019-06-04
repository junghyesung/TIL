# Debugging

디버깅 : 프로그래밍 과정중에 발생하는 오류나 비정상적인 연산, 즉 버그를 찾고 수정하는 과정



**개발자도구**

개발자 도구를 열어 디버깅을 할 수 있다.

html, css가 문제 일 경우 elements 탭에서  style을 확인해볼 수 있다.

Network 탭 이용 - 탭을 누르고 새로 고침을 해보면 file들을 로딩시킨 정보들이 뜨는 곳



`debugger`

개발자도구가 열려있는상태에서만 확인가능, debugger를 작성해놓은 곳에서 함수가 멈춘다.

내가 확인 하고자 하는 곳보다 실행되기 전에 작성해야한다.

```js
//fizzbuzz
//arg: n;
//1부터 n까지 콘솔로그, 3의 배수: 'fizz', 5의 배수: 'buzz' 3과 5의 공배수 : 'fizzbuzz'

function fizzbuzz (n) {
  for(var i = 1; i <= n; i++) {
    debugger;
    if(i % 3 === 0) {
      if(i % 5 === 0) {
        console.log('fizzbuzz');
      }else {
        console.log('fizz');
      }
    }else if (i % 5 === 0) {
      console.log('buzz');
    }else {
      console.log(i);
    }
  }
}

```

| ![debugger img1](https://user-images.githubusercontent.com/40348757/58889027-3d167d80-8723-11e9-9979-cc05b7c80792.png)|  : 'resume', 재생 , 다음 debugger 가 있기 전까지 (없다면 함수 정상 실행)

| ![debugger img2](https://user-images.githubusercontent.com/40348757/58889028-3daf1400-8723-11e9-9eb1-87138d2b5f25.png)| : 'step over' 다음 구문으로 넘어감, 다음 실행문

| ![debugger img3](https://user-images.githubusercontent.com/40348757/58889029-3daf1400-8723-11e9-94e6-892bdaf0297b.png)| : 'step into' 다음 줄에 함수 호출이 포함되어 있다면 *Step Into*는 해당 함수로 점프하고 첫 줄에서 멈춤



Scope창은 지금 속한 스코프에 있는 변수들의 현재 값 등이 보여짐.

내가 멈추고자 하는 조건, 부분이 있을 경우 줄번호를 클릭하면 **breakpoint**를 만들 수 있고, 줄번호를 우클릭 하고 **Add conditional breakpoint** 를 누르면 확인하고 싶은 조건문을 넣을 수 있으며, 실행하면 그 부분으로 넘어가서 멈추게 된다.

값이 무엇인지 확인하고 싶은 부분을 드레그 하면 값이 뜬다.

[google에 더 자세하게 나와있다](https://developers.google.com/web/tools/chrome-devtools/javascript/step-code?hl=ko)



*debugging을 할때 가장 중요한건 정신적인 편안함!! 멘탈!*

*하나하나 확인하고 들여다보는 습관 들이는게 중요하다*

