<br></br>
# Jquery Tutorial


---
<br></br>
<br></br>
## Jquery란?

jQuery는 자바스크립트의 생산성을 향상시켜주는 자바스크립트 라이브러리 입니다. 

라이브러리란 자주 사용되는 로직들을 재활용,유통 가능하도록 만든 로직들의 묶음을 의미합니다. 
자바스크립트의 세계에는 많은 라이브러리들이 있습니다. 
prototype, jQuery, YUI 등등
구글트랜드로 검색을 해보니 현재는 jQuery가 가장 많은 사용자를 가지고 있는 것 같습니다.
jQuery를 이용하면 순수한 자바스크립트로 코딩하는 것 보다 10배 이상 생산성을 높일 수 있습니다. 

또 jQuery는 파생된 라이브러리들을 가지고 있는데요. 
jQuery UI는 jQuery기반의 GUI 라이브러리입니다.
이것을 이용해서 윈도우 에플리케이션과 같은 기능성의 UI를 만들 수 있습니다.

최근에는 jQuery Mobile라는 이름의 모바일 라이브러리를 출시해서 
모바일용 웹에플리케이션을 만드는데도 많은 도움을 주고 있습니다.
<br></br>
<br></br>

## Adding jQuery to Your Web Pages

* Download the jQuery library from jQuery.com
* Include jQuery from a CDN, like Google

(저는 다운로드받지 않고 아래 태그를 헤드 태그 안에 추가했습니다.)

### jQuery CDN
If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network).

Both Google and Microsoft host jQuery.

To use jQuery from Google or Microsoft, use one of the following:

* Google CDN:
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

* Microsoft CDN:
```javascript
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
```


<br></br>
<br></br>
## jQuery Syntax

1. jquery 에서 html elements 를 선택하고, 
2. 그 element 에 action 을 준다.

### $(selector).action()
 
 * selector 를 찾아서, 그 element 에 action을 적용하라는 의미입니다.

### Examples
* $(this).hide() - hides the current element. 

* $("p").hide() - hides all p elements.

* $(".test").hide() - hides all elements with class="test".

* $("#test").hide() - hides the element with id="test".


### Document ready event
그런데 보통의 jquery 는 아래와 같이 시작합니다.<br></br>
ready 는 document loading이 끝나기 전에 코드가 실행되는 걸 막기 위해서 붙이는 action입니다. (element 가 생성되기도 전에 그 element 를 숨기려고 하면 error 가 나겠죠?)

```javascript
$(document).ready(function(){

   // jQuery methods go here...

});
```


모든 jQuery method들은 이제 이 ready event 안에 갇힌 형태로 표현됩니다.

<br></br>
<br></br>
## JQuery Selector

1. jQuery selector를 통해 HTML elements를 선택하고 조작할 수 있습니다.
2. HTML elements를 name, id, class, type, attributes, value 등의 여러가지 구별기준에 기반하여 "찾습니다."
3. 모든 jQuery selectors는 $와 ()로 시작합니다 : **$()**

### element Selector

```$("p") ``` : 모든 p element들을 select한다. (이름으로 선택하기)<br>[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_p)

### #id Selector

id는 해당 페이지에서 유일하므로, #id selector는 단 하나의 유일한 element를 선택하고 싶을 때 쓰입니다. 

```$("#test")``` : id가 test인 element를 select한다.<br>[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_id)

### .class Seletor

해당 클래스에 해당하는 element를 선택할 때 쓰입니다. 

```$(".test")```: class가 test인 element를 select한다.<br>[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_class)


### "More" Examples of jQuery Selectors...

* ```$("*")``` :	Selects all elements [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_all2)<br></br>
* ```$(this)```:	Selects the current HTML element	[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_this)<br></br>
* ```$("p.intro")```:Selects all p elements with class="intro"	<br></br>
* ```$("p:first")```:	Selects the first p element	<br></br>
* ```$("ul li:first")```:Selects the first li element of the first ul	[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_ullifirst)<br></br>
* ```$("ul li:first-child")```:	Selects the first li element of every ul	[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_ullifirstchild)<br></br>
*  ```$("[href]")``` :	Selects all elements with an href attribute	[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_hrefattr)<br></br>
* ```$("a[target='_blank']")```:	Selects all a elements with a target attribute value equal to "_blank"[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_hrefattrblank)<br></br>
* ```$("a[target!='_blank']")```:	Selects all a elements with a target attribute value NOT equal to "_blank"	[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_hrefattrnotblank)<br></br>
* ```$(":button")```:	Selects all button elements and input elements of type="button"[해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_sel_button2)	<br></br>
* ```$("tr:even")```:	Selects all even <tr> elements	<br></br>
* ```$("tr:odd")```:	Selects all odd <tr> elements<br></br>

<br></br>
<br></br>
## Functions In a Separate File
css파일을 따로 만들어서 head tag에 넣어주었던 것과 같은 방식으로 적용합니다. 

```javascript
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
</script>
<script src="my_jquery_functions.js"></script>
</head>
```
<br></br>
<br></br>
## jQuery Event Methods

### What are Events?
웹페이지가 반응할 수 있는 방문자의 action을 event 라고 합니다. (마우스 움직임, 버튼 선택, 클릭 등등)
<br></br>
The term "fires/fired" is often used with events. Example: "The keypress event is fired, the moment you press a key".
<br></br>
자주 쓰이는 DOM(Document Object Model) events:

Mouse Events|Keyboard Event|Form Events|Document/Window Events
----|----|----|----
click|keypress|submit|load
dblclick|keydown|change|resize
mouseenter|keyup|focus|scroll
mouseleave|None|blur|unload

### jQuery Syntax For Event Methods

1. 제이쿼리에서는 대부분의 DOM event들이 같은 제이쿼리 method를 사용합니다. 
2. 예를 들어 모든 문단의 클릭 event에 assign하기 위해서는  ```$("p").click();``` 이런식으로 하면 됩니다. 
3. 그 다음은 event가 fire되었을 때 (점화되었을 때? 실행되었을 때?) 무슨 일이 뒤이어 일어날지를 정의하는 것입니다.  ```$("p").click(function(){
  // action goes here!!
}); ```

### 주로 쓰이는 jQuery Event Methods

* click() : 유저가 HTML element를 클릭했을 때 해당 funtion이 실행됩니다. 
```
$("p").click(function(){
    $(this).hide();
}); 
```

* dblclick() : 네 더블클릭입니다. 
```
$("p").dblclick(function(){
    $(this).hide();
});
```

* mouseenter() : 마우스 포인터가 해당 영역에 들어오면 실행됩니다. [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_mouseenter)
```
$("#p1").mouseenter(function(){
    alert("You entered p1!");
});
```

* mouseleave() : 마우스 포인터가 해당 영역을 벗어나면 실행됩니다. [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_mouseleave)
```
$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
}); 
```

* mousedown() : 해당 영역 위에서 마우스 좌/우/가운데 버튼을 '누르면' 실행됩니다.  [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_mousedown)
```
`$("#p1").mousedown(function(){
    alert("Mouse down over p1!");
}); 
```

* mouseup() : 해당 영역 위에서 마우스 좌/우/가운데 버튼을 '눌렀다 떼면' 실행됩니다.  [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_mouseup)
```
$("#p1").mouseup(function(){
    alert("Mouse up over p1!");
}); 
```

* hover() : mouseenter() 와 mouseleave() methods를 동시에! [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hover)
```
$("#p1").hover(function(){
    alert("You entered p1!");
},
function(){
    alert("Bye! You now leave p1!");
});
```

* focus() : 이하 function은 form field가 포커스를 받았을 때 실행됩니다. 
/ blur(): 이하 function은 form field가 포커스를 잃었을 때 실행됩니다. [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_focus_blur) 
```
$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
}); 
```
```
$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});
```


### The on() Method
선택된 요소에 여러 개의  이벤트들을  붙여줍니다. (이벤트 핸들러 바인딩)  [해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_on_click)
[더해볼까요?](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_on_multiple)

```
$("p").on("click", function(){
    $(this).hide();
}); 
```

```javascript
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});
```

<br></br>
<br></br>
## jQuery 예제 모음
<https://www.w3schools.com/jquery/jquery_examples.asp>
