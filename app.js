let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
const taskList = document.getElementById("task-list");

function Add()
{
    if(inputs.value == "")
    {
        alert("Please Enter Task")
    }
    else
    {
        let newEle = document.createElement("li");
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash trash"></i>`;
        taskList.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove()
        {
            newEle.remove();
        }
    }
}
taskList.addEventListener("click", (e) =>
{
    if (e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
    }
});


// User enter sign of keyboard
let board = document.querySelector('.to-do-board');
inputs.addEventListener('keypress', (e) =>
{
    if (e.key === 'Enter' && inputs.value !== '')
    {
    
        if(inputs.value == "")
        {
            alert("Please Enter Task")
        }
        else
        {
            
        }

        let newEle = document.createElement("li");
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash trash"></i>`;
        taskList.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click" , remove);

        function remove()
        {
            newEle.remove();
        }
    }
});