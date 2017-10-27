# Chapter 4

This chapter covers

* Creating and formatting axis components
* Creating legends
* Using line and area generators for charts
* Creating complex shapes consisting of multiple types of SVG elements
  ​



## 4.1 General charting principles

**차트의 구성 요소** *(※ 저자 - "그래프는 네트워크랑 유의어라서 사용하지 않겠다")*

* 그린 것 (원, 사각형 부터 박스플랏. 또한, 축과 라벨까지!)
* 데이터로 얻은 것

**D3의 함수**

크게 *세 가지*로 나눌 수 있음 (이번 Chapter에서는 Generators, Components까지!)

![04_02](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_02.png)

*Figure 4.2 The three main types of functions found in D3 can be classified as generators, components, and layouts. You’ll see components and generators in this chapter and layouts in the next chapter.*

이제 하나 하나에 대해 대충 알아봅시당 ╰(\*´︶`\*)╯

### 4.1.1 Generators

데이터를 가져가서 데이터를 기반으로 필요한 SVG 그림을 그려주는 함수

우리가 \<path>의 "d" 속성을 따로 복잡하게 설정하지 않게 해줌

ex - `line()`, `area()`, `arc()` *for pie chart*, `diagonal()` *for dendrogram*

### 4.1.2 Components

특정 차트 요소를 위해 필요한 그래픽 객체의 모든 것을 그려주는 함수

\<path> 정도 살짝 건들였던 Generator와는 달리 필요한 노드를 몽땅 만들어줌

ex - `axis()` *creates \<line>, \<path>, \<g>, \<text>*, `brush()`

### 4.1.3 Layouts

한 개 혹은 다수의 데이터를 사용하거나, Generator를 사용하거나, 필요하다면 속성을 추가하는 형태로 사용

레이아웃은 정적일 때도 동적일 때도 있고, 파이 차트같이 간단할 수도 네트워크같이 복잡할 수도 있음



## 4.2 Creating an axis

스캐터 플랏을 통해 Component를 공부할 예정!

산점도는 간단하지만 데이터를 보여주는데 아주 효과적

### 4.2.1 Plotting data

이렇게 생긴 애 위에 그릴 거

```html
<div id="vizcontainer">
  <svg style="width:500px;height:500px;border:1px lightgray solid;" />
</div>
```

스캐터 플랏을 그리려면 관련된 한 개 이상의 데이터, 두 개의 특성이 있어야 하고 모두 수치형이어야 함

사용할 데이터는 어레이 형태, 각각 사람을 의미하고 `friends`는 친구 수, `salary`는 연봉

친구수와 연봉이 어떤 연관이 있는 지 알아보고자 스캐터 플랏을 그리는 거

```javascript
var scatterData = [{friends: 5, salary: 22000},
                   {friends: 3, salary: 18000},
                   {friends: 10, salary: 88000},
                   {friends: 0, salary: 180000},
                   {friends: 27, salary: 56000},
                   {friends: 8, salary: 74000}];
```

데이터는 원으로 넣을 거

```javascript
d3.select("svg").selectAll("circle")
  .data(scatterData).enter()
  .append("circle")
  .attr("r", 5)
  .attr("cx", (d, i) => i * 10)
  .attr("cy", d => d.friends) // d.friends를 cy에 지정, friends 값이 클수록 원이 아래에 위치
```

결과: https://jsfiddle.net/H_Jin9/92Lknqx3/

원은 왼쪽 상단부터 우측 하단 순으로 정렬됨. 결과는 다닥다닥 붙어있어 스캐터 플랏이라고 보기 힘든 정도..!

![04_03](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_03.png)

*Figure 4.3 Circle positions indicate the number of friends and the array position of each datapoint.*

위에 코드 버리고 <u>데이터 스케일링</u>해서 집어넣을 거

```javascript
// extent는 min, max를 array로 return해주는 함수
var xExtent = d3.extent(scatterData, d => d.salary); 
var yExtent = d3.extent(scatterData, d => d.friends);
// xExtent에 저장된만큼의 array를 range[0, 500]으로 scale
var xScale = d3.scaleLinear().domain(xExtent).range([0, 500]); 
var yScale = d3.scaleLinear().domain(yExtent).range([0, 500]);

d3.select("svg").selectAll("circle")
  .data(scatterData).enter().append("circle")
  .attr("r", 5).attr("cx", d => xScale(d.salary))
  .attr("cy", d => yScale(d.friends));
```

결과: https://jsfiddle.net/H_Jin9/yvgfrm80/

![04_04](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_04.png)

*Figure 4.4 Any point closer to the bottom has more friends, and any point closer to the right has a higher salary. But that’s not clear at all without labels, which we’re going to make.*

하지만 아직도 뭐가 뭔지 모르겠으므로 <u>축 추가</u>할 거

**축 관련 함수** - `d3.axisLeft()`, `d3.axisRight()`, `d3.axisBottom()`, `d3.axisTop()`

```javascript
// call()은 <g>를 추가하여 그래프 요소를 그려줌
var yAxis = d3.axisRight().scale(yScale);
d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis)
var xAxis = d3.axisBottom().scale(xScale)
d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis)
// xAxis(d3.select("svg").append("g").attr("id", "xAxisG")) 이렇게 쓰는 것과 동일
```

결과: https://jsfiddle.net/H_Jin9/bcxboum0/

![04_05](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_05.png)

*Figure 4.5 Elements of an axis created from `d3.axis` are 1 a `<path.domain>` with a size equal to the extent of the axis, 2 a `<g.tick>` that contains a `<line>` and 3 a`<text>` for each tick. Not shown, because it’s invisible, is the `<g>` element that’s called, and in which these elements are created. By default, a path like the domain is with black (this figure shows that fill area in purple) but the axis components have some default styles built in to prevent this. SVG line elements don’t have stroke by default, but the elements created by D3 axes also have default styles in place to make them visible.*

### 4.2.2 Styling axes

아까같이 그리니깐 약간 잘려서 그려지지 않는 부분이 발생

\<g>의 상위(parent) 항목에 `.attr("translate")`를 추가하여 조정. 따라서 ID를 할당하는 것이 중요함

```javascript
// 아래 코드로 x축을 간단하게 아래로 옮길 수도 있음
d3.selectAll("#xAxisG").attr("transform","translate(0,500)")
```

이제는 <u>축을 꾸며볼 거</u>!  틱도 추가하고 선도 그려볼 거

```html
<div id="vizcontainer">
  <svg style="width:520px;height:520px;border:1px lightgray solid;" />
</div>
```

축이 잘 보이도록 캔버스 크기를 약간 크게 바꿔줌

```javascript
var scatterData = [{friends: 5, salary: 22000},
				{friends: 3, salary: 18000},
                   {friends: 10, salary: 88000},
                   {friends: 0, salary: 180000},
                   {friends: 27, salary: 56000},
                   {friends: 8, salary: 74000}];
                   
var xScale = d3.scaleLinear().domain([0, 180000]).range([0, 500]);
var yScale = d3.scaleLinear().domain([0, 27]).range([0, 500]);

// 축의 방향, tick 사이즈, tick 개수 설정. 순서는 무관
xAxis = d3.axisBottom().scale(xScale).tickSize(500).ticks(4);
yAxis = d3.axisRight().scale(yScale).ticks(16).tickSize(500);
// 축에 필요한 그래픽을 생성
d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis);
d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

d3.select("svg").selectAll("circle")
  .data(scatterData).enter()
  .append("circle").attr("r", 5)
  .attr("cx", d => xScale(d.salary))
  .attr("cy", d => yScale(d.friends));
```

결과: https://jsfiddle.net/H_Jin9/p8fxfgcw/

![04_07](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_07.png)

*Figure 4.7 With `<path.domain>` fill set to `"none"` and CSS settings also corresponding to the tick `<line>` elements, we can draw a rather attractive grid based on our two axes.*

CSS를 건드려서 꾸밀 수도, D3 Component로 꾸밀수도 있음!



## 4.3 Complex graphical objects

박스플랏으로 좀 더 복잡한 그래픽 객체를 공부할 예정!

박스플랏은 분포를 가진 데이터를 표현할 때 효과적

![04_09](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_09.png)

*Figure 4.9 A box from a boxplot consists of five pieces of information encoded in a single shape: (1) the maximum value, (2) the high value of some distribution, such as the third quartile, (3) the median or mean value, (4) the corresponding low value of the distribution, such as the first quartile, and (5) the minimum value.*

`d3.scaleQuartile()`을 통해 쉽게 박스 플랏을 그릴 때 필요한 정보 획득

지금 갖고 있는 데이터는 quartile 데이터를 이미 갖고 있는 데이터

```
day,min,max,median,q1,q3,number
1,14,65,33,20,35,22
2,25,73,25,25,30,170
3,15,40,25,17,28,185
4,18,55,33,28,42,135
5,14,66,35,22,45,150
6,22,70,34,28,42,170
7,14,65,33,30,50,28
```

한 번 위에서 했던 스캐터 플랏으로 <u>중앙값만</u> 그려 볼 거!

```javascript
d3.csv("https://raw.githubusercontent.com/emeeks/d3_in_action_2/master/data/boxplot.csv",
       scatterplot)

const tickSize = 470 // 이 수는 뒤에도 자주 사용할 거라 Constant로 설정

function scatterplot(data) {
  // 단위 설정
  const xScale = d3.scaleLinear().domain([1, 8]).range([20, tickSize])
  const yScale = d3.scaleLinear().domain([0, 100]).range([tickSize + 10, 20])
  
  // 축 설정
  const yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(8)
    .tickSize(-tickSize)
  
  d3.select("svg").append("g")
    .attr("transform", `translate(${tickSize},0)`)
    .attr("id", "yAxisG")
    .call(yAxis)
  
  const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(-tickSize)
    .tickValues(["1", "2", "3", "4", "5", "6", "7"])

  d3.select("svg").append("g")
    .attr("transform", `translate(0,${tickSize + 10})`)
    .attr("id", "xAxisG")
    .call(xAxis)
  
  // scatter plot
  d3.select("svg").selectAll("circle.median")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "tweets")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.median))
    .style("fill", "darkgray")
}
```

결과: https://jsfiddle.net/H_Jin9/1mo1qsqz/

이젠 박스 플랏으로~

스캐터 플랏을 그릴 때는 `<circle>`을 사용했는데 박스 플랏을 그릴 때는 `<g>`를 사용

차트를 그릴때 `<g>`는 그래픽 요소들에 라벨이나 중요한 정보를 표시할 수 있게 도와주므로 사용하면 항상 좋음

하지만 `<g>` 요소가 잘 위치할 수 있도록 transform 속성을 사용해야 함

`<g>`에 추가된 요소는 부모 요소를 기준으로 위치를 맞추어주어야 함!

모든 `<g>`요소를 선택하여 자식 요소를 한 번에 추가하기 보단 앞에서 배웠던 `.each()`함수를 사용 

새로운 요소를 만들 때, 선택한 각 요소마다 같은 코드를 동작하게 해줌

모든 `<g>`요소를 선택하여 자식 요소를 한 번에 추가하려면 `selectAll` 사용

`.each()`는 `selectAll`에 비해 스케일에서 좋음!

```javascript
d3.select("svg").selectAll("g.box")
  .data(data).enter()
  .append("g") // circle 대신 g 요소 사용
  .attr("class", "box")
  .attr("transform", d => "translate(" + xScale(d.day) +"," + yScale(d.median) + ")")
  .each(function(d,i) {
            d3.select(this)
              .append("rect")
              .attr("width", 20)
              .attr("height", yScale(d.q1) - yScale(d.q3));
    })
```

결과: https://jsfiddle.net/H_Jin9/e35yr9fL/

두둥.. 오른쪽으로 치우쳐져 있고 값도 다르게 나옴 ㅠㅠ SVG가 사각형을 그리는 방식 때문!

SVG는 기준에서 우측 하단 방향으로 그림

박스 플랏을 그리기 위해 필요한 요소는 아래와 같음

![04_13](https://raw.githubusercontent.com/YBIGTA/Design_web_study/master/d3.js%20in%20action/chapter4_figure/04_13.png)

*Figure 4.13 How a boxplot can be drawn in D3. Pay particular attention to the relative positioning necessary to draw child elements of a `<g>`. The 0 positions for all elements are where the parent `<g>` has been placed, so that `<line.max>`, `<rect.distribution>`, and `<line.range>` all need to be drawn with an offset placing their top-left corner above this center, whereas `<line.min>` is drawn below the center and `<line.median>` has a 0 y-value, because our center is the median value.*

일단 <u>사각형 범위부분</u>부터 그릴거

```javascript
...
.each(function(d,i) {
		d3.select(this)
		  .append("rect")
		  .attr("width", 20)
		  .attr("x", -10) // 가운데에 맞추기 위해 -10으로 설정
		  .attr("y", yScale(d.q3) - yScale(d.median)) // 가운데에 맞추기 위함
		  .attr("height", yScale(d.q1) - yScale(d.q3))
		  .style("fill", "white")
		  .style("stroke", "black");
...
```

결과: https://jsfiddle.net/H_Jin9/ccwk87gf/

비슷한 방법으로 <u>나머지 부분</u>을 모두 완성

```javascript
...
.each(function(d,i) {
    // 최댓값과 최솟값을 잇는 선
    d3.select(this)
        .append("line")
        .attr("class", "range")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", yScale(d.max) - yScale(d.median))
        .attr("y2", yScale(d.min) - yScale(d.median))
        .style("stroke", "black")
        .style("stroke-width", "4px");
    // 최댓값에 해당하는 선
    d3.select(this)
        .append("line")
        .attr("class", "max")
        .attr("x1", -10)
        .attr("x2", 10)
        .attr("y1", yScale(d.max) - yScale(d.median))
        .attr("y2", yScale(d.max) - yScale(d.median))
        .style("stroke", "black")
        .style("stroke-width", "4px")
    // 최솟값에 해당하는 선
    d3.select(this)
        .append("line")
        .attr("class", "min")
        .attr("x1", -10)
        .attr("x2", 10)
        .attr("y1", yScale(d.min) - yScale(d.median))
        .attr("y2", yScale(d.min) - yScale(d.median))
        .style("stroke", "black")
        .style("stroke-width", "4px")
    // 사각형 범위 부분
    d3.select(this)
        .append("rect")
        .attr("class", "range")
        .attr("width", 20)
        .attr("x", -10)
        .attr("y", yScale(d.q3) - yScale(d.median))
        .attr("height", yScale(d.q1) - yScale(d.q3))
        .style("fill", "white")
        .style("stroke", "black")
        .style("stroke-width", "2px")
    // 중앙값에 해당하는 선
    d3.select(this)
        .append("line")
        .attr("x1", -10)
        .attr("x2", 10)
        .attr("y1", 0)
        .attr("y2", 0)
        .style("stroke", "darkgray")
        .style("stroke-width", "4px")
...
```

결과: https://jsfiddle.net/H_Jin9/otvn2gqd/



## 4.4 Line charts and interpolations

라인 차트는 기본적으로 두 점을 이으면서 생성 (면적도 어떻게 보면 라인)

정적인 데이터 시각화에 속하지만 시간과 같은 변화하는 데이터에 적절

이번에 사용할 데이터는 트위터관련 데이터 (날짜별 트윗 수, 리트윗 수, 좋아요 수)

```
day,tweets,retweets,favorites
1,1,2,5
2,6,11,3
3,3,0,1
4,5,2,6
5,10,29,16
6,4,22,10
7,3,14,1
8,5,7,7
9,1,35,22
10,4,16,15
```

이번에도 일단 <u>각 컬럼별</u>로 스캐터 플랏 형태로 그려볼 거

```javascript
d3.csv("https://raw.githubusercontent.com/emeeks/d3_in_action_2/master/data/tweetdata.csv", lineChart);

function lineChart(data) {

  const blue = "#fe9a22",
        green = "#5eaec5",
        orange = "#92c463"
  
  xScale = d3.scaleLinear().domain([1, 10.5]).range([20, 480])
  yScale = d3.scaleLinear().domain([0, 35]).range([480, 20])
  
  xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(480)
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis)
  
  yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(10)
    .tickSize(480)
  d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis)

  d3.select("svg").selectAll("circle.tweets")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "tweets")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.tweets))
    .style("fill", blue)

  d3.select("svg").selectAll("circle.retweets")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "retweets")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.retweets))
    .style("fill", green)

  d3.select("svg").selectAll("circle.favorites")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "favorites")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.favorites))
    .style("fill", orange)
}
```

결과: https://jsfiddle.net/H_Jin9/bom6npge/

해석하기가 그리 쉽지는 않음.. 어서 선을 그리러 ㄱㄱ

### 4.4.1 Drawing a line from points

선을 그려야 데이터간 비교가 용이해짐

`d3.line()`을 사용하여 그릴 수 있고 연결할 각 점의 위치에 대한 어레이 형태의 데이터를 넣어줘야함

선 세 개를 그리려면 데이터를 세 번 로드해야 하고 처음이니깐 세 번 다 다르게 그려볼 거!

Generator 함수를 쓰고 선을 그리기위해서 데이터에 어떻게 접근하는지 뿐만아니라
`<path>` 요소를 추가하고 우리가 정의한 Generator 함수와 동등한 속성을 설정해야함

만약 데이터에 공백이 있어 연결하고 싶지 않다면 `line.defined()` 사용

디폴트 값이 True로 설정되어 있어 False 값을 return하도록 설정해주면 됨

ex - `d3.line().defined(d => d.y === null)`

이제 정말로 <u>선</u>을 그려볼 거

```javascript
var tweetLine = d3.line()
        .x(d => xScale(d.day))
        .y(d => yScale(d.tweets))

d3.select("svg")
  .append("path")
  .attr("d", tweetLine(data))
  .attr("fill", "none")
  .attr("stroke", "#fe9a22")
  .attr("stroke-width", 2)
```

결과: https://jsfiddle.net/H_Jin9/7tphco4n/

### 4.4.2 Drawing many lines with multiple generators

위에서 말했듯 다양한 방법을 활용하여 <u>나머지 부분</u>을 완성할 거

```javascript
const lambdaXScale = d => xScale(d.day)

var tweetLine = d3.line()
  .x(lambdaXScale)
  .y(d => yScale(d.tweets))
var retweetLine = d3.line()
  .x(lambdaXScale)
  .y(d => yScale(d.retweets))
var favLine = d3.line()
  .x(lambdaXScale)
  .y(d => yScale(d.favorites))
  
d3.select("svg")
  .append("path")
  .attr("d", tweetLine(data))
  .attr("fill", "none")
  .attr("stroke", blue)
  .attr("stroke-width", 2)
d3.select("svg")
  .append("path")
  .attr("d", retweetLine(data))
  .attr("fill", "none")
  .attr("stroke", green)
  .attr("stroke-width", 2)
d3.select("svg")
  .append("path")
  .attr("d", favLine(data))
  .attr("fill", "none")
  .attr("stroke", orange)
  .attr("stroke-width", 2)
```

결과: https://jsfiddle.net/H_Jin9/pzte5fue/

### 4.4.3 Exploring line interpolation

**D3에서 선을 그리는 방식**

* linear - 위에서 사용한 방식
* curveBasis - 데이터의 평균을 곡선형태로
* curveCardinal - 곡선형태로
* curveStep - 직각으로 구성된 직선으로

<u>틱의 색</u>을 조금 바꾸고 <u>다양한 방법</u>을 사용해서 그려볼 거

```javascript
d3.csv("https://raw.githubusercontent.com/emeeks/d3_in_action_2/master/data/tweetdata.csv", lineChart);

function lineChart(data) {

  var xScale = d3.scaleLinear().domain([1, 10.5]).range([20, 480]);
  var yScale = d3.scaleLinear().domain([0, 35]).range([480, 20]);

  var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(480)
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis);

  var yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(10)
    .tickSize(480);

  d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

  d3.select("svg").selectAll("circle.tweets")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "tweets")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.tweets))
    .style("fill", "#fe9a22");

  d3.select("svg").selectAll("circle.retweets")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "retweets")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.retweets))
    .style("fill", "#5eaec5");

  d3.select("svg").selectAll("circle.favorites")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "favorites")
    .attr("r", 5)
    .attr("cx", d => xScale(d.day))
    .attr("cy", d => yScale(d.favorites))
    .style("fill", "#92c463");

  var tweetLine = d3.line()
    .x(d => xScale(d.day))
    .y(d => yScale(d.tweets));

  var retweetLine = d3.line()
    .x(d => xScale(d.day))
    .y(d => yScale(d.retweets));

  var favLine = d3.line()
    .x(d => xScale(d.day))
    .y(d => yScale(d.favorites));

  tweetLine.curve(d3.curveBasis);
  retweetLine.curve(d3.curveStep);
  favLine.curve(d3.curveCardinal);

  d3.select("svg")
    .append("path")
    .attr("d", tweetLine(data))
    .attr("fill", "none")
    .attr("stroke", "#fe9a22")
    .attr("stroke-width", 2);

  d3.select("svg")
    .append("path")
    .attr("d", retweetLine(data))
    .attr("fill", "none")
    .attr("stroke", "#5eaec5")
    .attr("stroke-width", 2);

  d3.select("svg")
    .append("path")
    .attr("d", favLine(data))
    .attr("fill", "none")
    .attr("stroke", "#92c463")
    .attr("stroke-width", 2);
}
```

결과: https://jsfiddle.net/H_Jin9/15hnepkw/



##4.5 Complex accessor functions

여태까지 그린 차트는 모두 점에 기반한 차트 (스캐터 플랏, 박스 플랏, 라인 차트)

이제 스트림그래프를 그려볼 거!지만 다음 챕터에서 더 자세하게 배운 후에..

스트림그래프는 박스 플랏같이 변동이나 변화를 나타내는 데 유용, 누적한 차트의 변동

`d3.area()`라는 Generator를 활용하여 단순한 누적차트를 한 번 그려볼 거

이번에 사용할 데이터는 6개 영화의 9일간 해당 일의 수익 데이터

```
day,titanic,avatar,akira,frozen,deliverance,avengers
1,20,8,3,0,0,0
2,18,5,1,13,0,0
3,14,3,1,10,0,0
4,7,3,0,5,27,15
5,4,3,0,2,20,14
6,3,1,0,0,10,13
7,2,0,0,0,8,12
8,0,0,0,0,6,11
9,0,0,0,0,3,9
10,0,0,0,0,1,8
```

어떻게 데이터에 접근하는지에 신경써서 차트를 그려볼 거

```javascript
d3.csv("https://raw.githubusercontent.com/emeeks/d3_in_action_2/master/data/movies.csv",
       lineChart);

function lineChart(data) {

  var xScale = d3.scaleLinear().domain([1, 10]).range([20, 470]);
  var yScale = d3.scaleLinear().domain([0, 40]).range([480, 20]);

  var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(480)
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis);

  var yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(10)
    .tickSize(480);

  d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

  Object.keys(data[0]).forEach(key => { // 반복
    if (key !== "day") { // column이 영화일 때
      var movieArea = d3.line() // 각 영화에 대한 생성자를 역동적으로 생성 <path>
        .x(d => xScale(d.day))
        .y(d => yScale(d[key]))
        .curve(d3.curveCardinal);
      d3.select("svg")
        .append("path")
        .attr("id", `${key}Area`)
        .attr("d", movieArea(data))
      	.attr("fill", "none");
    }
  });
}
```

결과: https://jsfiddle.net/H_Jin9/LoLcpqcp/

그리는 코드 마지막에 닫힌 패스인지 / 채우기 스타일을 어떻게 할 것인지 결정하는 Z를 추가하여 차별화 가능

D3 Constructor는 `<path>` 요소를 생산하지만 보여줄 부분에 대한 바운더리 설정 가능

함 그려볼 거

```javascript
function lineChart(data) {

  var xScale = d3.scaleLinear().domain([1, 10]).range([20, 470]);
  var yScale = d3.scaleLinear().domain([-40, 40]).range([480, 20]);

  var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(480)
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis);

  var yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(10)
    .tickSize(480);

  d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

  Object.keys(data[0]).forEach(key => {
    if (key != "day") {
      var movieArea = d3.area()
        .x(d => xScale(d.day))
        .y0(d => yScale(d[key])) // y0- area 밑 부분 모양 결정 가능
        .y1(d => yScale(-d[key])) // y1 - 패스의 밑 부분 정의 가능, 한 번 반사된 형태로!
        .curve(d3.curveCardinal);
      d3.select("svg")
        .append("path")
        .style("id", `${key} Area`)
        .attr("d", movieArea(data));
    };
  });
}
```

결과: https://jsfiddle.net/H_Jin9/m94njp4n/

이제 한 번 쌓아볼 거!

쌓는 함수 `d3.stack()`으로 `.y0()`를 약간 더 복잡하게 앞의 데이터의 위가 아래가 되도록 설정

```javascript
function lineChart(data) {

  var fillScale = d3.scaleOrdinal() // 영화마다 domain color 다르게 설정
    .domain(["titanic", "avatar", "akira", "frozen", "deliverance", "avengers"])
    .range(["#fcd88a", "#cf7c1c", "#93c464", "#75734F", "#5eafc6", "#41a368"]);

  var xScale = d3.scaleLinear().domain([1, 10]).range([20, 470]);
  var yScale = d3.scaleLinear().domain([0, 55]).range([480, 20]);

  var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(480)
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis);

  var yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(10)
    .tickSize(480);
 
  d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

  var n = 0;
  Object.keys(data[0]).forEach(key => {
    if (key != "day") {
      var movieArea = d3.area()
        .x(d => xScale(d.day))
        .y0(d => yScale(simpleStacking(d, key) - d[key]))
        .y1(d => yScale(simpleStacking(d, key)))
        .curve(d3.curveBasis);
      d3.select("svg")
        .append("path") // 선을 추가할 거
        .style("id", `${key} Area`) // id는 각각 영화 제목으로 설정
        .attr("d", movieArea(data)) // y축에는 데이터에 해당하는 값을
        .attr("fill", fillScale(key)) // 위에서 정해준 색으로 채우기
        .attr("stroke", "black")
        .attr("stroke-width", 1);
      n++;
    }
  });

  function simpleStacking(lineData, lineKey) { // 각각의 값을 순차적으로 더한 값 반환
    var newHeight = 0;
    Object.keys(lineData).every(key => {
      if (key !== "day") {
        newHeight += parseInt(lineData[key]);
        if (key === lineKey) {
          return false;
        }
      }
      return true;
    });
    return newHeight;
  }
}
```

결과: https://jsfiddle.net/H_Jin9/ghkpzxjo/

간단한 형태의 스트림그래프도 완성!

그렇다고 라인 차트보다 더 나은 선택이었을까?

전체적인 시장의 변동 패턴과 영화 사이의 상호작용을 보고자 했으면 스트림그래프가 유용

복잡한 그래프로 보는 사람을 압도하고 싶었다면 스트림 그래프가 유용

나머지의 경우에는 라인 차트가 낫다.



###4.6 Using 3rd party d3 modules to create legends

D3에는 범례를 그릴 수 있는 방법이 아무것도 없음 ㅎㄷㄷ

D3의 확장 라이브러리가 여럿 존재하는데 그 중 하나(http://d3-legend.susielu.com)를 사용

`npm i d3-svg-legend`와 같이 NPM(Node Package Manager)을 통해 모듈 추가 가능 

혹은  `<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.21.0/d3-legend.min.js" />` 처럼`<script>` 태그에 주소 추가

위 모듈을 통해 범례의 크기와 색깔과 모양 설정 가능

외부 모듈이지만 함수를 사용하는 방법이 D3와 거의 같음

```javascript
var legendA = d3.legendColor().scale(fillScale);

d3.select("svg")
  .append("g")
  .attr("transform", "translate(500, 0)")
  .call(legendA);
```

결과: https://jsfiddle.net/H_Jin9/hme53dmx/



### 4.7 Summary

- `d3-shape`의 `line()`이나 `area()`같은 Generator는 라인 차트나 스트림그래프같은 흔하고 강력한 차트를 그릴 때 필수적인 요소
- 그래픽 객체가 많은 박스플랏은 하나의 객체에 여러가지 데이터를 포함하기 위해 사용
- `axis()`같이 내장된, 혹은 외부 모듈 `legend()`같은 Component는 차트를 더 읽기 쉽게 만들어 줌
- 필요에 따라 실험하기를 두려워 하지 말자!





<u>다음 발제자를 위한 사소하고 작디 작은 팁</u>

- 양이 생각보다 적으면서도 많으니 일주일 잡고 하루에 한 단원씩 조금씩 준비하는 걸 추천합니다<br>
  코드랑 그림이 많아서 생각보다 적은데 벽에 부딪히는 시간이 길어서 생각보다 많아요<br>
  저도 일주일 동안 했는데 시험과 과제 다섯 개, 다섯 번의 조모임을 끼고 완성시켰으니 가능할 거라 믿어요
- JSFiddle에서 d3를 external resources에서 추가한 후 진행해야합니다<br>
  https://cdnjs.cloudflare.com/ajax/libs/d3/4.10.2/d3.min.js<br>
  https://cdnjs.com/ 여기서 찾고 싶은 모듈이나 라이브러리를 찾을 수 있어요
- 코드 작성 시 책 홈페이지에 가면 코드를 쉽게 복사 할 수 있습니다<br>
  https://livebook.manning.com/#!/book/d3js-in-action-second-edition
- 데이터를 불러올 때 책이 제공하는 깃헙 주소에서 데이터를 불러오면 편합니다<br>
  https://github.com/emeeks/d3_in_action_2
- 코드가 일부만 있고 일부를 지우고 그 코드를 넣어야 하는 경우도 있고<br>
  그대로 돌렸는데 결과가 다를 때도 있습니다. 이럴 때에도 깃헙 참고하면 편합니다
- 화이팅! 저의 당부를 기억해주시고 꼭 완성해와주세요 ㅎ,ㅎ<br>
  보통 앞의 사람이 겪은 문제를 공통으로 겪는 거 같으니 어려운 점을 공유하면 좋을 것 같습니다<br>
- 2단원이랑 3단원 설명 좀 올려주세요 ㅠㅠ 앞부분을 참고해야 하는 경우도 점점 잦아집니다... 주륵..
