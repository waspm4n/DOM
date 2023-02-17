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

let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'gray';