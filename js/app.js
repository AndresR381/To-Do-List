const addButton = document.getElementById('addBtn');
const textInput = document.getElementById('textInput');
const removeButton = document.getElementById('removeBtn')

const tasks = []

const addTask = document.querySelectorAll('.add-btn');
addTask.forEach(addButton => {
    addButton.addEventListener('click', (e)=> {
        e.preventDefault
        tasks.push(textInput.value)

        // make li.innerText = textInput.value

        const listItem = document.getElementById('listItem')
        listItem.innerText = textInput.value

        console.log(tasks);

        // have every new item make a new li
        // click creates new li and outputs new item into the new li
    })
})

const removeTask = document.querySelectorAll('.remove-btn')
removeTask.forEach(removeButton => {
    removeButton.addEventListener('click', (e)=> {
        e.preventDefault
        tasks.shift(textInput.value)
        
        console.log(tasks);
    })
})
// make task array. use shift and push for tasks - complete
// next: make tasks appear in ul

