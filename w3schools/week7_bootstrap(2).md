# Bootstrap
###
###
###
### 자세한 설명 보다는 그림과 기본적인 적용 정도만 다루겠습니다.
### 귀찮아서가 아니라 나중에 쓰실 때 이 문서를 쓱 보시고 원하는 기능을 찾으시기 편하도록 ㅎㅎ
## 목차
1. List groups
2. Panels
3. Drop downs
4. Collapse
5. Tabs/Pills
6. Nav bar
7. Forms
8. Input 1, 2
9. Input Sizing
10. Media Object
11. Carousel
12. Modal
13. Tool tip
14. Pop over
15. Scrollspy
16. Affix

## List groups

#### 기본적으로는 ul, li 를 이용할때 사용합니다.
[.basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group&stacked=h)

[.badge](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group_badge&stacked=h)
#### Badge는 리스트에 대한 추가적인 정보를 미리 보여줄 때 씁니다.
![ex_screenshot](/w3schools/week7/1.PNG)


#### ul에는 .list_group li에는 .list-group-item  을 class로 넣어주면 됩니다.
##### ++++ 만약 list 하나하나에 링크를 달면서 좀 효과를 주고 싶다면 ul과 li **대신에** div 와 a를 이용하여 리스트를 만듭니다.


#### ++++추가적인 효과 예시와 링크
- [음영](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group_link&stacked=h)
####
![ex_screenshot](/w3schools/week7/2.PNG)

- [하이라이트](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group_active&stacked=h)

####
![ex_screenshot](/w3schools/week7/3.PNG)

- [비활성화](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group_disabled&stacked=h)
####
![ex_screenshot](/w3schools/week7/4.PNG)

- [상태표시](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group_context&stacked=h)( 별로 안이뻐서 비추 )
####
![ex_screenshot](/w3schools/week7/5.PNG)


## Panels
#### 영역이 구분된 박스에 사용하는 효과입니다.
#### 한마디로 페이지 안에 Contents가 들어갈 박스입니다.
[.panel](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_panels&stacked=h)
#### ++++추가적인 효과 예시와 링크
- [Heading](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_panels_heading&stacked=h)
####
![ex_screenshot](/w3schools/week7/6.PNG)

- [Footer](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_panels_footer&stacked=h)

####
![ex_screenshot](/w3schools/week7/7.PNG)

- [Group of Panel](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_list_group_disabled&stacked=h)
####
![ex_screenshot](/w3schools/week7/8.PNG)


## Drop downs
#### 드롭다운 메뉴를 구성할 때 씁니다.
[.dropdown](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_dropdown-menu&stacked=h)
#### button과 함께 사용하고 dropdown이라는 클래스 안에 ul을 포함 하면 됩니다

#### ++++추가적인 효과 예시와 링크
- [드롭다운 내부 음영](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_dropdown-divider&stacked=h)
####
![ex_screenshot](/w3schools/week7/9.PNG)

- [드롭다운 내부 Heading](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_dropdown-header&stacked=h)
####
![ex_screenshot](/w3schools/week7/10.PNG)

- [드롭다운 내부 비활성화](https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp) (마우스를 갖다대면 X표시가 뜹니다)
####
![ex_screenshot](/w3schools/week7/11.PNG)

- [드롭업](https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp)
####
![ex_screenshot](/w3schools/week7/12.PNG)



## Collapse
#### 많은 양의 콘텐츠를 숨겨놓을 때 씁니다.(클릭하면 펼쳐짐)
#### button 과 함께 사용합니다.
[.collapse](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible&stacked=h)
#### button 에 data-target 이라는 attribute를 설정하고 컨텐츠의 id를 #과 함께 넣어주시면 됩니다.

#### ++++추가적인 효과 예시와 링크
- [Panel에 적용](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible_panel&stacked=h)

- [List에 적용](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible_listgroup&stacked=h)

- [Collapse Group](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_collapsible_accordion&stacked=h) ( 여러개의 콘텐츠 중에 하나 열릴때 나머지는 자동으로 닫히게 해줍니다. data-parent라는 attribute를 사용합니다.)
## Tabs/Pills
#### 메뉴 만들때 필요한 부분입니다.
#### 기본적으로는 메뉴표를 ol로 만들고 아래의 class를 달아주면 세로였던 메뉴가 가로로 바뀝니다.
[.list-inline](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_menu_list-inline&stacked=h)

#### ++++추가적인 효과 예시와 링크
- [Tab](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs&stacked=h)
####
![ex_screenshot](/w3schools/week7/15.PNG)
#### 어디서 많이 본 디자인이다 했더니
####
![ex_screenshot](/w3schools/week7/16.PNG)
#### ㅎㅎ..

- [Tab + Dropdown](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs_dropdown&stacked=h)
####
![ex_screenshot](/w3schools/week7/17.PNG)

- [Pills](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pills&stacked=h) 현재 페이지를 active라는 클래스로 표시해줍니다.
####
![ex_screenshot](/w3schools/week7/18.PNG)

- [Pills 세로버전](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pills_vertical&stacked=h)
####
![ex_screenshot](/w3schools/week7/19.PNG)

- [Pills 세로버전 in Row](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pills_vertical_row&stacked=h)
####
![ex_screenshot](/w3schools/week7/20.PNG)

- [Pills 세로버전 + Dropdown](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pills_dropdown&stacked=h)
####
![ex_screenshot](/w3schools/week7/21.PNG)

- [Pills 가로버전 + 화면 꽉채움](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs_pills_justified&stacked=h)
####
![ex_screenshot](/w3schools/week7/22.PNG)

- [Tab + 컨텐츠 동적](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tabs_dynamic&stacked=h)
####
![ex_screenshot](/w3schools/week7/23.PNG)

## Nav bar
[.navbar navbar-default](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar&stacked=h)
#### nav 를 이용할때 씁니다.
#### 효과를 다른거를 주려면 그냥 navbar-________여기만 바꿔주면 OK

#### ++++추가적인 효과 예시와 링크
- [반전](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_inverse&stacked=h)
####
![ex_screenshot](/w3schools/week7/24.PNG)

- [반전 + 오른쪽에 로그인 메뉴](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_right&stacked=h)
####
![ex_screenshot](/w3schools/week7/25.PNG)

- [반전 + 오른쪽에 검색 메뉴](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_form_addon&stacked=h)
####
![ex_screenshot](/w3schools/week7/26.PNG)

- [반전 + 위치 절대고정](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_fixed&stacked=h)

- [반전 + Collapse](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_collapse&stacked=h)
####
![ex_screenshot](/w3schools/week7/27.PNG)
####
![ex_screenshot](/w3schools/week7/28.PNG)

## Forms
#### input, textarea, select 를 사용할 때 .form-control을 클래스로 붙여주시면 기본 스타일링이 적용됩니다.
#### 또는 div 자체에 form-group이라는 클래스를 붙여주셔도 됩니다.
[기본](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_basic&stacked=h)

#### ++++추가적인 효과 예시와 링크
- [한줄에](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_inline&stacked=h)

## Input 1, 2
#### 다양한 인풋에 대해 스타일링을 지원하지만 타잎이 제대로 선언되지 않으면 부분적으로만 적용됩니다.
#### 스타일적으로 특이한 기능이 있는 것이 아니고 단순한 스타일링만 있기 때문에 링크만 적겠습니다.

- [Text area](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_textarea&stacked=h)

- [Check box](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_checkbox&stacked=h)

- [Radio button](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_radio&stacked=h) (하나만 선택되는 check box를 말합니다)

- [Select list](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_select&stacked=h)

- [Input Group](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_select&stacked=h) ( 이전에 받았던 입력 누르면 자동 입력되는 form입니다 )

####
![ex_screenshot](/w3schools/week7/29.PNG)

- [Form state](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_horizontal_all&stacked=h) ( form의 상태를 표시할 수 있습니다 )(비활성화, 성공, 오류 ,경고 등이 아이콘으로 표시됩니다)

####
![ex_screenshot](/w3schools/week7/30.PNG)
## Input Sizing
#### 오해하시면 안될게 sizing이라는거는 input 몇자리를 받을지에 관한 내용이 아니라 input입력할 때 사용자 한테 어떤 크기로(input박스, 글자크기, 보일지에 관한 내용입니다.

- [글자 크기](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_input_height&stacked=h)

####
![ex_screenshot](/w3schools/week7/31.PNG)

- [Input box 크기](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_input_width&stacked=h)

####
![ex_screenshot](/w3schools/week7/32.PNG)

- [help text](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_input_help-block&stacked=h)

####
![ex_screenshot](/w3schools/week7/33.PNG)
## Media Object
#### 페이스북 댓글, 슬랙 메시지창이 프로필과 이름 내용 등을 한번에 나타내는 것처럼 쫌더 이쁘게 나타냅니다.
#### .media-______를 이용해 나타냅니다._____에는 left, heading, right, body 등이 들어갈수 있습니다.
- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_media_left_right)

####
![ex_screenshot](/w3schools/week7/34.PNG)

## Carousel
#### 이미지 같은게 자동으로 넘어가면서 보여지고 하단에 선택해서 볼수 있게 만듭니다.(이벤트 창, 상품 광고 같은데에 많이 씁니다.)
#### 가장 바깥 div에 id (아무 이름이나) 붙여주시고 
#### class 에 carousel 이라는 class와 slide(자동으로 넘어가는 효과주려면)라는 class 붙여줍니다. 
#### data-ride라는 속성에 carousel을 넣어주시면 페이지 로딩과 함께 이미지가 휙휙 바뀝니다.

#### 하단에 사용자가 이미지를 선택하여 볼수 있게 만드는 부분을 indicator 라고 하는데 ol에 carousel-indicators라는 클래스를 붙여 구현합니다

#### 이때 ol 내부에 li에는data-target속성에 앞서 정한 div의 id,
####  data-slide-to 속성에 숫자(0부터 순서대로) 붙여주시면 됩니다.

#### 이미지를 감싸고 있을 div에는 carousel-indicators 라는 class를 붙여주시고 내부에 실제 이미지를 넣는 div에는 item이라는 class 를 붙여주시면 됩니다.

#### 빼먹으면 안되는 것은 슬라이드 중 하나에는 active를 class에 추가해주셔야 한다는 것입니다.

- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_carousel&stacked=h)

####
![ex_screenshot](/w3schools/week7/34.PNG)
## Modal
#### Button을 누르면 경고창 비슷한 pop-up window를 창 상단에서 보이도록 만들어줍니다.

#### button 에다 data-toggle에  'modal', data-target에 대화창 만들 때 붙일 id를 넣어줍니다.

#### 대화창 만들 div에 앞서 썼던 id를 붙이고 modal을 클래스에 넣어줍니다. 이때 fade를 같이 넣어주면 나오고 들어갈때의 효과가 들어갑니다.

#### 콘텐츠를 넣을 div를 또 만들어주고 클래스에 modal-content라고 정의 합니다.

#### 내부는 modal-header, modal-body, modal-footer로 채워넣으시면 되는데 modal 창에 HTML 문서를 또 띄우는거라고 생각하시면 될거 같습니다.

- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_modal&stacked=h)

####
![ex_screenshot](/w3schools/week7/35.PNG)
## Tool tip
#### 마우스를 가져다 대면 pop-up box가 뜨도록 합니다.
#### 기본적으로 a태그를 사용할 때 씁니다.
#### data-toggle 속성에 tooltip 을 넣고 title 속성에 띄우고 싶은 말을 쓰시면 됩니다.

- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tooltip&stacked=h)

####
![ex_screenshot](/w3schools/week7/36.PNG)
## Pop over

#### tool tip 과 비슷한데 다른점은 button을 기본적으로 사용한다는 점이고
#### 스위치 식이라 마우스를 뗀다고 사라지는것이 아니라 한번 눌러줘야 사라집니다.

#### data-toggle 속성에 popover 을 넣고 title 속성에 띄우고 싶은 말을 쓰시면 됩니다.

- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_popover&stacked=h)

####
![ex_screenshot](./w3schools/week7/37.PNG)



## Scrollspy
#### 그야말로 스크롤을 spy 처럼 따라다닙니다. 스크롤을 내리면 nav에서 지정한 부분이 나타나면 nav에 강조된다거나특정효과가 나타납니다.

#### 스크롤로 이동하는 전체(일반적으로는 body)에 data-spy속성에 scroll을 넣어줍니다.

- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_scrollspy&stacked=h)


## Affix
#### 처음에 페이지를 켰을때는 nav 가 중간에 있다가 스크롤을 내렸을 때 nav를 지나쳐 버리면 그때 상단/하단에 고정 시켜줍니다.

#### 반고정이라는 표현이 딱 맞는것 같습니다.

#### 반고정을 원하는 data-spy 속성을 affix로 설정합니다.

#### class가 affix, affix-top 사이에서 변하면서 CSS 적용되는데 이때 위치를 정해주는 것을 해주어야 합니다.

#### 즉, CSS 에서 affix부분의 속성에 top :0; 이런식으로 저희가 정의를 해주어야 한다는 것입니다.

#### 사실 저도 잘 이해가 안가서 이부분은 기본적인것만 아시고 읽어보시는걸 추천합니다.
- [basic](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_scrollspy_affix&stacked=h)
