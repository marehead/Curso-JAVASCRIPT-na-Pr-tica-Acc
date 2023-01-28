//https://pt.stackoverflow.com/questions/304324/qual-a-diferen%C3%A7a-entre-htmlcollection-nodelist-e-object
//https://www.geeksforgeeks.org/htmlcollection-for-loop/

var exId1 = document.getElementById("id1");
var exId2 = document.getElementById("id2");
var exId3 = document.getElementById("id3");
var exClass1 = document.getElementsByClassName("class1");
var exClass2 = document.getElementsByClassName("class2");
var exTag = document.getElementsByTagName("div");
var exSelec = document.querySelector('[src]');//atributo
var exSelec1 = document.querySelector('.class1');//classname
var exSelec2 = document.querySelector('div');//tagname
var exSelec3 = document.querySelector('#id1');//id
var exSelecAll = document.querySelectorAll('[src]');
var exSelecAll1 = document.querySelectorAll('.class1');

console.log("************\ngetElementById:");
console.log('document.getElementById("id1"):', exId1);
console.log('document.getElementById("id1").innerHTML:', exId1.innerHTML);
console.log('document.getElementById("id1").innerText:', exId1.innerText);
console.log("************");
console.log('document.getElementById("id2"):', exId2);
console.log('document.getElementById("id2").innerHTML:', exId2.innerHTML);
console.log('document.getElementById("id2").innerText:', exId2.innerText);
console.log("************");
console.log('document.getElementById("id3"):', exId3);
console.log('document.getElementById("id3").innerHTML:', exId3.innerHTML);
console.log('document.getElementById("id3").innerText:', exId3.innerText);
console.log("************\ngetElementsByClassName:");
console.log('document.getElementsByClassName("class1"):', exClass1);
console.log('document.getElementsByClassName("class2"):', exClass2);
console.log("************\ngetElementsByTagName:");
console.log('document.getElementsByTagName("div"):', exTag);
console.log('document.getElementsByTagName("div").length:', exTag.length);
console.log('document.getElementsByTagName("div")[0]:', exTag[0]);
console.log('document.getElementsByTagName("div")["id3"]:', exTag["id3"]);
console.log("************\nQuerySelector:");
console.log("document.querySelector('[src]'):", exSelec);
console.log("document.querySelector('.class1'): ", exSelec1);
console.log("document.querySelector('div'): ", exSelec2);
console.log("document.querySelector('#id1'): ", exSelec3);
console.log("************\nQuerySelectorAll:");
console.log("document.querySelectorAll('[src]'): ", exSelecAll);
console.log("document.querySelectorAll('.class1'): ", exSelecAll1);

console.log("************");
console.log("************\ngetElementsByClassName:");
console.log("document.getElementsByClassName('class1'):", exClass1);
console.log("document.getElementsByClassName('class1').length:", exClass1.length);
console.log("************\nQuerySelectorAll:");
console.log("document.querySelectorAll('.class1'):", exSelecAll1);
console.log("document.querySelectorAll('.class1').length:", exSelecAll1.length);
console.log("************");
console.log("************");
console.log("************");
console.log('percorrendo exClass1 com for (ok)')
for(let i=0; i<exClass1.length; i++){
  console.log("exClass1[i]:", exClass1[i]);
}
console.log("************");
console.log('percorrendo exSelecAll1 com for (ok)')
for(let i=0; i<exSelecAll1.length; i++){
  console.log("exSelecAll1[i]:", exSelecAll1[i]);
}
console.log("************");
console.log('checking if exSelecAll1 is an Array (false)')
console.log('typeof exSelecAll1: ', typeof exSelecAll1)
console.log('Array.isArray(exSelecAll1): ', Array.isArray(exSelecAll1))

console.log("************");
console.log('checking if exClass1 is an Array (false)')
console.log('typeof exClass1: ', typeof exClass1)
console.log('Array.isArray(exClass1): ', Array.isArray(exClass1))

console.log("************");

console.log('extraindo keys do exSelecAll1 e listando-o (ok)')

console.log('Object.keys(exSelecAll1): ')
console.log(Object.keys(exSelecAll1));

Object.keys(exSelecAll1).forEach(key => {
  console.log(exSelecAll1[key])
})

console.log("************");

console.log('extraindo keys do exClass1 e listando-o (ok)')
console.log('Object.keys(exClass1): ')
console.log(Object.keys(exClass1));

Object.keys(exClass1).forEach(key => {
  console.log(exClass1[key])
})

console.log("************");

console.log('percorrendo exSelecAll1 com map (bad)')
try {
  exSelecAll1.map(item => {
    console.log("document.getElementsByClassName('exSelecAll1'):", item);
  })
}catch(e){
  console.log(e);
}
console.log('try catch impediu de quebrar nosso script!')

console.log("************");
console.log('percorrendo exClass1 com map (bad)')
try {
  exClass1.map(item => {
    console.log("document.getElementsByClassName('class1'):", item);
  })
}catch(e){
  console.log(e);
}
console.log('try catch impediu de quebrar nosso script!')
console.log("************");
console.log('percorrendo exSelecAll1 com map (bad)')
try {
  exSelecAll1.map(item => {
    console.log("document.getElementsByClassName('exSelecAll1'):", item);
  })
}catch(e){
  console.log(e);
}
console.log('try catch impediu de quebrar nosso script!')
console.log("************");
console.log('percorrendo Array.from(exClass1) com map (ok)')
Array.from(exClass1).map(item => {
  console.log("document.getElementsByClassName('class1'):", item);
})
console.log("************");
console.log('percorrendo Array.from(exSelecAll1) com map (ok)')
Array.from(exSelecAll1).map(item => {
  console.log("document.getElementsByClassName('exSelecAll1'):", item);
})
console.log("************");
console.log('percorrendo exSelecAll1 com forEach - NodeList (ok)')
exSelecAll1.forEach(el => console.log(el));
try{
  console.log('percorrendo exClass1 com forEach - HTMLCollection (bad)')
  exClass1.forEach(el => console.log(el));
}catch(e){
  console.log(e);
}
console.log('try catch impediu de quebrar nosso script!')

console.log("************");

console.log('Array.from(exClass1):')
console.log(Array.from(exClass1))
console.log('percorrendo Array.from(exClass1) com forEach - (ok)')
Array.from(exClass1).forEach(el => console.log(el));