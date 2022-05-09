const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');


inputBox.onkeyup = () =>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add('active');
    } else{
        addBtn.classList.remove('active');
    }
}
showTasks();

// Plus icon click
addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}


// Function: Add task list inside the ul
function showTasks(){
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add('active');
    }else{
        deleteAllBtn.classList.remove('active');
    }
    let newLiTag = '';
    listArr.forEach((element, index)=> {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = '';
}

// Delete the task
function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); 
  }
// Delete All tasks
deleteAllBtn.onclick = ()=>{
    listArr = []; 
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}