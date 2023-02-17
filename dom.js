//pregled document object
// console.dir(document);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.title);
// console.log(document.DOCUMENT_TYPE_NODE);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.images);
// console.log(document.all);
// console.log(document.links);
//mogu se seletovati kao indexi u nizu npr [1] [0] itd

// GET ELEMENT BY ID
//console.log(document.getElementById("main-header"));
//let headerTitle = document.getElementById("main-header");
//console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "goodbye";
//headerTitle.innerHTML = "<h3>Hello</h3>"
//headerTitle.style.borderBottom = 'solid 5px #ff0000'

// GET ELEMENTS BY CLASS NAME //

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'gray';

// //Daje gresku
// //items[1].style.backgroundColor = "f4f4f4";
// // for (let i = 0; i < items.length; i++){
// //     items[i].style.backgroundColor = "darkblue"
// // };

// // QUERY SELEKTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ffff';
// let input = document.querySelector('input');
// input.value = 'Hello world';
// let submit = document.querySelector('input[type = "Submit"]');
// submit.value = "SEND";
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// // QUERY SELEKTOR "ALL"//
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)')
// for (let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = '#ccc';
// };
