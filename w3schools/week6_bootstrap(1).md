# Bootstrap

## What is Bootstrap?

- Bootstrap : front-end framework 
- HTML과 CSS, 그리고 Javascript까지를 기반으로 한 디자인 템플릿을 가지고 있다 
- 반응형 웹 디자인도 가능하다
  - 반응형 웹 디자인 : 작은 휴대폰화면부터 큰 화면까지 알아서 보기 좋게 만들어준다

## Where to Get Bootstrap?

1. Bootstrap을 다운 받는다

   * http://getbootstrap.com/getting-started/

2. Bootstrap CDN 사용

   * CDN : Contents Delivery Network

   * 다운이 필요없고 트래픽 절약 가능

     ```
     <!-- Latest compiled and minified CSS -->
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

     <!-- jQuery library -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

     <!-- Latest compiled JavaScript -->
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
     ```

   * 위 코드만 쳐주면 됨

## Create First Web Page With Bootstrap

1. HTML5 doctype

   ```
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8"> 
     </head>
   </html>
   ```

2. Bootstrap 3 is mobile-first 

   ```
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```

   올바른 렌더링과 touch zooming을 위하여 위의 태그를 추가

   width = device-width : 기기의 스크린 너비를 입력

   initial-scale = 1 : 초기의 zoom level을 셋팅함

3. Containers

   Bootstrap은 사이트의 contents들을 갖고 있는 container가 필요하다

   * .container : fixed width container
     * [.container](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_gs_container&stacked=h)
   * .container-fluid : full width container
     * [.container-fluid](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_gs_container-fluid&stacked=h)

# Bootstrap Grids

[12 grid](https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp)

## Grid Classes

The Bootstrap grid system has four classes:

- `xs` : phones  <=768px 
- `sm` : tablets  >= 768px 
- `md` : small laptops  >= 992px 
- `lg` : laptops and desktops >= 1200px

## Basic Structure of a Bootstrap Grid

```
<div class="row">
  <div class="col-*-*"></div>
  <div class="col-*-*"></div>
</div>
```

1. <div class = 'row'> : row를 만든다

2. .col-[class]-[size]

   ex) .col-sm-4     .col-xs-2

3. size 더한것이 한 row당 12

[3 equal Columns ](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex1&stacked=h)

[2 unequal Columns](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex3&stacked=h)

# Bootstrap Text/Typography

## Default Settings

 font-size is 14px, with a line-height of 1.428.

## Bootstrap vs. Browser Defaults

Bootstrap에서는 HTML element를 써도 약간 다르게 스타일이 표시됨

[<h1>- <h6>](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_txt_hn&stacked=h)

[<small>](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_txt_small&stacked=h)

[<mark>](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_txt_mark&stacked=h)

[contextual colors](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_txt_colors&stacked=h)

[contextual backgrounds](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_txt_bgcolors&stacked=h) 

# Bootstrap Tables

.table class

[basic table](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_table_basic&stacked=h)

.table-striped class

[striped rows](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_table_striped&stacked=h)

.table-bordered

[bordered table](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_table_bordered&stacked=h)

.table-hover

[Hover Rows](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_table_hover&stacked=h)

.table-condensed : cell padding을 반으로 줄임

[Condensed Table](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_table_condensed&stacked=h)

contextual classes : .active .success .info .warning .danger

[contextual](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_table_contextual&stacked=h)

.table-responsive : 일정 기준 보다 너비가 좁아지면 table이 줄어듬

[Responsive Tables](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_table-responsive&stacked=h)

[Exercise - table-hover](https://www.w3schools.com/bootstrap/exercise.asp?filename=exercise_tables4)

# Bootstrap Images

## Responsive Images

[.img-responsive](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_img_responsive&stacked=h)

## Responsive Embeds

비디오, 슬라이드쇼 등도 가능

[responsive embeds](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_responsive_embed_4by3&stacked=h)

4:3, 16:9 비율 선택 가능

# Bootstrap Jumbotron 

jumbotron : 주의를 끌기 위한 큰 박스

​		      회색 박스 배경 + 둥근 코너

[jumbotron](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_jumbotron&stacked=h)

[jumbotron out of container](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_jumbotron2&stacked=h)

​	-> jumbotron이 화면 끝까지 있기를 원할때 사용

#  Page Header

[header](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_page-header&stacked=h)

heading과 아래의 수평선을 그리게 됨

# Wells

모서리가 둥글고 회색 배경

[well](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_well_size&stacked=h)

# Alerts

`.alert-success`, `.alert-info`, `.alert-warning` ,`.alert-danger`

class = alert-link

[alert link](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_alerts_link&stacked=h)

.alert-dismissable + .fade in

[animated alerts](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_alerts_fade&stacked=h)

# Buttons

## Button Styles

- `.btn`
- `.btn-default`
- `.btn-primary`
- `.btn-success`
- `.btn-info`
- `.btn-warning`
- `.btn-danger`
- `.btn-link`

[button styles](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_styles&stacked=h)

## Button Sizes

- `.btn-lg`
- `.btn-md`
- `.btn-sm`
- `.btn-xs`

```
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary btn-md">Medium</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
<button type="button" class="btn btn-primary btn-xs">XSmall</button>
```

# Button Groups

.btn-group

[buttons together on a single line](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_group&stacked=h)

.btn-group-vertical

[vertical button group](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_group_v&stacked=h)

.dropdown-menu

[button + dropdown](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_button_group_dropdown&stacked=h)

# Glyphicons

폰트를 기반으로 한아이콘 (안깨짐)

.glyphicon-envelope  .glyphicon-search .glyphicon-print...

[glyphicons](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_glyphs&stacked=h)

# Badges

.badge  (button, span 등 element들 안에서 쓰일 수 있음)

[badges](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_badges&stacked=h)

## Labels

contextual labels

[labels](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_labels2&stacked=h)

# Progress Bars

<div> element에 progress 클래스 추가

[progress bar](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_progressbar1&stacked=h)

1.  A progress bar with a label

2.  progress bars with the different contextual classes

3.  stripes to the progress bars

4. animate the progress bar

   [animated progress bar](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_progressbar5&stacked=h)

5. stacked progress bar

   [stacked progress bar](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_progressbar6&stacked=h)

# Pagination

<ul> element에 .pagination

[basic pagination](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pagination&stacked=h)

.active : 현재 있는 곳 표시

[active state](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pagination_active&stacked=h)

.disabled

[disabled state](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pagination_disabled&stacked=h)

## Pagination Sizing

.pagination-lg

.pagination-sm

## Breadcrumbs

.breadcrumb : 사이트 이동경로 (사용자 현재위치 알려줌)

[breadcrumb](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_breadcrumbs&stacked=h)

## Pager

previous, next button을 보여줌

[pager](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_pager&stacked=h)

