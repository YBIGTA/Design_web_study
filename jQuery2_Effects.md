# **jQuery-Effects**


------------------
### 목차
1. Hide & Show
2. Fade
3. Slide
4. Animation
5. Stop
6. Callback
7. Chaining

------------------


## **1. Hide & Show & Toggle**

### 개요

- hide/show : 문자 그대로 인자(element)들을 **숨기거나 혹은 보여주는** 행위(action)을 지시하는 메소드(method)
-  toggle :"왔다갔다 하다"라는 의미로 hide와 show 를 **번갈아가며 실행**하는 메소드
 
 ----------

### 문법

- $(selector).show(speed, callback) [show 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show)
- $(selector).hide(speed, callback) [hide 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_slow)
- $(selector).toggle(speed, callback)[toggle 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_toggle)

--------

### Parameter

- speed 
	- optional, 액션을 실행하는 속도를 조절.
	- "slow", "fast" 혹은 millisecond(1/1000초) 3가지 값을 가짐.
- callback: 
	- optional
	- method의 액션이 완료된 **이후에** 실행될 함수를 지정하는 파라미터



## 2. Fading


### 개요

-  선택된 인자들을 화면에서 사라지게 하거나 반대로 보이게 하는 메소드
- 4가지 메소드들로 구성되어 있음.
	- fadeIn : 숨겨진 인자들을 보이게 함.
	
	- fadeOut : 보이는 인자들을 숨김.
	- fadeToggle : 인자들이 숨겨졌을 경우 fadeIn을 , 인자들이 화면에 
	나타나있을 경우 fadeOut을 실행함.
	
	- fadeTo : 인자들을 불투명하게 만듬.

-----------

### 문법
	$(selector).fadeIn(speed, callback) 
[fadeIn 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein)
   
	$(selector).fadeOut(speed, callback) 

[fadeOut 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout)

	$(selector).fadeToggle(speed, callback) 
[fadeToggle 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle)

	$(selector).fadeTo(speed, opacity, callback) 

[fadeTo 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeto)

---------------

### Parameter
- speed : 액션 속도 조절
- callback : 해당 메소드가 실행 완료되고 난 후 실행할 메소드를 지정
- opacity(fadeTo) : 
	- required(**필수 지정 파라미터**)
	-  0 과 1 사이의 값을 가지며, 값이 커질수록 불투명정도가 심해짐.

-----------

## 3. Sliding


### 개요

 - 인자(element)들을 커튼처럼 올리거나(slide up) 내리는(slide down) 메소드
 - 3가지 유형이 존재
	 -  slideDown : 인자를   미끄러지듯 끌어올림.
	 
	 - slideUp : 인자를 미끄러지듯 끌어내림.
	 - slideToggle : 인자가 slideUp되있을 경우 slideDown을, slideDown 되있을 경우 slideUp을 실행
 
------- 
  
### 문법
	$(selector).slideDown(speed, callback)
[slideDown 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down)

	$(selector).slideUp(speed, callback) 
[slideUP 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_up)

	$(selector).slideToggle(speed, callback) 
[slideToggle 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle)

-----

### Parameter

- speed : "slow" (by default)
- callback :


## 4. Animation


### 개요
- animate : "생기를 불어넣다"
- 인자(element) 에 움직임을 집어 넣어줌.

----------

## 4-1. Animate() - 기본사용법 

- 특정 움직임을 지정.

		$(selector).animate({params}, speed, callback)

- {params } : **required(필수지정) parameter**로서, 애니메이션화 될 CSS특성을 지정.
- speed : effect를 실행하는데 소요되는 시간(duration)을 지정.
- callback : 애니메이션이 실행완료된 이후에 실행된 메소드 지정. 

[예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1)

------

## 4-2. Animate() - 여러 특성들 지정하기

- animate()를 이용하여 **동시에** 다양한 특성들을 지정할 수 있음. 

[예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_multicss)

----

## 4-3. Animate() - 상대적인 값 이용

- 바로 이전에 지정한 값에 추가적인 값을 더하거나 빼줌으로서 상대적인 값을 지정할 수 있음
	- 더할 경우 : "+="
	- 뺄 경우 : "-="

[예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_relative)

-----

## 4-4. Animate() - 사전에 지정한(Pre-defined) 값(Pre-defined) 이용

- " hide", "show", "toggle" 과 같은 특성의 animation value를 할당 가능.

[예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_toggle)

------

## 4-5. Animate() - 배열기능(Queue functionality) 이용

- jQuery는 배열기능을 내장하고 있음
- 여러개의 animate() 메소드들을 하나하나씩 입력하면, jQuery는 메소드들을 불러오는 내부 순서를 만든 후, 메소드들을 차례대로 불러옴.
- 여러 메소드들을 동시가 아닌 차례대로 불러오고 싶을 경우, 배열기능을 이용할 수 있음.

[예시 1](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation)
[예시 2](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation2)

## Q. 그렇다면 모든 CSS Property들을 animate()으로 조작 가능할까?

- 정답은 **"거의 가능하다"** 임.
- 우선, property를 animate로 조작하기 위해서는 property가 **camel-cased(낙타표기법)**으로 표현되어 있어야 함.
	
	낙타표기법: 
	두 단어를 연달아 사용할 때 두번째 단어의 첫 글자를 대문자로 표시하는 방법
		paddle-left --> paddleLeft
		margin-right --> marginRight 
			
- 또한, jQuery의 core library는 color animation을 포함하지 않으므로, color를 animate하기 위해서는 [Color Animations plugin](http://plugins.jquery.com/)을 다운받아야 함.


## 5. Stop Animations

### 1. 개요

- jQuery stop() 은 **에니메이션**이 끝나기 전에 에니메이션을 멈추는 메소드

-----

### 2. 문법

	$(selector).stop(stopAll, goToEnd) :

- StopAll : optional(Default = False),
	-  False :현재 진행하고 있는 애니메이션만 멈춤.
	-  True : 모든 애니메이션 queue를 멈춤.
- goToEnd : optional(Default = False),
	- 현재 애니메이션을 즉시 실행완료 할 것 인지 결정하는 파라미터
- 즉, Default값으로 stop()메소드는 명령 시점에  진행되고 있는 인자의 애니메이션을 즉시 멈추는 효과를 보여줌.

-----

### 3. 예시

[stop() 예시](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_slide)

----

## 6. Callback Functions



### 1. 개요
- callback : **"회신"**
	- 호출될 함수를 알려 주어 다른 프로그램 또는 다른 모듈에서 함수를호출하게 하는 방법.(출처: 네이버 지식백과)
	
	-  내선 사용자 A가 다른 내선 B를 호출했을 때 B가 통화중인 경우에는 콜 백 장치에 접근(access) 코드를 다이얼 함으로써 B가 통화 종료하면 자동적으로 B를 호출하여 A에 접속해 주는 PABX서비스.(출처: 네이버 지식백과)

- jQuery에서는 코드가 한줄씩 실행되기 때문에, 뒤의 코드가 이전의 코드에서 실행한 효과(effect)가 끝나기 전에 실행되는 경우가 생기게 되고 이경우, 에러가 발생함. 이러한 경우를 막기 위해 callback function 이용.

- 현재 효과가 100% 끝난후에 실행되도록 지정.

----

### 2. 문법(예시)

	$(selector).hide(speed, **callback**)

- callback 파라미터는 hide를 먼저 실행시키고 , 
hide effect가 **끝난 후 ** callback에 해당하는 메소드를 실행시키도록 지정.

----

### 3.예시

[callback 적용](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_callback) vs [callback 미적용](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_no_callback)
(hide&alert method 이용)

-----

## 7. Chaining


### 1. 개요 
 -  jQuery에서는 action/method를 연결에서 작성 가능.
 
 -  Chaining을 통해 한 문장(statement)으로 여러 jQuery method(**같은 인자에 적용되는**) 을 실행시킬 수 있음. 
 
 - Chaining을 하게되면, 브라우저는 동일한 인자를 반복해서 찾지 않아도 됨.

----

### 2. 문법(예시)
	$(selector).method1().method2().method3();
 
 - selector를 통해 특정 인자를 불러오고 특정 인자에 대해 여러 메소드들을 적용시켜 주는 주는 방식.

 - **Tip** : Chaining을 하다가 문장이 길어질 경우 줄을 바꾸거나 들여쓰기를 해도 됨.(jQuery문법은 그렇게 엄격하지 않음 ㅎㅎ)

### 3. 예시

- 예시1 : [$("#p1").css("color", "red").slideUp(2000).slideDown(2000); ](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_chaining) 

- 예시2 : 
[$("#p1").css("color", "red")
  .slideUp(2000)
  .slideDown(2000);](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_chaining2)