# Jquery 시작하기

자바스크립트 코딩은 어렵다.
jQuery 는 쉽다.
jQuery 는 자바스크립트 라이브러리로 자바스크립트로 반응형 웹을 만드는데 필요한 코드 수십 줄을 단 몇 줄로 끝내준다.

간단하게 jQuery 문법을 공부해보자.

## jQuery Syntax

* jquery 에서 우리는 html elements 를 선택하고 그 element 에 action 을 더할 수 있다.

* $(selector).action() 이 기본 문법이다. selector 를 찾아서 그 element 에 대한 액션을 하라는 의미이다.

* Examples
$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".


### Document ready event
그런데 보통의 jquery 는 아래와 같이 시작한다. ready 는 document loading이 끝나기 전에 코드가 실행되는 걸 막기 위해서 붙인다. element 가 생성되기도 전에 그 element 를 숨기려고 하면 error 가 날 거니까!!

```javascript
$(document).ready(function(){

   // jQuery methods go here...

});
```

## JQuery Selector 는 중요하다.

### element Selector

```$("p") ``` : element name 으로 select 할 수도 있다.






