// const para = document.querySelector('.error'); //to select a specefic element(single)
// console.log(para);

// const para = document.querySelectorAll('p');    //to select multiple element.
// const errors = document.querySelectorAll('.error');//stored as node list
// errors.forEach(errors=>{
//     console.log(errors);
// })
// console.log(para);

//grabbng an element ny id
// const title = document.getElementById("page-title");
// console.log(title);
// //get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// //get elements by their tag
// const paras = document.getElementsByTagName('p');
// console.log(paras[1]);
// const para = document.querySelector('p');
// para.innerText = 'new world';
// const para = document.querySelectorAll('p');
// para.forEach(para => {
//     console.log(para);
//     para.innerText+='luffy';
// })
//  const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML = '<h2>This is a new line</h2>' //changed the content in <div class = 'content'

// const people = ['luffy','zoro','sanji'];
// people.forEach(person=>{
//     content.innerHTML+= `<p>${person}</p>`
// })
const link = document.querySelector('a');

console.log(link.getAttribute('href')); //getting the attribute that is selected in the href of <a> tag
link.setAttribute('href','https://www.w3schools.com'); // changing the attribute here
link.innerText= 'hello darkness my old friend'; //changing the innertext of the anchor tag

const para = document.querySelector('p.errors');
console.log(para);
console.log(para.getAttribute('class'));
para.setAttribute('class','newerror');
para.setAttribute('style','color: green');

const hdr = document.querySelector('h1');
// hdr.setAttribute('style','margin: 50px'); //ovverrides
hdr.style.margin = '50px';
hdr.style.color = 'crimson';
hdr.style.fontSize = '60px';
//to delete a property using style tag
hdr.style.margin = "";