
#Chapter 3
###Data-driven Design and Interaction
----------


안녕하세요! 3장 발제를 맡은 김시민입니다 :)

이번 시간에는

1. Ch1~2에서 배운 내용을 바탕으로,
2. 데이터를 도형으로 시각화하고,
3. 여러 기능을 담당하는 버튼들을 차례차례 달아볼 거에요.

----------

우리가 다룰 데이터 worldcup.csv는 다음과 같이 생겼습니다.
월드컵 출전 국가 별로, 소속된 region와 승수, 패수, ... 등이 정리되어 있어요.

	team	region	win	loss	draw	points	gf	ga	cs	yc	rc
	Netherlands	UEFA	6	0	1	18	12	6	2	23	1
	Spain	UEFA	6	0	1	18	8	2	5	8	0
	Germany	UEFA	5	0	2	15	16	5	3	10	1
	Argentina	CONMEBOL	4	0	1	12	10	6	2	8	0
	Uruguay	CONMEBOL	3	2	2	11	11	8	3	13	2
	Brazil	CONMEBOL	3	1	1	10	9	4	2	9	2
	Ghana	CAF	2	2	1	8	5	4	1	12	0
	Japan	AFC	2	1	1	7	4	2	2	4	0

----------


HTML 의 body 태그에는 createSoccerViz( )함수를 불러오기만 합니다.
createSoccerViz( )의 내용은 JavaScript 코드에서 모두 직접 설정합니다.

	<body onload="createSoccerViz()">


----------


JavaScript 코드는 모두 createSoccerViz( ) 함수를 구체화하는 내용입니다.
먼저, 'mouse click'으로 시각화된 객체를 변화시키는 기능을 구현해봅시다.
버튼을 클릭할 때마다, 가장 높은 수치의 국가부터 낮은 국가까지 순위를 매길 거예요.

----------


- 제 github 계정에 저장된 worldcup.csv URL을 이용하여 데이터를 불러옵니다.
- 그리고 그 데이터를 다시, 함수 내부에 우리가 새로 만들어줄 overallTeamViz( ) 함수로 보내줍니다.
	
		function createSoccerViz(){
		
				d3.csv('https://raw.githubusercontent.com/SiminKim/SiminKim.github.io/master/worldcup.csv', data => {overallTeamViz(data)})


----------


overallTeamViz ( ) 구체화합시다.

- svg 도화지를 생성하고, (50, 300) 좌표에 위치시킵시다.

		function overallTeamViz(incomingData) {
        d3.select("svg")
          .append("g")
            .attr("id", "teamG")
            .attr("transform", "translate(50,300)")


----------


- 데이터 관측치(row) index(1번째, 2번째, ...) 50을 곱해서 x축 위치를 설정한다.

		.selectAll("g")
          .data(incomingData)
          .enter()
          .append("g")
            .attr("class", "overallG")
            .attr("transform", (d, i) =>`translate(${(i * 50)}, 0)`);


----------


- 지금까지 해 둔 것들을 teamG 변수로 지정한다.

		 var teamG = d3.selectAll("g.overallG");


----------


- 본격적으로 원을 달아줄 건데, 처음에는 안 보이게 반지름을 0으로 설정한다.

		teamG
          .append("circle").attr("r", 0)


----------


- 1번째, 2번째, ... 순서로 타이밍 맞춰서 폭폭 튀어나와서, 반지름 40을 찍고,

		.transition()
            .delay((d,i) => i * 100)
            .duration(500)
            .attr("r", 40)


----------


- 다시 반지름 20으로 줄어든다.

		 .transition()
            .duration(500)
            .attr("r", 20);


----------


- 텍스트를 넣을 건데, CSS에 지정된 text-anchor 지정하고, y좌표는 30으로, d로 받은 데이터 중 team 이름들을 써 넣는다. 

		 teamG
          .append("text")
            .style("text-anchor", "middle")
            .attr("y", 35)
            .text(d => d.team);


----------


- 우리가 가진 데이터의 key들은 team, region, win, lose, ... 여러가지가 있는데,
- win, lose, rc 등의 수치 정보를 나타내는 버튼을 만들 것이다.

		  var dataKeys = Object.keys(incomingData[0])
          .filter(d => d !== "team" && d !== "region"); 


----------


- click과 buttonClick 이름이 비슷하다고 헷갈리지 말 것!
- click은 실제 클릭하는 행위이고, buttonClick은 우리가 따로 만들어주는 함수이다.

		d3.select("#controls").selectAll("button.teams")
          .data(dataKeys).enter()
          .append("button")
            .on("click", buttonClick) 


----------

- 관측치 한 개마다(예를 들어 win, lose, ...) 8차원 point로 본다.
- 그 point 중 숫자가 가장 큰 것을 maxValue로 지정한다.

		function buttonClick(datapoint) {
          var maxValue = d3.max(incomingData, d => parseFloat(d[datapoint]));


----------

- 교재에 있는 domain, range 그림 첨부
- 버튼을 클릭할 때마다 각 원들이 변하는 크기를 지정

		var radiusScale = d3.scaleLinear()
            .domain([ 0, maxValue ]).range([ 2, 20 ]);


domain과 range에 대해서는 Chapter2에서 배우셨죠?

[0과 해당 변수에서 가장 큰 관측값]의 범위를 [2에서 20]의 범위로 선형 mapping하는 과정입니다.

![enter image description here](https://image.slidesharecdn.com/utahjsd3-130708153751-phpapp01/95/utahjs-d3-24-638.jpg?cb=1373297965)

----------

- LAB 색체계에 따라 색의 변화가 달라진다.
- interpolateLab 대신, interpolateRgb, interpolateHcl, interpolateHsl을 바꿔가면서 써보세요.

		var ybRamp = d3.scaleLinear()
            .interpolate(d3.interpolateLab)


----------

- 버튼을 클릭할 때마다 각 원들이 변하는 색을 지정한다.

		.domain([0,maxValue]).range(["blue", "yellow"]);


----------

- 본격적으로 원을 변화시키는 부분
- var로 지정해 둔 변수들을 활용

		d3.selectAll("g.overallG").select("circle")
          .transition().duration(1000)
              .attr("r", d => radiusScale(d[datapoint]))
              .style("fill", d => ybRamp(d[datapoint]));


----------

지금까지 한 결과를 다음 링크에서 확인해보세요.
https://jsfiddle.net/SiminKim/crvrh2gc/8/

----------

다음으로, 'mouseover'로 시각화된 객체를 변화시키는 기능을 구현해봅시다.

----------

- 마우스를 원 위에 올려놓으면, 그 국가가 속한 region에 속하는 다른 국가들까지 한번에 강조해주는 기능입니다.
- 위에서 정의한 buttonClick 함수 대신
- highlightRegion 함수를 만들어서 넣어봅시다.

		teamG.on("mouseover", highlightRegion);
		
        function highlightRegion(d) {
          d3.selectAll("g.overallG").select("circle")
              .attr("class", 
              p => p.region === d.region ? "active" : "inactive");
        }


----------

- 마우스를 원 위에서 떼면 원래 상태로 돌아오게도 해줘야겠죠?
- mouseout 기능 입니다.

		teamG.on("mouseout", function() {
          d3.selectAll("g.overallG")
            .select("circle").classed("inactive", false).classed("active", false);
        });


----------

지금까지 한 결과를 아래 링크에서 확인해보세요.
https://jsfiddle.net/SiminKim/yswd6z4w/


----------

주요개념들은 거진 Chapter2에서 모두 나오는 것 같습니다.
md로 정리해놓고 나니까, 새로 배울 내용이 다소 너무 적은 게 아닌가 싶네요 ㅠㅠ

하지만, 막상 로컬에서 실습할 때는 worldcup.csv 파일을 불러오는 과정에서 너무 문제가 많았습니다. 
Jsfiddle로 실습 환경을 옮겼을 때에는 세팅 과정에서 시행착오가 너무 많아 시간이 많이 잡아 먹어서 애를 먹었습니다. 
따라서 여러분들이 Jsfiddle에서 실제로 처음부터 하실 때는, 제가 올려드린 링크대로 세팅을 해주시는 게 좋을 것 같아요!

- d3 version 4는 반드시 External source로 지정해 주시고,
- JavaScript 콘솔에서의 세팅도 반드시 링크대로 해주세요.