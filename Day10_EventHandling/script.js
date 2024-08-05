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

