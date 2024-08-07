//Activity 1
//Task 1
document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('para').textContent = "Text content of paragraph changed on click of the button";
})

//Task 2
//toggle image visibility
let img = document.getElementById('image');
img.addEventListener('dblclick', () => {
    img.style.visibility = (img.style.visibility == 'hidden') ? 'visible' : 'hidden';   

})


//Activity 2
//Task 3
document.getElementById('para').addEventListener('mouseenter', () => {
    document.getElementById('para').style.backgroundColor = 'red';
})

//Task 4
document.getElementById('para').addEventListener('mouseout', () => {
    document.getElementById('para').style.backgroundColor = 'white';
})


//Activity 3
//Task 5
let inputField = document.getElementById('input');
inputField.addEventListener('keydown', (event) => {
    console.log(event.key);
})

//Task 6
inputField.addEventListener('keyup', () => {
    document.getElementById('paragraph').textContent = inputField.value ;
})


//Activity 4
//Task 7
let form = document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`Name : ${document.getElementById('name').value}`);
    console.log(`Gender : ${document.getElementById('dropdown').value}`);
})


//Task 8
document.getElementById('dropdown').addEventListener('change', () => {
    document.getElementById('selectPara').textContent = document.getElementById('dropdown').value;
})




//Activiy 5
//Task 9
let list = document.getElementById('list');
list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI'){
        console.log(event.target.textContent);
        
    }
})


//Task 10
let Addbtn = document.getElementById('Addbtn');

Addbtn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
})
