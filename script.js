//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='hello';
// -----------------------------------------------------------

// #selectors 
// 1.get element by ID

// console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.textContent = 'Hello';
// headertitle.innerText ='GoodBye';
// headertitle.innerHTML = '<h3> yes here </h3>'
// headertitle.style.borderBottom ='Solid 3px black';
// ------------------------------------------------------------------

// 2.get Element by class name 

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 12';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'green';
// }
// -------------------------------------------------------

// 3. get elements by tag name 
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'green';
// }
// ------------------------------------------------------------

// 4. get Element by queryselector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black';

// var input = document.querySelector('input');
// input.value = "hello work";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color ="red";

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'orange';
// ------------------------------------------------------------

// 5.get element by queryselector all 

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "brown";
// }
// -------------------------------------------------------------------



//ANOTHER TOPIC FROM HERE
// 1. TRAVERSING THE DOM

