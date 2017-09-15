# Chapter 1 


This chapter covers

* The basics of HTML, CSS, and the Document Object Model (DOM)
* The principles of Scalable Vector Graphics (SVG)
* Node & ES6 functionality
* Data-binding and selections with D3
* Different data types and their data visualization methods


## D3 = Data Driven Documents

우리는 d3로 하나의 지도나 소셜 네트워크 뿐만이 아니라 big data dashboard 까지 만들 수 있다.

## 1.1 What is D3.js?

D3.js 는 웹표준인 css3, html5, svg 를 통해 유연하게 데이터 시각화를 할 수 있는 도구이다. 하지만 다른 charting 라이브러리보다 어렵다. 다른 charting 라이브러리를 쓰면 단 몇 줄 만에 막대그래프를 만들어낼 수 있지만, d3 는 수십줄의 코드가 필요하다.

하지만 다른 charting library 에서는 내 데이터 모양을 조금만 바꿔도 쓰기 어려워지는 반면 d3 는 완벽히 내 데이터에 맞는 chart를 그릴 수 있는 flexibility 를 제공한다.

## 1.2 How D3 works

### 1.2.1 Data visualization is more than charts

우리는 보통 data visualization 을 pie , line 과 같은 chart 혹은 Edward Tufte 와 같이 유명한 사람들이 만든 그런 뻔한 방법들로 한정시킨다. 하지만 DV 는 우리가 생각하는 그 이상이다!!!진짜!! 

d3 는 기존의 전통적인 방법에 대한 vector graphic 을 만드는 거 뿐만이 아니라 공간이나 network 시각화 같이 interactivity 와 animation 이 많이 필요한 시각화 자료또한 만들 수 있는 기능을 제공한다. 이렇게 마아아않은 기능들을 제공하는 d3 를 통해 우리는 data를 어느 형태로든 변형해서 보여줄 수 있다. 그게 d3의 매력이다. 나는 이걸로 음악 악보를 표현하는 시각화도 해봤다. (Figure 1.7)

이런거도 된다. sketchy style. (썩 이쁘지는 않다..). 다른 example 도 궁금하면
http://blockbuilder.org/search 여기 들어가보세요.

### 1.2.2 D3 is about selecting and binding

우리한테 데이터가 하나 있다고 생각해보면 우리는 graphic 이든 div element 든 data를 텍스트로 표현할 수도 있고 color 나 도형의 size 같은 걸로 이쁘게 표현하려고 할거다.

__selection__ 으로 우리는 dataset 과 element 를 한데 묶는다. data가 들어오면 거기에 맞게 element 들을 움직이거나 색을 바꾸도록 한다.

```javascript
d3.selectAll("circle.a").style("fill", "red").attr("cx", 100);
```

이건 circle 중에 a 라는 클래스를 red 색상으로 바꾸고 x 축으로 100 pixel 움직이라고 얘기하는 함수다.

```javascript
d3.selectAll("div").style("background", "red").attr("class", "b");
```

위의 코드는 div tag 모두의 backgrouond 를 red 로 바꾸고 그 클래스들을 b 로 바꾸라는 코드이다.

물론 이 코드 실행하려면 div class 가 있어야합니다.


그럼 앞의 코드들을 다시 한 번 살펴볼게요. 먼저 selection. 크게 두가지 함수가 있어요. d3.select() 와 d3.selectAll() ! select() 는 맨 처음으로 나타나는 element 를 선택하는 거고 selectAll 은 그 elements 모두를 찾아내서 선택하는 겁니다. 

우리가 저 함수들로 web page 에 있는 element 를 선택했다면 그걸 아래에 있는 함수와 같이 data set 과 연결시켜줍니다. 이걸 array [1,5,11,3] 을 "market" 이라는 class 명을 가진 모든 <div> element 에 **BIND** 해줬다 얘기합니다.
Chapter2 에 더 자세하게 나올거에요! 
우리는 이 selection 을 통해서 item 의 리스트나 심지어 아프리카 지도의 한 영역까지 선택할 수 있어요

```javascript
d3.selectAll("div.market").data([1,5,11,3])
```

### 1.2.3 D3 is about deriving the appearance of web page elements from bound data

 (Figure 1.9)
 선택을 했다면 이제 우리는 data 의 차이를 반영하기 위해서 d3 를 사용해서 web page elements 들을 조작할 거에요. 우리는 data 값과 길이가 동일한 line 을 그릴수도 있어요. 우리가 그렇게 동작하게 만들어 놓는다면 data 가 바뀌면 그 값에 맞게 line 의 길이는 바뀔거에요.  
 
### 1.2.4   Web page elements can now be divs, countries, and flowcharts

우리가 웹페이지를 흔히 picture, video를 담은 container 들과 text elements 들의 조합 정도로 생각하고 있지만, d3 에 점점 익숙해진다면 우리는 web 에 있는 모든 요소들을 생각하게 될거에요. web map 에 있는 country 나 동그라미 선 과 같은 복잡한 시각화 요소들 까지!!


## 1.3   The Power of HTML5


이런 인터렉티브 시각화 라이브러리가 있기 전에는 GIF 가 유행했었습니다. 짤 같은 것들 말이에요.

또 이전에는 css 와 svg 정도만 보여줬다면 지금은 DOM 과 Javascript 에 대해서 굉장히 잘 알고 있어야합니다.

### 1.3.1 The DOM

js fiddle 의 코드 하나를 볼게요.
https://jsfiddle.net/henie/L2azwdxv/

http://chie.co.kr/150225/html/step_01.php

HTML 은 DOM 을 따르고 있어요. DOM 은 Document object model로, 웹페이지를 자바스크립트로 제어하기 위한 객체 모델을 얘기합니다. DOM 은 html tag 로 시작해서 그 child elements.. 들로 쭉 이루어진 nested 구조에요. 예를 들어 div 는 body 의 child 지요. 

각 tag 들을 저 구조의 node 라고 생각하면은 그 노드들은 몇가지 속성을 가지고 있고 d3 는 그 속성을 바꿀 수 있어요.

이렇게 얘기하면 어려우니까 코드를 한 번 보면서 더 얘기해 볼게요.

```Javascript

d3.select("#someDiv").style("border", "5px darkgray dashed");
d3.select("#someDiv").attr("id", "newID");
d3.select("#someCheckbox").property("checked", true);

```

노드들이(tag or element) 가진 정보는 세가지 입니다. style, attribute, property.

style 은 우리가 잘 알 듯이 transparency, color, size, 등과 같은 속성을 결정하고, attribute 는 class, id , interactive behavior 이고 properties 는 체크 박스에서 체크가 된 상태인지 아닌지 그런 것들을 알려줍니다. true 이면 checked , False 이면 unchecked 입니다. 

#### Examining the DOM in the console

Chrome 개발자도구에서 손쉽게 페이지를 변경해 볼 수 있습니다. 
먼저 F12 를 누르면 console 이 열리는데 거기서 top left를 보면 DOM 을 탐색할 수 있는 도구가 있습니다.

또한 console 에서 javascript 코드를 실행할 수도 있습니다. 
```javascript
d3.select("#someDiv").style("background","red")
```
html code 를 바꿀 수도 있습니다. 사각형 박스를 선택하면 그 사각형 박스를 만든 html 코드를 볼 수 있는데 그 코드를 우클릭 하면 edit as HTML 이 나옵니다.

editor 를 쓸 수도 있지만, 이렇게 console 에서 javascript 코드를 직접 짜고 확인하는 것도 재밌습니다.

```javascript
d3.select("div").style("background","lightblue").style("border", "solid black 1px").html("You have now dynamically changed the content of a web page element");
```

### 1.3.3 SVG

Scalable Vector Graphics 는 XML 에서 2차원 그래픽을 설명하기 위한 언어인데 웹페이지에 표시할 가벼운 그래픽을 만들 때 효과적인 도구입니다. (http://cyberx.tistory.com/19),(https://brunch.co.kr/@kkak10/3)

가장 큰 장점은 비트맵이 아닌 벡터 형식이기 때문에 확대를 해도 글자나 그림이 깨지지 않아요. 그런데 우리가 SVG 로 처음부터 끝까지 그림을 그리기는 어려워요. 그 대신에 d3.svg.line 이나 svg.area 와 같은 것들을 통해서 그릴 수 있는데 chapter 4 에서 다루도록 할게요.

https://jsfiddle.net/henie/j0brpx8n/

d3 로 이 svg 요소들을 조정할 수 있습니다.

```javascript
d3.select("circle").remove();
d3.select("svg").style("background", "darkgray");

```

우리가 <svg> 라고 설정한 이 요소는 하나의 container 에요. 이 canvas 에 우리가 원하는 모든 것을 그릴 수 있다고 생각하면 됩니다. 알아두어야 할 점: **0,0 시작점은 top-left** 입니다. 



#### <CIRCLE>, <RECT>, <LINE>, <POLYGON> SHAPE PRIMITIVES 

SVG 는 몇가지 편리한 shape들을 제공하는데 그 attribute 의 size 와 position 만 결정하면 손쉽게 그림을 그릴 수 있어요. 하나의 예시를 들어볼게요

```html
<rect x= "410" y="200" width="25" height="25" style ="fill:pinklstroke:black;stroke-width:1px;"/>
```
fill 로 shape 의 면 색상을 결정할 수 있고 stroke, stroke-width, stroke-dasharray 로는 외곽선을 결정할 수 있습니다.

```html
"fill:purple;stroke-width:5px;stroke:cornflowerblue;"
```

그럼 저 링크에 그려져 있는 네모의 면 색상을 lightgray 로  바꾸는 d3 함수를 써봅시다!


#### <text>

svg 에서는 shape 뿐만이 아니라 text 를 쓸 수도 있어요. 보통 도형의 label 로 사용합니다. 문단 형식 같은 걸 지정하고 싶다면 text 요소 안에 tspan 요소를 넣어서 지정할 수 있습니다.
https://www.w3schools.com/graphics/svg_text.asp


#### <g> GROUPING ELEMENT

GROUP 은 다른 element 들이랑 좀 달라요. illustrator 에서 사람의 얼굴의 눈코입을 ctrl + g 를 통해서 한 번에 묶는 것 처럼 svg 에서의 group 도 논리적으로 여러 element 들을 묶는 역할을 합니다. 

```
<g> <circle r="2"/> <text>This circle’s Label</text> </g> 

```

하나로 묶인 group 의 xy 축을 조정하려면 group 의 transform 속성을 사용해야 합니다. transform 속성을 조정하려면 translate(x,y) 를 사용해야 합니다. 이 함수는 도형을 xy 축으로 얼마나 움직일 건지를 결정합니다. 

또 transforma 은 scale() 이라는 걸 통해서 이 shape 의 scale 을 결정할 수 있습니다. 

https://jsfiddle.net/henie/nv2qtvf5/

<path> 생략하겠습니다.

### 1.3.4 css

우리가 element 속성으로 주는 style 속성은 html 파일에서 따로 떼어낼 수 있어요. 이 속성을 아까 보았듯이 d3 로 변경할 수 있구요

 When an element needs only be assigned to one of these classes, you can overwrite the class attribute entirely: 
 
 d3.select("circle").attr("class", "tentative"); 
 
 
 ### 1.3.5 JavaScript 
 
 d3 와 같은 javascript 라이브러리를 통해서 우리는 웹 페이지에서 element 들을 동적으로 create 하고 modify 하는 과정을 추상화할 수 있어요. d3 는 그 중에서 데이터와 element 들을 연결하고 svg 요소를 계속해서 그려나가는 방식으로 우리에게 데이터 시각화 기능을 제공합니다. 
 
 JavaScript 를 아직 배우지 않아서 좀 더 설명이 필요할 것 같아요. python 을 공부하면서 method chaining 방식을 들어본 적 있으신가요?
 
 pd.DataFrame(data).reset_index().group_by('name').sum()..........
 
 다른 라이브러리도 그렇고 d3 는 method chaining 을 굉장히 많이 사용해요. 
 
 
```javascript
d3.selectAll("div")
  .data(someData)
  .enter() //데이터 array 가 tag 보다 많을 때 
  .append("div")
  .html("Wow")
  .append("span")
  .html("Even More Wow")
  .style("font-weight", "900");```
 
 
 ```javascript
var function1 = d3.selectAll("div");
var function1withData = function1.data(someData);
var function2 = function1withData.enter();
var function3 = function2.append("div");
function3.html("Wow");
var function4 = function3.append("span");
function4.html("Even More Wow");
function4.style("font-weight", "900");
 
 ```
 ARRAYS AND ARRAY FUNCTIONS 
 
 그리고 d3 는 array 를 진짜 중요하게 사용하기 때문에 javascript 에서의 array 구조를 잘 이해하는 것이 중요해요.
 
 array는 동일한 구조를 가진 자료형들의 모임이라고 생각하시면 됩니다.
 
 ```javascript
 someNumbers = [17, 82, 9, 500, 40]; 
 someColors = ["blue", "red", "chartreuse", "orange"]; 
 ```
 
 또는 우리는 보통 python 의 dataframe 을 불러오기 위해서 csv 파일을 많이 사용하지만 웹에서는 json 형식의 파일도 많이 사용해요. python 의 dictionary 형태와 비슷하다고 생각하면 될 것 같아요! 아래는 json 의 array를 명시한 겁니다.
 
 somePeople = [{name: "Peter", age: 27}, {name: "Sulayman", age: 24}, {name: "K.C.", age: 49}]; 
 
 음 array를 사용할 때 유용한 함수는 .filter() 함수입니다.
 
 https://www.w3schools.com/jsref/jsref_filter.asp
 
 someNumbers.filter(function(d) {return d >= 40}); 
 
 
 ### 1.3.6 ES6 and Node
 
Javascript 는 계속해서 업데이트 되고 있는 언어인데, 가장 큰 변화는 node.js 라는 서버 언어 사용량의 증가, 그리고  es6 을 위한 transpiler (언어를 다른언어로) 를 통해서 폭넓게 실행할 수 있다는 것입니다.

어쨋든 중요한 건 우리가 javascript 만 알면 frontend 뿐만이 아니라 서버도 개발할 수 있고 심지어 모바일 어플리케이션까지 만들 수 있다고 합니다.

여기서 우리가 알아야할 만한 점은 주요한 node technology 중에서 NPM 이에요! NPM 은 node package manager 인데 module 들이나 우리가 만든 어플리케이션에 사용될 js code library 들을 설치하도록 해줍니다. 이걸 통해서 그 모듈이 설치되어 있으면 우리가 여러 코드들을 작성했을 때 <script> 와 같은 tag를 포함하지 않아도 되게 만들어줘요. code 양을 줄여준다는 거죠.

d3.js version 4 는 version 3 과 비교했을 때 가장 큰 변화는 모듈화에요 기능별로 쪼갠 거. 거기다가 npm 을쓰면 우리가 손쉽게 module 을 import 할 수 있습니다. 우리가 전체 d3.js 파일을 불러오기도 하지만 필요한 모듈부분만 따로 불러올 수도 있어요!! 

나중에 차차 알아보기로하구요

function (d) {return d} 
An arrow function would be written as follows: d => d

이 기능도 9기 10기들은 한번쯤 봤을 텐데 이거가 es6 이 나오면서 바뀐 문법이라고 보시면 돼요

## 1.4 Data standards

데이터의 종류들을 살펴 봅시다.

### 1.4.1 Tabular data

tabular data 는 spreadsheet 나 database 의 table 처럼 column 과 row 가 있는 데이터라고 보면 돼요. 즉 우리가 쓰는 csv 파일도 tabular data 의 한 종류인데 d3 에서는 d3.csv() 함수로 csv 를 불러올 수 있어요!

csv 는 comma seperated values 의 약자에요. 그럼 tsv 는 뭘까요
그건 tab-delimited 라는 뜻입니다. 

d3.dsv() 는 delimiter 를 우리가 넣어줄 수 있습니다.

### 1.4.2 Nested data

nested 구조, 계층 구조라고 하는데요 html tag 들토럼 안에 반복적으로 children 이 나타나는 형식으로 흔하게 보이는 데이터 형식이에요. 보통 우리는 이런 데이터를 tree 로 시각화를 많이 하고나 팩, 트리맵 같은 걸로 표현을 하기도 해요.

Figure 1.28

### 1.4.3 Network data

네트워크!! 소셜 네트워킹 같은데에서 흔히 나타나는 데이터 구조입니다. 나중에 시각화 세션에서 다룰 수도 있겠지만 네트워크 시각화를 위해서 잘 만들어진 프로그램이 있는데 Gephi 를 이용하면 굉장히 이쁜 네트워크 시각화를 할 수 있어요
d3 에서의 network 시각화는 chapter 6 장에 나올 예정입니다.

Figure 1.29

### 1.4.4 Geographic data 

발암 데이터

주소는 서울, 서울특별시, 서울시,....
그마저도 위경도 없어서 geocoder 와 같은 패키지를 통해서 변환하거나 ....
지도 그림 그리는거 진짜...힘내세요 chapter 7 시미니



### 1.4.5 Raw data

그 외의 모든 것들이 우리의 데이터가 될 수 있습니다. text image ,,, 아까 봤던 이사람이 만든 악보 시각화 등등등 열린 마음으로 데이터를 봅시다.


### 1.4.6 Objects

꼭 인터넷에 있는 자바스크립트 charting 라이브러리들은 예제코드 쓸 때 json(JavaScript Object Notation)을 좋아합니다.


You’ll use two types of data points with D3: literals and objects. A literal, such as a string literal like "Apple" or "beer" or a number literal like 64273 or 5.44, is straightforward. A JavaScript object, expressed using JavaScript Object Notation (JSON), isn’t so straightforward, but is something that you need to understand if you plan to do sophisticated data visualization


## 1.5 Infoviz standards expressed in D3 

이전에는 map 과 chart 가 있는 정보 시각화는 그렇게 대중화되지 않았습니다. 한 눈에 보고 이해하기에는 너무 어려웠기 떄문입니다. 하지만 chart를 그릴 수 있는 수단도 많아지고 가독성을 고려한 미적 규칙들도 많아지면서 사람들은 데이터의 복잡한 표현 방식에 대해 점점 더 이해하게 되었습니다. 이제는 공공장소나 학술적인 장소 어느 곳에서나 그리고 데이터 과학자들을 포함한 기자, 예술가, it 전문가들 모두가 정보 시각화에 대해 더 익숙해지고 잘 사용하게 되었습니다. d3 가 여러 분야의 사람들에게 인기 있는 이유가 그 때문입니다.

지금은 또 너무나도 많은 option 들이 생겨서 어떻게 더 잘 표현할 수 있는지가 매우 어려워 졌습니다. 그래서 우리는 시각화를 할 때 어떤 것을 해야하고 어떤 짓을 안 해야 하는지를 염두에 두어야 합니다. 이걸 배우기 위한 가장 좋은 방법은 유명한 디자이너나 시각화를 하는 사람들의 작품들을 보고 평가하는 것입니다. 그리고 data 뿐만이 아니라 이 정보를 전달받는 사람들에 대해 확실하게 이해해야 합니다. 저자가 시각화 기초로 참고하기에 좋은 자료들을 첨부해 두었습니다. 크


* The Visual Display of Quantitative Information Envisioning Information, Edward Tufte
* Designing for Information, Isabel Meirelles
* Pattern Recognition, Christian Swinehart
* Visualization Analysis and Design, Tamara Munzner


저자가 주는 INFOVIZ TIP: KILL YOUR DARLINGS

Your love of a cool chart or animation can distract you from the goal of communicating the structure and patterns in the data. Remember to save your harshest criticism for your most beloved pieces, because you may find, much to your chagrin, that they’re not as useful and informative as you think they are.

애니메이션에 현혹되지 말자!


## 1.6 Your first d3 app

만들어봅시다!

https://jsfiddle.net/henie/4fedmefr/

https://jsfiddle.net/henie/j8ygw3ug/

https://jsfiddle.net/henie/7t5xbLj0/

https://jsfiddle.net/henie/h0bx0c5f/



## 1.7 Summary

* D3 로는 어떤 종류의 데이터 시각화도 할 수 있다. 
* d3 는 최종 시각화 결과물을 위한 것일 뿐만 아니라 data 를 처리할 수 있는 함수들도 가지고 있다.
* 더 복잡한 시각화를 하기 위해서 DOM, SVG,CSS 에 대한 이해가 필요하다
* d3 data binding 을 통해서 data 를 바탕으로 web page 요소들을 조정할 수 있다.
* 데이터 타입이 다르다면 시각화하는 방식이나 처리하는 방식은 다 다르다. main 은 numerical, hierachical, network and textual data 이다.
* d3 는 굉장히 간단하고 효과적인 animation 을 제공한다.

 
    



