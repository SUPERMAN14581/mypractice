const todos = []

const maindiv = document.querySelector('.todos3')

const form = document.querySelector('form')

form.addEventListener('submit',additem)

const input = document.querySelector('.input1')

const clearBtn = document.querySelector(".clear-btn")

clearBtn.addEventListener('click',clearItems);

const editinput = document.querySelector('input.value') 

function additem(event){
    event.preventDefault()

    const item = {
        id: Date.now(),
        task :input.value
    }
   todos.push(item)

   input.value=''
   displayListToScreen()
   }

function displayListToScreen(){

    maindiv.innerHTML = ''
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
 
        const itemHTMl = 
         `
           <div class="grocery-item">
                 <p class = "title">${element.task}</p>
                 <button class="edit-btn"onclick="editItem(${element.id})"><i class="fas fa-edit"></i></button>
                 <button class="delete-btn" onclick="deleteItem(${element.id})"><i class="fas fa-trash"></i></button>
             </div>
         `
         maindiv.innerHTML = maindiv.innerHTML + itemHTMl
         showclearbtn()

    }
    
}

function deleteItem(id){
    let itemIndex = -1
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        if(element.id === id){
            itemIndex = i
        }
    }

    todos.splice(itemIndex, 1)
    console.log("updated todos", todos)

    displayListToScreen()
}

function showclearbtn(){
    clearBtn.classList.remove('clear-inactive')
}

function clearItems(){
    todos.splice(0, todos.length)
     displayListToScreen()
}

function editItem(id){
    let itemIndex = -1
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        if(element.id === id){
            itemIndex = i
        }
    }

    todos.push(itemIndex, 0, todos[i])
    console.log("updated todos", todos)

   editinput.value = displayListToScreen()

}
