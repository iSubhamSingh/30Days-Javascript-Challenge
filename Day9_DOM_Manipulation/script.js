//Activity 1
//Task 1
document.getElementById('header').textContent = "Changed Heading";

//Task 2
document.querySelector('.para').style.backgroundColor = 'red';

//Activity 2
//Task 3
let div = document.createElement('div');
div.textContent = 'Text inside div';
document.body.appendChild(div);

//Task 4
let li = document.createElement('li');
    li.textContent = 'Second';
    let ul = document.querySelector('ul');
    ul.appendChild(li);