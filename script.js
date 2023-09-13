let first_name= "Shehab", last_name="Hesham",Age=22;

let div= document.getElementsByTagName('div')[0];

let paragraph1= document.getElementsByTagName('p')[0];
let paragraph2= document.getElementsByTagName('p')[1];
let paragraph3= document.getElementsByTagName('p')[2];

paragraph1.textContent=first_name;
paragraph2.textContent=last_name;
paragraph3.textContent=Age;

div.classList.add("container");

console.error("Done");
