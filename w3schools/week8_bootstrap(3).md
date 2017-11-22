Bootstrap Grid System
---

부트스트랩의 그리드 시스템은 페이지당 최대 12개의 Column을 만들 수 있습니다. 만약 12개의 Column을 전부 사용하고 싶지 않다면 여러 개의 Column을 한 그룹으로 묶어 사용하면 됩니다.

- [Bootstrap Grid System](https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp)

부트스트랩은 반응형 시스템이기 때문에, 사용자의 스크린 크기에 따라 Column들을 재배치 해줍니다. 예컨데 큰 화면에선 컨텐츠들을 세 개의 Column으로 보는게 편할지도 모르지만, 스마트폰과 같은 작은 화면에서는 Column을 세로로 쌓아서 보는게 편할 것입니다.

> **Tip** : Grid Column은 한 Row당 12개가 할당된다는 것을 기억해야합니다. 12개를 넘게 지정하면 화면 크기와 상관없이 무조건 쌓이게 됩니다. (즉, Column 수를 합쳐서 반드시 12개가 되도록 만들면 됩니다.)


----------
### Grid Classes

부트스트랩은 총 네가지 클래스의 Grid System이 있습니다:

 - `xs` (스마트폰용 : < 768px)
 - `sm` (태블릿용 : >= 768px)
 - `md` (작은 노트북용 : >= 992px)
 - `lg` (큰 노트북 및 데스크탑용 : >= 1200px)



### Grid System Rules

 - 각 Row는 반드시 `.container` 또는 `.container-fluid` 안에 위치해야만한다.
 - 컨텐츠는 Columns안에 위치해야한다.
 - Grid Columns는 총합 12에 해당하는 숫자를 할당해줘야만 한다. 예를 들어, 같은 크기인 3개의 Columns를 만들고 싶다면 `.col-sm-4`로 지정해주면 된다.



### Basic Structure of a Bootstrap Grid

```
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    ...
  </div>
</div>
```


### BS Grid Example: Stacked to Horizontal

작은 기기에서는 쌓여있지만, 큰 기기에서는 다시 수평적으로 펼쳐지는 기초적인 Grid System을 만들어보려 합니다.

- [Example: Stacked to Horizontal](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_stacked_to_hor&stacked=h)

- [Example: Fluid container](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_container-fluid&stacked=h)

> **Tip**: `.container-fluid`를 사용하면 유동성있게 컨텐츠에 패딩(여백)을 만들어줍니다. 이거 공부하면서 여러번 써봤는데 걍 fluid가 보기 좋은 것 같습니다. 앞으로 예제 살펴볼 때도 그냥 fluid만 가지고 해보려고 합니다.


----------
## Bootstrap Grid: Device Size

작은 기기에 대해서는 `.col-sm-*` 클래스를 사용합니다. 예를 들어 25:75의 비율로 두 개의 Column을 만들고 싶다면:
```
<div class="col-sm-3">....</div>
<div class="col-sm-9">....</div>
```
이렇게 코딩을 해놓으면 부트스트랩이 이렇게 명령하게 됩니다.
"작은 사이즈의 기기냐? 그럼 -sm- 클래스를 찾아내서 그 안에 있는 내용을 사용하도록 하자!"

- [Example: Small Devices_1](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_small&stacked=h)
- [Example: Small Devices_2](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_small2&stacked=h)
- [Example: Medium Devices_1](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_medium&stacked=h)
- [Example: Medium Devices_2](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_medium2&stacked=h)
- [Example: Large Devices_1](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_large&stacked=h)
- [Example: Large Devices_2](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_large2&stacked=h)


----------
## Bootstrap Grid Examples

- [Three Equal Columns](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex1&stacked=h)
- [Three Unequal Columns](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex2&stacked=h)
- [Two Unequal Columns](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex3&stacked=h)
- [Two Columns with Two Nested Columns](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex4&stacked=h)
- [Mixed: Mobile and Desktop](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex5&stacked=h)
- [Mixed Mobile, Tablet and Desktop](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex6&stacked=h)
- [Clear Float](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex7&stacked=h)
- [Push and Pull](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_grid_ex9&stacked=h)

