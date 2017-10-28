**jQuery Traversing**
===================
----------
목차
-------------
1. What is "Traversing"? 
2. jQuery Ancestors
3. jQuery Descendants  
4. jQuery Siblings
5. jQuery Filtering

----------
What is "Traversing"?
-------------------
Traversing: 가로지르다, 횡단하다
= move through : make a passage or journey from one place to another


Traversing의 종류
- Ancestors: move up
- Descendants: move down
- Siblings: move sideways

*DOM tree

----------
jQuery Ancestors
--------------
지정한 element보다 상위에 있는 element를 선택한다.

- parent()
- parents()
- parentUntil()

**1) parent()**
한 단계 위에 있는 element 선택할 때 사용
> (document).ready(function(){
   $ ("span").parent();
}); 

[parent() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parent)

**2) parents()**
상위에 있는 element를 모두 선택할 때 사용
> (document).ready(function(){
    $("span").parents();
}); 

[parents() EX1](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parents)

원하는 상위의 element를 하나만 지정하여 선택할 때 사용
>(document).ready(function(){
    $("span").parents("ul");
});

[parents() EX2](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parents2)

**3) parentsUntil()**
지정한 두 개의 element 사이에 있는 ancestor들을 선택할 때 사용
>(document).ready(function(){
    $("span").parentsUntil("div");
});

[parentsUntil() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parentsuntil)

-----------------------
jQuery Descendants
-----------------------
지정한 element보다 하위에 있는 element를 선택한다.

- children()
- find()

**1) children()**
한단계 아래에 있는 element를 선택할 때 사용
> (document).ready(function(){
    $("div").children();
} ;

[children() EX1](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_children)

한단계 아래에 있는 element 선택시, option을 추가하여 특정한 element만 선택할 수 있음
> (document).ready(function(){
    $("div").children("p.first");
}); 

[children() EX2](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_children2)

**2) find()**
하위에 있는 element들 중에 조건에 맞는 것들을 모두 찾는다.
>(document).ready(function(){
    $("div").find("span");
}); 

[find() EX1](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_find)

모든 하위 element를 선택하고 싶다면 괄호 안에 *을 넣는다.
(ancestor에서 parents()의 개념과 같다.)
>(document).ready(function(){
    $("div").find("*");
}); 

[find() EX2](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_find2)

---------------------
jQuery Siblings
---------------------------
지정한 element와 같은 층위의 element를 선택할 때 사용한다.

- siblings()
- next()
- nextAll()
- nextUntil()
- prev()
- prevAll()
- prevUntil()

**1) siblings()**
같은 층위의 element를 선택할 때 사용
>(document).ready(function(){
    $("h2").siblings();
}); 

[siblings() EX1](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_siblings)

괄호 안에 option parameter를 넣으면 특정한 sibling 선택 가능
>(document).ready(function(){
    $("h2").siblings("p");
}); 

[siblings() EX2](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_siblings2)

**2) next()**
지정한 element 바로 다음에 쓰여진 element를 선택한다.
>(document).ready(function(){
    $("h2").next();
}); 

[next() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_next)

**3) nextAll()**
지정한 element 다음에 쓰여진 모든 element를 선택한다.
>(document).ready(function(){
    $("h2").nextAll();
});

[nextAll() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_nextall)

**4) nextUntil()**
같은 층위의 element들 중에서 지정된 두 개의 element 사이에 있는 것들을 선택한다.
>(document).ready(function(){
    $("h2").nextUntil("h6");
}); 

[nextUntil() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_nextuntil)

**5) prev()**
<->next()

**6) prevAll()**
<->nextAll()

**7) prevUntil()**
<->nextUntil()

-----------
jQuery Filtering
---------------
특정한 element 지정하기 위한 method

- first()
- last()
- eq()
- filter()
- not()

**1) first()**
첫 번째 element를 선택한다.
>(document).ready(function(){
    $("div").first();
}); 

[first() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_first)

**2) last()**
마지막 element를 선택한다.
>(document).ready(function(){
    $("div").last();
}); 

[last() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_last)

**3) eq()**
괄호 안에 특정한 index number 넣어서 요소를 선택한다.
index number는 0부터 시작
>(document).ready(function(){
    $("p").eq(1);
}); 

[eq() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eq)

**4) filter()**
특정한 기준을 제시하고 그에 맞는 것만 선택한다.
>(document).ready(function(){
    $("p").filter(".intro");
}); 

[filter() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_filter)

**5) not()**
<-> filter()
주어진 기준에 맞지 않는 것만 선택된다.
>(document).ready(function(){
    $("p").not(".intro");
}); 

[not() EX](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_not)

