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

//Activity 3
//Task 5
document.getElementById('header').remove();

//Task 6
ul.lastChild.remove();


//Activity 4
//Task 7
let img = document.querySelector('img');
img.src = "https://www.google.com/logos/doodles/2024/paris-games-sailing-day-2-6753651837110530-la202124.gif";

//Task 8
let list = document.querySelector('.list');
list.classList.remove('list');



//Activity 5
//Task 9
document.getElementById('btn').addEventListener('click', () => {
    document.querySelector('.para').textContent = "Changed paragraph text content ";
})

//Task 10
document.querySelector('.para').addEventListener('mouseover' , () => {
    document.querySelector('.para').style.border = '1px solid red';
})