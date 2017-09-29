jQuery HTML
===================

0. 들어가기에 앞서: DOM이란?
-------------

- Document Object Model. 
- HTML과 XML 문서를 접속(access) 하는 표준.
- 프로그램과 스트립트로 하여금 문서의 내용, 구조, 스타일을 쉽게 접근 및 업데이터해주는 플랫폼/인터페이스.
- W3C가 정한 개발 규정. DOM은 그래픽, 텍스트, 헤드라인, 스타일 등 웹의 모든 요소가 자바 스크립트(Java Script)나 스크립트 언어에 의해 조정될 수 있도록 해준다.
- 웹 브라우저를 통한 확장성 생성 언어(XML) 문서의 상호 연동을 위한 객체 기반의 문서 모델.

잘 와닿지 않죠...? 그래서 여기저기서 설명을 많이 가져와봤습니다.. 오늘 내용은 그냥 DOM 이라는 게 있다 정도만 알고 가셔도 충분합니다!!

**jQuery와 무슨 관련이 있는거지? **
1. jQuery를 통해 DOM를 다룰 수 (manipulate) 있다.
2. jQuery에는 DOM과 관련된 메소드들이 많다. 오늘 우리가 살펴볼 것들 :)
------------------
# 1. Get
-------------------

**설명**
DOM을 다루는 간단한 메소드들
1. text(): 선택한 인자 (element)들의 텍스트 내용을 설정(set)하거나 반환(return)해준다.
2. html(): 선택한 인자 (element)들의 내용을 설정, 반환해준다. (HTML markup 포함)
3. val(): form fields의 값 설정, 반환.
4. attr(): attribute 값들을 가져오는 메소드. 

설명만 봐서는 잘 와닿지 않을텐데, 예시를 보며 이해해봐요!

**문법&예시**
1. text(): 
* text content 반환: $(selector).text(content)
* parameter:  
content - 설정(set)을 할 시 필수. 선택한 인자의 새로운 텍스트 내용을 지정.

2. html():
* 내용 반환: $(selector).html(content)
* parameter:
content - 설정(set)을 할 시 필수. 선택한 인자들에 대한 새로운 content 지정. HTML tag 포함 가능.
* 예시: [text(), html() 예시] (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_html_get)


3. val():
* 속성 값 (value attribute)을 반환: $(selector).val(value)
* parameter:
value - 설정(set)을 할 시 필수. 속성값의 값 (value of the value attribute)을 지정 
* 예시: [val() 예시] (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_val_get)

4. attr():
* 속성의 값(the value of an attribute)을 반환: $(selector).attr(attribute,value)
* parameter:
attribute - attribute의 이름 구체화.
value - 해당 attribute의 값을 지정.
* 예시: [attr() 예시] (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_attr_get)



-------

# 2. Set
-------------------

아까 사용했던 메소드들로(text(), html(), val()) 내용을 설정(set)해봅시다.

**문법&예시**
각 메소드의 parameter는 위에 소개된 것과 같습니다!

1. text():
* text content 설정: $(selector).text(content)

2. html():
* 내용 설정: $(selector).html(content)
* get엣에서와 마찬가지로 html태그들을 포함할 수 있다.

3. val():
* 속성 값을 설정: $(selector).val(value)
[text(), html(), val() 예시] (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_html_set)

4. attr():
* 속성과 값을 설정: $(selector).attr(attribute,value)
* 속성과 값 여러개 설정: $(selector).attr({attribute:value, attribute:value,...})
[attr() 예시1] (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_attr_set)
[attr() 예시2] (https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_attr_set_pairs)

5. tip
* get, 즉 attribute의 value값을 return 해올때는 조건에 부합하는 요소 중 '첫번쨰' 애들만 데려오고
* set, 즉 attribute의 value값을 설정해줄때는 부합하는 모든 요소에 값이 설정됩니다.
----------

# 3. Add
-------------

**설명**
새로운 내용 추가하는 메소드:
-	append(): 선택한 인자(element) 끝에 (at the end) 내용 추가
-	prepend(): 선택한 인자 앞에 (at the beginning) 내용 추가
-	after(): 선택한 인자 다음에 내용 추가
-	before(): 선택한 인자 전에 내용 추가
append와 after, prepend와 before이 많이 헷갈리실텐데, 예시를 보면 명확해집니다!! 예시를 같이 보아요 :)

**문법&예시**
1. append: 
* $(selector).append(content)
* parameter:
content - 필수. 
	* 삽입할 내용을 지정 (HTML 태그 포함 가능)
* [append() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append

2. prepend: 
* $(selector).prepend(content,function(index,html))
--parameter: append와 동일.
[prepend() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_prepend

3. after() 
* $(selector).after(content,function(index))

4. before()
* $(selector).before(content,function(index))
parameter: after와 동일
[after(), before() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_after


----------


# 4. Remove
--------------------

**설명**
- remove(): 선택한 인자들 (+ child elements) 삭제.. parameter에서 삭제하고 싶은 인자 선택가능. 
- empty(): 선택한 인자들의 child element만 삭제


**문법&예시**
1. remove:
* $(selector).remove(selector)
* parameter:
selector - optional. 
	* 제거하고 싶은 특정 인자를 지정. 
	* 여러개의 인자를 제거하고 싶을 때는 ,  로 각 인자를 구분한다.
	
[remove() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_remove

[remove() 예시2] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_remove2

[remove() 예시3] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_remove3
(','로 여러 인자가 연결된 예시)

2. empty: 선택한 인자들의 child element만 삭제(말그대로 비움)
* $(selector).empty()   문법이 너무 간단하죠..? parameter도 없습니다....
[empty() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_empty


----------


# 5. Get and Set CSS Classes
--------------------

**설명**
Jquery로 CSS도 다룰 수 있습니다!
CSS 다루는 메소드:
-	addClass(): 선택한 인자들에 하나 이상의 클래스 더하기
-	removeClass(): 선택한 인자들로부터 하나 이상의 클래스 없애기
-	toggleClass(): 인자들에 클래스 더하거나 없애기
-	css(): style attribute를 설정하거나 반환해줌.


**문법&예시**
1. addClass():
* $(selector).addClass(classname)
* parameter: 
classname - 필수. 
	* 넣고 싶은 하나 이상의 클래스 이름을 지정.
* [addClass() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_addclass


2. removeClass():
* $(selector).removeClass(classname)
* parameter: 
용도가 add가 아니라 제거라는 점 빼고는 addClass와 동일합니다.
[removeClass() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_removeclass

3. toggleClass():
* $(selector).toggleClass(classname,switch)
* parameter:
classname - 필수. 
	* 삭제 혹은 더하고 싶은 하나 이상의 클래스 이름 지정. 
	* 여러 클래스를 지정하고 싶은 경우, 띄워쓰기로(a space) 클래스 이름들을 구분합니다.
	
* switch - optional.
	* A Boolean value specifying if the class should only be added (true), or only be removed (false)        --> 영어 뜻이 더 잘 와닿는 거 같아서 그대로 가져왔습니다.
[toggleClass() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_toggleclass
[switch 예시]https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_toggleclass_switch

# 6. css()
--------------------

앞에서 봤듯이, css() 메소드는 스타일 속성(attribute)를 설정/반환합니다! parameter를 바꾸면서 속성을 조정할 수 있습니다.

**문법&예시**

1. Css 속성(property) 반환: css("propertyname");
[css() property 반환 예시]
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_getcolor

2. css 속성 설정: css("propertyname","value");
value: 내가 변경하고 싶은 값.
[css() property 설정 예시]
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_setcolor

3. css 속성 여러 개 설정하기: css({"propertyname":"value","propertyname":"value",...});
[css() property 속성 여러개 설정 예시]
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_set_multiple


----------

# 7. Dimension
--------------------

인자, 브라우저 창의 dimension (높이, 넓이) 설정

![enter image description here](https://www.w3schools.com/jquery/img_jquerydim.gif)

**설명**
1. width(): 인자의 너비 설정, 반환 (padding, border, margin 제외)
2. height(): 인자의 높이 설정, 반환 (padding, border, margin 제외)
3. innerWidth(): 인자의 너비 반환 (padding 포함)
4. innerHeight(): 인자의 높이 반환 (padding 포함)
5. outerWidth(): 인자의 너비 반환 (padding, border 포함)
6. outerHeight(): 인자의 높이 반환 (padding, border 포함)
7. outerWidth(true): 인자의 너비 반환 (padding, border, margin 포함)
8. outerHeight(true): 인자의 높이 반환 (padding, border, margin 포함)
9. HTML 문서, 윈도우 (browser viewport) 의 너비, 높이 반환


1. width&height
* width 반환: $(selector).width()
* width 설정: $(selector).width(value)
* height 반환: $(selector).height()
* height 설정: $(selector).height(value)
--> value: width나 height를 설정하고 싶을 때 필요함. default 단위: px
[width(), height() 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dim_width_height


2. innerWidth, innerHeight:
* innerWidth 반환: $(selector).innerWidth()
* innerHeight 반환: $(selector).innerHeight()
[innerWidht, innerHeight 예시] https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dim_innerwidth_height


3. outerWidth, outerHeight:
* outerWidth 반환: $(selector).outerWidth(includeMargin)
* outerHeight 반환: $(selector).outerHeight(includeMargin)
--> includeMargin: optional. 
	* margin을 포함할지 말지 지정하는 boolean value. 
	* false: 디폴트. margin 포함 X. 그럼 padding, border만 포함.
	* true: margin도 포함.
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dim_outerwidth_height

4. outerWidth(true), outerHeight(true):
위와 같은데, margin을 포함했을 때의 경우.
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dim_outerwidth_height2

5. 가져오는것 말고 값을 설정할수도 있습니다.
https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dim_width_height_set