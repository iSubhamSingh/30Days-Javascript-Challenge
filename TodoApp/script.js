    
    document.getElementById('btn').addEventListener('click', () => {
        const value = document.getElementById('inputBox').value;
        console.log(value);
        let item = document.createElement('div');
        item.innerHTML = `<div>${value}<button onclick='deleteFn(this)'>Delete</button></div>`;
        document.getElementById('result').appendChild(item);


    });

    function deleteFn(todoItem) {
        todoItem.parentNode.parentNode.removeChild(todoItem.parentNode);
    }


